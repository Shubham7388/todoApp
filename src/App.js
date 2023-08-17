import { useState } from "react";
import React from 'react';
import "./App.css";
import TodoinputData from "./components/TodoinputData";
import TableData from "./components/TableData";

function useLocalStorage(key, initialValue) {
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  const [value, setValue] = useState(initial);

  const updateValue = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, updateValue];
}
function App() {
const [formData, setFormdata] = useLocalStorage("formData", []);

  return (
    <>
    <div className="App">
    <h1 className="todoHeading">Todo App</h1>
      <TodoinputData formData={formData} setFormdata={setFormdata} />
      <div className="tasktable">
      <TableData formData={formData} setFormdata={setFormdata} />
      </div>
    </div>
    </>
  );
}

export default App;
