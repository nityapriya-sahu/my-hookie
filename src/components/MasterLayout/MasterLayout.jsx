import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./MasterLayout.css";

const MasterLayout = () => {
  return (
    <div className="master-layout">
      <header className="navbar">My-Hookie</header>
      <div className="main-container">
        <aside className="sidebar">
          <ul>
            <li>
              <Link to="/">Counter</Link>
            </li>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
            <li>
              <Link to="/modal">Modal</Link>
            </li>
            <li>
              <Link to="/search-filter">Search Filter</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/parent-child">Parent-Child</Link>
            </li>
            <li>
              <Link to="/pagination">Pagination</Link>
            </li>
            <li>
              <Link to="/conditional-render">Conditional Render</Link>
            </li>
            <hr />
            <li>
              <Link to="/tab-form">Tab Form</Link>
            </li>
            <li>
              <Link to="/auto-search">Auto Search</Link>
            </li>
            <li>
              <Link to="/file-explorer">File Explorer</Link>
            </li>
            <li>
              <Link to="/progress-bar">Progress Bar</Link>
            </li>
            <hr />
            <h2 style={{ textAlign: "center" }}>All Hooks</h2>
            <li>
              <Link to="/use-state">useState</Link>
            </li>
            <li>
              <Link to="/use-effect">useEffect</Link>
            </li>
            <li>
              <Link to="/use-ref">useRef</Link>
            </li>
            <li>
              <Link to="/use-memo">useMemo</Link>
            </li>
            <li>
              <Link to="/use-callback">useCallback</Link>
            </li>
            <li>
              <Link to="/use-reducer">useReducer</Link>
            </li>
          </ul>
        </aside>

        {/* main content area */}
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MasterLayout;
