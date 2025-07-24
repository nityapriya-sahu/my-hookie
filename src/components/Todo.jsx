import React, { useState } from "react";

// const Todo = () => {
//   const [inputData, setInputData] = useState("");
//   const [todoData, setTodoData] = useState([]);
//   // const [checked, setChecked] = useState(false);
//   const handleAddTodo = () => {
//     if (inputData) {
//       setTodoData([...todoData, inputData]);
//       setInputData("");
//       console.log(todoData);
//     }
//   };

//   const deleteTodo = (index) => {
//     confirm("Are you sure want to Delete?");
//     setTodoData(todoData.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="todo_main_container">
//       <div className="todo_first_container">
//         <input
//           type="text"
//           placeholder="Add todo..."
//           value={inputData}
//           onChange={(e) => setInputData(e.target.value)}
//           autoFocus
//         />
//         <button onClick={handleAddTodo}>ADD</button>
//       </div>
//       <div>
//         {todoData.map((item, index) => (
//           <div className="todo_data_container" key={index}>
//             <h4>{item}</h4>
//             <button onClick={() => deleteTodo(index)}>Delete</button>
//             <input
//               type="checkbox"
//               style={{
//                 height: "20px",
//                 width: "20px",
//               }}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Todo;

const Todo = () => {
  const [input, setInput] = useState("");
  const [todosData, setTodosData] = useState([]);

  const handleAddTodo = () => {
    if (input.trim() === "") return;
    const item = {
      id: todosData.length + 1,
      text: input,
      completed: false,
    };
    setTodosData((prev) => [...prev, item]);
    setInput("");
  };

  const handleCheckbox = (id) => {
    setTodosData(
      todosData.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            completed: !t.completed,
          };
        } else {
          return t;
        }
      })
    );
  };

  const handleDelete = (id) => {
    setTodosData(todosData.filter((i) => i.id !== id));
  };
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Enter Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        autoFocus
      />
      <button onClick={() => handleAddTodo()}>Add</button>

      <div>
        <ul>
          {todosData.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCheckbox(item.id)}
              />
              <span className={item.completed ? "strike_through" : ""}>
                {item.text}
              </span>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Todo;
