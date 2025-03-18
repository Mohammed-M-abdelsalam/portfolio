import { NavLink } from "react-router-dom"
import "./nav.css"
import { useEffect, useRef, useState } from "react"


function Nav({toggleTheme}) {
    const navRef = useRef();
    const closeRef = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const [isLaptop, setIsLaptop] = useState(window.innerWidth >= 600);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setIsLaptop(window.innerWidth >= 600);
        })
        return () => {
            window.removeEventListener("resize", () => {
                setIsLaptop(window.innerWidth >= 600);
            })
        }
    }, []);
    function showNav() {
        setIsVisible(true);
        closeRef.current.focus();
        navRef.current.classList.add("active-nav");
    }
    function closeNav() {
        setIsVisible(false);
        navRef.current.classList.remove("active-nav");
    }
    return (
        <div className="nav-container d-flex justify-content-around align-items-center p-4">
            <div className="logo fs-3 fw-bold"> Portfolio </div>
            <nav className="d-flex align-items-center w-75"  ref={navRef}>
                <button tabIndex={isVisible ? 0 : -1} ref={closeRef} className="close-nav" aria-label="close navigation menu" onClick={closeNav}>
                    <span className="material-symbols-outlined">close</span> 
                </button>
                <button tabIndex={isVisible ? 0 : -1} className="dark-mode-mobile" aria-label={localStorage.getItem("theme") === "dark" ? "switch tolight mode" : "switch to dark mode"} onClick={toggleTheme}>
                    <span className="material-symbols-outlined"> {localStorage.getItem("theme") === "dark" ? "light_mode" : "dark_mode"}</span>
                </button>
                <ul className="m-0">
                    <li><NavLink className="position-relative text-decoration-none fs-5" tabIndex={isVisible || isLaptop ? 0 : -1} to="/">Home</NavLink></li>
                    <li><NavLink className="position-relative text-decoration-none fs-5" tabIndex={isVisible || isLaptop ? 0 : -1} to="/skills">skills</NavLink></li>
                    <li><NavLink className="position-relative text-decoration-none fs-5" tabIndex={isVisible || isLaptop ? 0 : -1} to="/projects">projects</NavLink></li>
                </ul>
            </nav>
            {
                <button className="dark-mode" aria-label={localStorage.getItem("theme") === "dark" ? "switch tolight mode" : "switch to dark mode"} onClick={toggleTheme}>
                    <span className="material-symbols-outlined"> {localStorage.getItem("theme") === "dark" ? "light_mode" : "dark_mode"}</span>
                </button>
            }
            <button tabIndex={isVisible ? -1 : 0} className="menu" aria-label="show navigation menu" onClick={showNav}>
                <span className="material-symbols-outlined"> menu </span>       
            </button>
        </div>
    )
}

export default Nav