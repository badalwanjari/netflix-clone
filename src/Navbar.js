import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    const transitionNavbar = () => {
        if (window.scrollY > 300) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__content">
                <img
                    className="nav__logo"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt=""
                    onClick={()=>navigate("/")}
                />
                <img
                    className="nav__avtar"
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
                    alt=""
                    onClick={()=>navigate("/profile")}
                />
            </div>
        </div>
    );
}
