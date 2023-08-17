import React, { useState } from "react";

function TodoinputData({ setFormdata, formData }) {
  const [data, setData] = useState({});
  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, status: "pending" });
  }

  function onSubmit(e) {
    e.preventDefault();
    if (data.title) {
      e.target.reset();
      setFormdata([...formData, data]);
      setData({});
    } else {
      alert("Please fill all details");
    }
  }

  return (
    <div className="formmain">
      <form onSubmit={onSubmit} className="form">
        <div>
          <label>Task : </label> <br />
          <br />
          <input
            type="text"
            placeholder="Enter Your Task"
            name="title"
            onChange={(e) => handleChange(e)}
          />{" "}
          &emsp;{" "}
        </div>
     
        <div>
          <label>Priority: </label>
          <br />
          <br />
          Low
          <input
            onClick={(e) => handleChange(e)}
            type="radio"
            value={"Low"}
            name="priority"
          />{" "}
          Intermediate
          <input
            onClick={(e) => handleChange(e)}
            type="radio"
            name="priority"
            value={"Intermediate"}
          />{" "}
          High
          <input
            type="radio"
            name="priority"
            value={"High"}
            onClick={(e) => handleChange(e)}
          />
        </div>
        <div>
          <input type="submit" className="btn"/>
        </div>
      </form>
    </div>
  );
}

export default TodoinputData;
