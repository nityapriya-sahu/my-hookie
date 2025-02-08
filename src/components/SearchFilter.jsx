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
  // const [searchItem, setSearchItem] = useState("");

  // basic
  // const filteredItems = items.filter((item) =>
  //   item.toLowerCase().includes(searchItem.toLowerCase())
  // );

  //using memo for optimized search
  // const result = useMemo(() => filteredItems, [searchItem]);

  // ===========================================================

  // API Based Search-Filter

  const [apiData, setApiData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchItem);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchItem]);

  const fetchData = async () => {
    const fetchApi = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await fetchApi.json();
    console.log(jsonData, "jsondata");
    setApiData(jsonData);
  };

  // const filteredItems = apiData.filter((item) => {
  //   return item?.name.toLowerCase().includes(debouncedSearch.toLowerCase());
  // });

  const filteredUsers = useMemo(() => {
    return apiData.filter((item) => {
      return item?.name.toLowerCase().includes(debouncedSearch.toLowerCase());
    });
  }, [debouncedSearch, apiData]);

  return (
    <div className="todo_main_container">
      {/* <h2>Search (Basic)</h2>
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
      </div> */}

      {/* ====================================================== */}
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

      {/* ====================================================== */}
      {/* API Based Search-Filter */}
      <h2>API Based Search-Filter</h2>
      <input
        type="text"
        placeholder="Type Here..."
        className="search_Input"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <ul style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((item) => <li key={item.id}>{item.name}</li>)
        ) : (
          <h1>No data found</h1>
        )}
      </ul>
    </div>
  );
};

export default SearchFilter;
