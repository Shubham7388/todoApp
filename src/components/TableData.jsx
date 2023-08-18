import React, { useEffect, useState } from "react";
import { TiDelete } from "react-icons/ti";
import SearchBar from "./SearchBar";

function TaskTable({ formData, setFormdata }) {
  const [searchResult, setSearchResult] = useState([...formData]);
  const [archive, setarchive] = useState([]);
  const [archiveFlag, setActiveFlag] = useState(false);
  useEffect(() => {
    setSearchResult(formData);
  }, [formData]);
  function handleStatus(index) {
    let data = [...formData];
    let obj;
    if (data[index].status === "pending") {
      obj = { ...data[index], status: "complete" };
    } else {
      obj = { ...data[index], status: "pending" };
    }
    data[index] = obj;
    setFormdata(data);
  }
  const handleArchive = (data) => {
    setarchive([...archive, data]);
  };
  const handleDelete = (index) => {
    console.log(index);
    let data = [...formData];
    data.splice(index, 1);
    setFormdata(data);
  };
  function clearAll() {
    let data = [...formData];
    let pendingData = data.filter((ele) => ele.status !== "complete");
    setFormdata(pendingData);
    setarchive((prev) => [
      ...prev,
      ...data.filter((ele) => ele.status === "complete"),
    ]);
  }

  return (
    <div>
      <h1>Task Status</h1>
      <SearchBar
        handleArchive={handleArchive}
        formData={formData}
        setFormData={setFormdata}
        setSearchResult={setSearchResult}
      />
      <table cellSpacing={0} className="tableData">
        <thead>
          <tr>
            <th style={{ width: "250px" }}>Title</th>
            <th style={{ width: "250px" }}>Priority</th>
            <th style={{ width: "250px" }}>Action</th>
            <th style={{ width: "150px" }}>Status</th>
            <th style={{ width: "150px" }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {searchResult.length
            ? searchResult.map((task, index) => {
                return (
                  <>
                      <tr
                        style={{
                          background:
                            task.priority === "High"
                              ? "#ff6666"
                              : task.priority === "Intermediate"
                              ? "#ccff99"
                              : "#4d004d",
                          color:
                            task.priority === "Intermediate" ? "black" : "white",
                        }}
                      >
                        <td>{task.title}</td>

                        <td>{task.priority}</td>
                        <td>
                          <input
                            type="checkbox"
                            checked={task.status !== "pending"}
                            onClick={() => handleStatus(index)}
                          />
                        </td>
                        <td>{task.status}</td>
                        <td>
                          <TiDelete
                            style={{
                              color: "red",
                              backgroundColor: "white",
                              marginLeft: "10px",
                            }}
                            onClick={() => handleDelete(index)}
                          />
                        </td>
                      </tr>
                  </>
                );
              })
            : ""}
          {!formData.length ? "No Row Found" : ""}
        </tbody>
      </table>

      <button onClick={clearAll} className="btn">
        Clear All
      </button>
      <button onClick={() => setActiveFlag(!archiveFlag)} className="btn">
        Archieve
      </button>

      <table cellSpacing={0} className="tableData">
        {archiveFlag && (
          <thead>
            <tr>
              <th style={{ width: "250px" }}>Title</th>
              <th style={{ width: "250px" }}>Priority</th>
              <th style={{ width: "150px" }}>Status</th>
            </tr>
          </thead>
        )}
        <tbody>
          {archiveFlag &&
            archive.length &&
            archive.map((task, index) => {
              return (
                <>
                  
                    <tr
                      style={{
                        background:
                          task.priority === "High"
                            ? "#ff6666"
                            : task.priority === "Intermediate"
                            ? "#ccff99"
                            : "#4d004d",
                        color:
                          task.priority === "Intermediate" ? "black" : "white",
                      }}
                      >
                      <td>{task.title}</td>
                      <td>{task.priority}</td>
                      <td>{task.status}</td>
                    </tr>                 
                </>
              );
            })}
          {!formData.length ? "No Row Found" : ""}
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;