import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="Remind me home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <rect x="4" y="5.5" width="16" height="15" rx="4" />
              <path d="M8 3.5v4M16 3.5v4M4 10h16M8.5 14l2.2 2.2 4.8-4.7" />
            </svg>
          </span>
          <span className="brand-name">remind<span>me</span></span>
        </Link>

        <nav className="primary-nav" aria-label="Main navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}
          >
            Today
          </NavLink>
          <NavLink
            to="/upcoming"
            className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}
          >
            Upcoming
          </NavLink>
        </nav>

        <NavLink className="new-reminder-link" to="/add">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M10 4v12M4 10h12" />
          </svg>
          <span>New reminder</span>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
