import { useState } from "react";
import "../styles/GooeyMenu.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function GooeyMenu() {
    const [open, setOpen] = useState(false);

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
                    <span class="hamburger hamburger-1"></span>
                    <span class="hamburger hamburger-2"></span>
                    <span class="hamburger hamburger-3"></span>
                </button>

                <div className={`menu ${open ? "open" : ""}`}>
                    <a href="#about" class="menu-item"> <i class="fa fa-plus"></i> </a>
                    <a href="#skills" class="menu-item"> <i class="fa fa-bar-chart"></i> </a>
                    <a href="#experience" class="menu-item"> <i class="fa fa-heart"></i> </a>
                    <a href="#education" class="menu-item"> <i class="fa fa-heart"></i> </a>
                    <a href="#projects" class="menu-item"> <i class="fa fa-heart"></i> </a>
                    <a href="#contact" class="menu-item"> <i class="fa fa-envelope"></i> </a>
                </div>
            </div>
        </>
    );
}
