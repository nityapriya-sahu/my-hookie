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
              <Link to="/pagination">Pagination</Link>
            </li>
            <hr />
            <h2 style={{ textAlign: "center" }}>All Hooks</h2>
            <li>
              <Link to="/use-state">useState</Link>
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
