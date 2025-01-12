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
        <div className="nav-container">
            <div className="logo"> Portfolio </div>
            <nav  ref={navRef}>
                <button tabIndex={isVisible ? 0 : -1} ref={closeRef} className="close-nav" aria-label="close navigation menu" onClick={closeNav}>
                    <span className="material-symbols-outlined">close</span> 
                </button>
                <button tabIndex={isVisible ? 0 : -1} className="dark-mode-mobile" aria-label="dark mode" onClick={toggleTheme}>
                    <span className="material-symbols-outlined">dark_mode</span>
                </button>
                <ul>
                    <li><NavLink tabIndex={isVisible || isLaptop ? 0 : -1} to="/">Home</NavLink></li>
                    <li><NavLink tabIndex={isVisible || isLaptop ? 0 : -1} to="/skills">skills</NavLink></li>
                    <li><NavLink tabIndex={isVisible || isLaptop ? 0 : -1} to="/projects">projects</NavLink></li>
                </ul>
            </nav>
            <button className="dark-mode" aria-label="dark mode" onClick={toggleTheme}>
                <span className="material-symbols-outlined">dark_mode</span>
            </button>
            <button className="menu" aria-label="show navigation menu" onClick={showNav}>
                <span className="material-symbols-outlined">menu </span>       
            </button>
        </div>
    )
}

export default Nav