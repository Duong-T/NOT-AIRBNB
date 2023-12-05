import { useState } from 'react';
import './login.scss';
import * as actions from "../../redux/actions"
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const Login = (props) => {
    const { setOpenSignup, setOpenLogin } = props;
    const [newUser, setNewUser] = useState({
        username: '',
        password: ''
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleNewUser = (e) => {
        setNewUser((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }
    const handleCloseLogin = () => {
        setOpenLogin(false);
    }
    const handleMoveSignup = () => {
        setOpenLogin(false);
        setOpenSignup(true);
    }
    const handleLogin = (e) => {
        e.preventDefault();
        actions.loginUser(newUser, dispatch, setOpenLogin)
    }
    return (
        <section>
            <div className="login-page">
                <div className="login-container">
                    <header className="login-header">
                        <div className="esc-icon">
                            <span onClick={handleCloseLogin}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                                    <path d="m6 6 20 20M26 6 6 26">
                                    </path>
                                </svg>
                            </span>
                        </div>
                        <div className="text-header">
                            <h1>Log in or sign up</h1>
                        </div>
                        <span></span>
                    </header>
                    <div className='login-content'>
                        <div className='login-form'>
                            <div className='form-title'>
                                Welcome to Airbnb
                            </div>
                            <form className='form-input'>
                                <div className='user-input'>
                                    <input className="form-username"
                                        id='username'
                                        type="text"
                                        placeholder="User name"
                                        onChange={handleNewUser} />
                                    <input className="form-password"
                                        id='password'
                                        type="text"
                                        placeholder="Password"
                                        onChange={handleNewUser} />
                                </div>
                                <a className='form-privacy'><ins>Privacy Policy</ins></a>
                                <div className='form-submit'>
                                    <button className='submit-btn'
                                        type='submit'
                                        onClick={handleLogin}>Continue</button>
                                </div>
                            </form>
                        </div>
                        <div className='line-between'>
                            <span></span>
                            <a>or</a>
                            <span></span>
                        </div>
                    </div>
                    <div className='login-another'>
                        <button className='signup-page' onClick={handleMoveSignup}>
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Login;