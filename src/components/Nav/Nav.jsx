import { Link, NavLink } from "react-router-dom"
import {HiMenu} from 'react-icons/hi';
import "./nav.css"
import cv from '../../assets/pdf/cv.pdf';
import { useEffect, useRef } from "react";
function Nav({toggleTheme}) {
  const navRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navRef.current.classList.add('opacity-75');
        navRef.current.style.transition = 'opacity 0.5s';
      } else {
        navRef.current.classList.remove('opacity-75');
        navRef.current.style.transition = 'none';
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })
  return (
    <nav ref={navRef} className="navbar navbar-expand-lg position-fixed top-0 w-100 z-3" style={{  minHeight: '80px', backgroundColor: 'var(--mainColor)', color: 'var(--typoColor)' }}>
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
            <ul className="navbar-nav w-25 me-auto py-2 mb-lg-0 d-flex justify-content-between gap-2 mb-3">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link position-relative" aria-current="page">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/skills" className="nav-link position-relative">Skills</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/projects" className="nav-link position-relative">Projects</NavLink>
                </li>
                <li className="nav-item dropdown">
                    <button
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        MY INFO
                    </button>
                    <ul className="dropdown-ul dropdown-menu p-0" style={{ backgroundColor: 'var(--mainColor)', border: '1px solid var(--typoColor)' }}>
                        <li><Link to="/contact" className="dropdown-item hover-link">contact</Link></li>
                        <li><hr className="dropdown-divider m-0" style={{ backgroundColor: 'var(--typoColor)' }} /></li>
                        <li><a href={cv} download='Mohamed_Magdy_CV.pdf' className="dropdown-item">Download CV</a></li>
                    </ul>
                </li>
            </ul>
            <button className="dark-mode bg-transparent rounded-circle d-flex justify-content-center align-items-center" aria-label={localStorage.getItem("theme") === "dark" ? "switch tolight mode" : "switch to dark mode"} onClick={toggleTheme}>
                <span className="material-symbols-outlined"> {localStorage.getItem("theme") === "dark" ? "light_mode" : "dark_mode"}</span>
            </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav