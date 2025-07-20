import React, { useState } from "react";
import json from "./data.json";

//AGAIN REVIEW AND DO IT AGAIN. ALL WRONG IN THIS CODE, (Code is breaking)
//Watch video again
const List = ({ list, addNodeToList }) => {
  const [isExpanded, setIsExpanded] = useState({});
  return (
    <div style={{ paddingLeft: "10px" }}>
      {list.map((node) => (
        <div key={node.id}>
          {node?.isFolder && (
            <span
              onClick={() =>
                setIsExpanded((prev) => ({
                  ...prev,
                  [node.name]: !prev[node.name],
                }))
              }
            >
              {isExpanded?.[node.name] ? "-" : "+"}
            </span>
          )}
          <span>{node.name}</span>
          {node?.isFolder && (
            <button onClick={() => addNodeToList(node.id)}>ADD</button>
          )}

          {isExpanded?.[node.name] && node?.children && (
            <List list={node.children} />
          )}
        </div>
      ))}
    </div>
  );
};

const MainFolder = () => {
  const [data, setData] = useState(json);
  //Important . Tree dsa
  const addNodeToList = (parendId) => {
    const name = prompt("Enter Name");

    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id === parendId) {
          return {
            ...node,
            children: [
              ...node.children,
              { id: "123", name: name, isFolder: true, children: [] },
            ],
          };
        }
        if (node.children) {
          return {
            ...node,
            children: updateTree(node.children),
          };
          return node;
        }
      });
    };
    setData((prev) => updateTree(prev));
  };
  return (
    <div>
      <h1>File Explorer / VSCode Sidebar</h1>
      <List list={data} addNodeToList={addNodeToList} />
    </div>
  );
};

export default MainFolder;
