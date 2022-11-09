import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//selector
import { selectUser } from '../../utils/selector';
//Redux
// import { userLogin, userRegister } from '../../features/user/userActions';
import { userLogin } from '../../redux/test/actions';
import { useAppDispatch, useAppSelector } from '../../redux/test/store';
import { connect } from "react-redux";

import PropTypes from "prop-types";

import styles from "./Style.module.css";

import { Navigate } from "react-router-dom";
import { RootState } from '../../redux/test/store';
import { IDataAPI } from '../../features/user/User';
interface FormInterface {
    isLogin: boolean,
    title: string
}
function Index({ isLogin, title }: FormInterface) {
    const [data, setData] = useState({
        lastName: '',
        firstName: '',
        email: '',
        password: '',
        confirmPassword: '',
        remember: false,
    })
    // const { loading, error } = useAppSelector(selectUser);
    const dispatch = useAppDispatch()
    const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [event.target.id]:
                event.target.id === "remember" ? !data.remember : event.target.value,
        });
    };

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isLogin) {
            dispatch(userLogin(data));
            <Navigate to="/profile" replace={true} />
        } else {
            if (data.password === data.confirmPassword) {
                // dispatch(userRegister(data))
            }
        }
    }

    return (
        <>
            <i className={`fa fa-user-circle ${styles["sign-in-icon"]}`} />
            <h1>{title}</h1>
            <form onSubmit={submitForm}>
                {/* {error && <p className={styles.errMsg}>{error}</p>} */}
                <div className={styles["input-wrapper"]}>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" value={data.email} onChange={handleChangeValue} required />
                </div>
                {
                    isLogin ? <>
                        <div className={styles["input-wrapper"]}>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" value={data.password} onChange={handleChangeValue} autoComplete="true" required />
                        </div>
                        <div className={styles["input-remember"]}>
                            <input type="checkbox" id="remember-me" onChange={handleChangeValue} />
                            <label htmlFor="remember-me"> Remember me</label>
                        </div>
                    </>
                        :
                        <>
                            <div className={styles["input-wrapper"]}>
                                <label htmlFor="password">First Name</label>
                                <input type="text" id="firstName" value={data.firstName} onChange={handleChangeValue} required />
                            </div>
                            <div className={styles["input-wrapper"]}>
                                <label htmlFor="password">Last Name</label>
                                <input type="text" id="lastName" value={data.lastName} onChange={handleChangeValue} required />
                            </div>
                            <div className={styles["input-wrapper"]}>
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" value={data.password} onChange={handleChangeValue} required />
                            </div>
                            <div className={styles["input-wrapper"]}>
                                <label htmlFor="password">Confirm Password</label>
                                <input type="password" id="confirmPassword" value={data.confirmPassword} onChange={handleChangeValue} required />
                            </div>
                            <Link to={'/signin'}>I already have an account</Link>
                        </>
                }
                <button className={styles["sign-in-button"]}>{title}</button>
            </form >
        </>
    )
}


Index.propTypes = {
    isLogin: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
}

const mapStateToProps = (state: any) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { userLogin }
)(Index);