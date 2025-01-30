import React, { useEffect, useMemo, useState } from "react";

const items = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vue.js",
  "Angular",
  "Sass / SCSS",
  "Java",
  "Python",
  "PHP",
  "Ruby",
  "Node.js",
  "Go (Golang)",
  "C#",
  "Swift",
  "Kotlin",
  "Objective-C",
  "Dart",
  "React Native",
  "SQL",
  "NoSQL",
  "GraphQL",
  "R",
  "Julia",
  "MATLAB",
  "Python",
  "Bash/Shell",
  "PowerShell",
  "Ansible",
  "Terraform",
  "Docker",
  "Kubernetes",
  "Spring",
  "Django",
  "Flask",
  "Laravel",
  "Git",
];
const SearchFilter = () => {
  const [searchItem, setSearchItem] = useState("");

  // basic
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchItem.toLowerCase())
  );
  //using memo for optimized search
  const result = useMemo(() => filteredItems, [searchItem]);

  // ===========================================================

  return (
    <div className="todo_main_container">
      <h2>Search (Basic)</h2>
      <input
        type="text"
        placeholder="Type Here..."
        value={searchItem}
        name="input1"
        onChange={(e) => setSearchItem(e.target.value)}
        className="search_Input"
        autoFocus
      />
      <div>
        <ul className="list_container">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>No Result Found!</li>
          )}
        </ul>
      </div>

      {/* Using UseMemo */}
      {/* <h2>Search (Memo)</h2>
      <input
        type="text"
        placeholder="Type Here..."
        className="search_Input"
        name="input2"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <div>
        <ul className="list_container">
          {result.length > 0 ? (
            result.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>No Result Found!</li>
          )}
        </ul>
      </div> */}
    </div>
  );
};

export default SearchFilter;
