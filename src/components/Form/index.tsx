import React, { useState, useEffect } from 'react'
import "./Style.css";

import { Link } from 'react-router-dom'

interface FormInterface {
    isLogin: boolean,
    title: string
}
export default function Index({ isLogin, title }: FormInterface) {
    const [data, setData] = useState({
        lastName: '',
        firstName: '',
        email: '',
        password: '',
        remember: false,
    })
    const [errors, setErrors] = useState([]);

    const handleChangeValue = (event: React.FormEvent<HTMLInputElement>): void => {
        setData({
            ...data,
            [event.currentTarget.id]:
                event.currentTarget.id === "remember" ? !data.remember : event.currentTarget.value,
        });
    };

    const submitForm = (event: React.SyntheticEvent) => {
        event.preventDefault();
        console.log(data)
    }
    return (
        <form onSubmit={submitForm}>
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" value={data.email} onChange={handleChangeValue} required />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={data.password} onChange={handleChangeValue} required />
            </div>
            {
                isLogin ? <>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" onChange={handleChangeValue} />
                        <label htmlFor="remember-me"> Remember me</label>
                    </div>
                    {/* <a href="./user.html" className="sign-in-button">Sign In</a> */}
                    {/* <button className="sign-in-button">Sign In</button> */}
                </> : null
            }
            {
                !isLogin ? <>
                    <div className="input-wrapper">
                        <label htmlFor="password">First Name</label>
                        <input type="text" id="firstName" value={data.firstName} onChange={handleChangeValue} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Last Name</label>
                        <input type="text" id="lastName" value={data.lastName} onChange={handleChangeValue} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" id="confirmPassword" value={data.email} onChange={handleChangeValue} />
                    </div>
                    <Link to={'/signin'}>I already have an account</Link>
                </> : null
            }
            <button className="sign-in-button">{title}</button>
        </form >
    )
}
