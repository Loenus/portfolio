import { ThemeContext } from "../context/ThemeContext"
import { useState, useContext } from "react";
import "../styles/GooeyMenu.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function GooeyMenu() {
    const [open, setOpen] = useState(false);

    const { theme } = useContext(ThemeContext);

    const menuItems = [
        { href: '#about', icon: 'fa-user' },
        { href: '#skills', icon: 'fa-bar-chart' },
        { href: '#experience', icon: 'fa-briefcase' },
        { href: '#education', icon: 'fa-award' },
        { href: '#projects', icon: 'fa-diagram-project' },
        { href: '#contact', icon: 'fa-envelope' },
    ];


    return (
        <>
            {/* SVG filter */}
            <svg
                aria-hidden="true"
                focusable="false"
                style={{
                    position: "absolute",
                    width: 0,
                    height: 0,
                    overflow: "hidden"
                }}
            >
                <filter id="gooey">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="
                        1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 20 -10"
                        result="gooey"
                    />
                    <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
                </filter>
            </svg>

            <div className="gooey-wrapper">
                <button
                    className={`menu-toggle ${open ? "open" : ""}`}
                    onClick={() => setOpen(!open)}
                    aria-label="menu-open"
                >
                    <span className={`hamburger hamburger-1 ${theme === 'dark' ? 'light' : 'dark'}`}></span>
                    <span className={`hamburger hamburger-2 ${theme === 'dark' ? 'light' : 'dark'}`}></span>
                    <span className={`hamburger hamburger-3 ${theme === 'dark' ? 'light' : 'dark'}`}></span>
                </button>


                <div className={`menu ${open ? 'open' : ''}`} aria-hidden={!open}>
                    {menuItems.map((item, index) => (
                        <a key={index} href={item.href} className="menu-item">
                            <i className={`fa ${item.icon} ${theme === 'dark' ? 'light' : 'dark'}`}></i>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}
