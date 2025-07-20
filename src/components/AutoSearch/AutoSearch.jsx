import React, { useEffect, useState } from "react";

const AutoSearch = () => {
  const [result, setResult] = useState([]);
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [cache, setCache] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 300);
    return () => clearTimeout(timer);
  }, [input]);
  const fetchData = async () => {
    if (cache[input]) {
      console.log("CACHE RETURNED", input);

      setResult(cache[input]);
      return;
    }
    try {
      console.log("API CALL", input);
      const data = await fetch(
        `https://dummyjson.com/recipes/search?q=${input}`
      );
      const jsonData = await data.json();
      //   console.log(jsonData.recipes);
      setResult(jsonData.recipes);
      setCache((prev) => ({ ...prev, [input]: jsonData.recipes }));
    } catch (err) {
      console.log("failed to fetch data", err);
    }
  };
  return (
    <div className="auto_search_container">
      <h1>Autocomplete Search</h1>
      <div>
        <input
          type="text"
          placeholder="search here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onBlur={() => setShowResult(false)}
          onFocus={() => setShowResult(true)}
        />
        {showResult && (
          <div className="suggest_container">
            {result.map((item) => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoSearch;
