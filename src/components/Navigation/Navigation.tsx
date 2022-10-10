import React from 'react';
import "./Style.css";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="main-nav">
            <Link to={'/'} className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src="./img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link className="main-nav-item" to={`/signin`}>
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
                {/* <Link className="main-nav-item" to={"./user.html"}>
                    <i className="fa fa-user-circle"></i>
                    Tony
                </Link>
                <Link className="main-nav-item" to={"./index.html"}>
                    <i className="fa fa-sign-out"></i>
                    Sign Out
                </Link> */}
            </div>
        </nav >
    )
}
