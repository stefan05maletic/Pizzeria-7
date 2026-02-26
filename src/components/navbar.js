import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./sidebar"; 
import { faHome, faCoffee, faUtensils, faStore } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false);
    const location = useLocation();

    const links = [
        { name: "Početna", path: "/", icon: faStore }, 
        { name: "Pizzeria Sedmica", path: "/Pizzeria-7", icon: faHome },
        { name: "Sedmica Caffe", path: "/kafeterija", icon: faCoffee },
        { name: "Sedmica Park", path: "/park", icon: faUtensils },
    ];

    function closeSidebar() { setShowSidebar(false); }
    useEffect(() => { setShowSidebar(false); }, [location.pathname]);
    useEffect(() => { document.body.style.overflow = showSidebar ? "hidden" : "auto"; }, [showSidebar]);

    return (
        <>
            <div className="navbar">
                <div className="container nav-container">
                    <Link to="/" className="logo">Novi Sad<span>7</span></Link>
                    <div className="nav-links">
                        {links.map(link => (
                            <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
            </div>
            <Sidebar close={closeSidebar} links={links} show={showSidebar} />
        </>
    );
}