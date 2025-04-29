import { NavLink } from "react-router-dom"
import {HiMenu} from 'react-icons/hi';
import "./nav.css"

function Nav({toggleTheme}) {

  return (
    <nav className="navbar navbar-expand-lg position-fixed top-0 w-100 z-3" style={{  minHeight: '80px', backgroundColor: 'var(--mainColor)', color: 'var(--typoColor)' }}>
      <div className="container-fluid px-5">
        <div className="navbar-brand fw-bold fs-2 me-5">Mohammed</div>
        <button
          className="navbar-toggler shadow-0 menu-btn p-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <HiMenu size={30} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav w-25 me-auto py-2 mb-lg-0 d-flex justify-content-between gap-4">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link position-relative" aria-current="page">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/skills" className="nav-link position-relative">Skills</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/projects" className="nav-link position-relative">Projects</NavLink>
                </li>
                {/* <li className="nav-item dropdown">
                    <button
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Dropdown
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li> */}
            </ul>
            <button className="dark-mode bg-transparent py-3 border-0" aria-label={localStorage.getItem("theme") === "dark" ? "switch tolight mode" : "switch to dark mode"} onClick={toggleTheme}>
                <span className="material-symbols-outlined"> {localStorage.getItem("theme") === "dark" ? "light_mode" : "dark_mode"}</span>
            </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav