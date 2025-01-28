import React, { useState } from "react";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [todoData, setTodoData] = useState([]);
  // const [checked, setChecked] = useState(false);
  const handleAddTodo = () => {
    if (inputData) {
      setTodoData([...todoData, inputData]);
      setInputData("");
      console.log(todoData);
    }
  };

  const deleteTodo = (index) => {
    confirm("Are you sure want to Delete?");
    setTodoData(todoData.filter((_, i) => i !== index));
  };

  return (
    <div className="todo_main_container">
      <div className="todo_first_container">
        <input
          type="text"
          placeholder="Add todo..."
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          autoFocus
        />
        <button onClick={handleAddTodo}>ADD</button>
      </div>
      <div>
        {todoData.map((item, index) => (
          <div className="todo_data_container" key={index}>
            <h4>{item}</h4>
            <button onClick={() => deleteTodo(index)}>Delete</button>
            <input
              type="checkbox"
              style={{
                height: "20px",
                width: "20px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
