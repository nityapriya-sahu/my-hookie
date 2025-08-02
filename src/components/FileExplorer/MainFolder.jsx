import React, { useState } from "react";
import json from "./data.json";

//Watch video again
const List = ({ list, addNodeToList, deleteNodeFromList }) => {
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

          <button onClick={() => deleteNodeFromList(node.id)}>DELETE</button>

          {isExpanded?.[node.name] && node?.children && (
            <List
              list={node.children}
              addNodeToList={addNodeToList}
              deleteNodeFromList={deleteNodeFromList}
            />
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
              {
                id: Date.now().toString(),
                name: name,
                isFolder: true,
                children: [],
              },
            ],
          };
        }
        if (node.children) {
          return {
            ...node,
            children: updateTree(node.children),
          };
        }
        return node;
      });
    };
    setData((prev) => updateTree(prev));
  };

  const deleteNodeFromList = (itemId) => {
    const updateTree = (list) => {
      return list
        .filter((node) => node.id !== itemId)
        .map((node) => {
          if (node.children) {
            return {
              ...node,
              children: updateTree(node.children),
            };
          }
          return node;
        });
    };

    setData((prev) => updateTree(prev));
  };
  return (
    <div>
      <h1>File Explorer / VSCode Sidebar</h1>
      <List
        list={data}
        addNodeToList={addNodeToList}
        deleteNodeFromList={deleteNodeFromList}
      />
    </div>
  );
};

export default MainFolder;
