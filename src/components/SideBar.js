import React from "react";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <>
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink to="/" className="nav-link active">
                Dashboard <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/live" className="nav-link">
                Live Games
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/finished" className="nav-link">
                Finished Matches
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/tostart" className="nav-link">
                Upcoming Matches
              </NavLink>
            </li>
          </ul>
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Others</span>
            <a className="d-flex align-items-center text-muted" href="#"></a>
          </h6>
          <ul className="nav flex-column mb-2">
            <li className="nav-item">
            <NavLink to="/profile" className="nav-link">
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default SideBar;
