import logo1 from './logo1.png';
import './header.scss';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Login from "../../Components/Auth/login";
import Signup from "../../Components/Auth/signup";
import { useSelector, useDispatch } from 'react-redux';
import Update from '../Auth/update';
import * as actions from '../../redux/actions'
import Avatar from '../Auth/avatar';

const Header = () => {
    const [isDropAuth, setIsDropAuth] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const [openSignup, setOpenSignup] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);
    const [openAvatar, setOpenAvatar] = useState(false);

    const isLoggin = useSelector((state) => state.auth.login?.success);
    const currentUser = useSelector((state) => state.auth.login?.currentUser);
    const id = currentUser?.user.id;
    const User = useSelector((state) => state.user.currentUser);
    const avatar = User?.profilePicture;
    const lastName = User?.lastname;

    const dropAuthRef = useRef();
    const dispatch = useDispatch();

    const handleDropDown = () => {
        setIsDropAuth(!isDropAuth)
    }
    const handleLogin = () => {
        setOpenLogin(!openLogin)
        setOpenSignup(false)
    }
    const handleSignup = () => {
        setOpenSignup(!openSignup)
        setOpenLogin(false)
    }
    const handleLogout = () => {
        actions.logoutUser(dispatch)
    }

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropAuthRef.current.contains(e.target)) {
                setIsDropAuth(false)
            }
        }
        document.body.addEventListener('click', closeDropDown);
        return () => document.body.removeEventListener('click', closeDropDown);
    }, [])

    useEffect(() => {
        if (isLoggin) {
            actions.getUser(dispatch, id)
        }
    }, [openLogin, openSignup, openUpdate])
    return (
        <>
            {openUpdate && <Update
                setOpenSignup={setOpenSignup}
                setOpenUpdate={setOpenUpdate}
                setOpenAvatar={setOpenAvatar} />}
            {openLogin && <Login
                setOpenSignup={setOpenSignup}
                setOpenLogin={setOpenLogin} />}
            {openSignup && <Signup
                setOpenSignup={setOpenSignup}
                setOpenLogin={setOpenLogin}
                setOpenUpdate={setOpenUpdate} />}
            {openAvatar && <Avatar
                setOpenAvatar={setOpenAvatar} />}
            <div>
                <header className="headerAb">
                    <div className="logoContainer">
                        <Link to={'/'}>
                            <img src={logo1} className="logoHeader" />
                        </Link>
                    </div>
                    <div className="search-container">
                        <button className="search-location" type="button">
                            <div>Anywhere</div>
                            <span></span>
                        </button>
                        <button className="search-date">
                            <div>Any week</div>
                            <span></span>
                        </button>
                        <button className="search-guests">
                            <div>Add guests</div>
                        </button>
                        <div className="icon-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24">
                                <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <nav className="nav-container">
                        <div className="nav-info">
                            {!isLoggin ? <div>Airbnb your home</div>
                                : <div>Switch your home</div>}

                            <button>
                                <div>
                                    <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false" /*style="display: block; height: 16px; width: 16px; fill: currentcolor;"*/>
                                        <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z">
                                        </path>
                                    </svg>
                                </div>
                            </button>
                        </div>
                        {isLoggin &&
                            <div className="nav-auth">
                                <button ref={dropAuthRef} type='button' onClick={handleDropDown}>
                                    <div>
                                        <svg className="nav-icon1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" ><g fill="none">
                                            <path d="M2 16h28M2 24h28M2 8h28">
                                            </path></g>
                                        </svg>
                                    </div>
                                    {avatar === null ?
                                        <div className='user-content'>
                                            <div className='User-content'>
                                                <span className='avatar-text'>{lastName[0]}</span>
                                            </div>
                                        </div>
                                        :
                                        <img className='avatar-user' src={avatar} />
                                    }

                                </button>
                            </div>
                        }
                        {!isLoggin &&
                            <div className="nav-auth">
                                <button ref={dropAuthRef} type='button' onClick={handleDropDown}>
                                    <div>
                                        <svg className="nav-icon1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" ><g fill="none">
                                            <path d="M2 16h28M2 24h28M2 8h28">
                                            </path></g>
                                        </svg>
                                    </div>
                                    <div>
                                        <svg className="nav-icon2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                                            <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z">
                                            </path>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        }
                    </nav>
                </header>

                {isDropAuth &&
                    <> {isLoggin === false ?
                        <div className="dropdown-auth">
                            <div className="dropdown-content">
                                <div className="dropdown-item1" onClick={handleLogin}>
                                    Log in
                                </div>
                                <div className="dropdown-item2" onClick={handleSignup}>
                                    Sign up
                                </div>
                                <span></span>
                                <div className="dropdown-item3">
                                    Airbnb your home
                                </div>
                                <div className="dropdown-item4">
                                    Help
                                </div>
                            </div>
                        </div>
                        :
                        <div className="dropdown-auth">
                            <div className="dropdown-content-isloggin">
                                <div className="dropdown-item1" onClick={handleLogin}>
                                    Messages
                                </div>
                                <div className="dropdown-item2" onClick={handleSignup}>
                                    Notifications
                                </div>
                                <div className="dropdown-item3" onClick={handleSignup}>
                                    Trips
                                </div>
                                <div className="dropdown-item4" onClick={handleSignup}>
                                    Wishlists
                                </div>
                                <span></span>
                                <div className="dropdown-item5">
                                    Switch your home
                                </div>
                                <div className="dropdown-item6">
                                    Account
                                </div>
                                <span></span>
                                <div className="dropdown-item7">
                                    Help
                                </div>
                                <div className="dropdown-item8" onClick={handleLogout}>
                                    Log out
                                </div>
                            </div>
                        </div>
                    }
                    </>
                }

            </div>

        </>
    )
}

export default Header;