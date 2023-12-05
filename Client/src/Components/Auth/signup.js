import './signup.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as actions from '../../redux/actions'
import Loading from '../loading/loading';

const Signup = (props) => {
    const { setOpenSignup, setOpenLogin, setOpenUpdate } = props;
    const loading = useSelector((state) => state.auth.signup?.isFitching);
    const error = useSelector((state) => state.auth.signup?.message);
    const isRegister = useSelector((state) => state.auth.signup?.success);
    const [newUser, setNewUser] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    })
    const [invalidFields, setInvalidFields] = useState([]);
    const [isBlank, setIsBlank] = useState(false);

    const handleNewUser = (e) => {
        setNewUser((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }
    const handleMoveLogin = () => {
        setOpenLogin(true);
        setOpenSignup(false);
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSetInvalids = () => {
        setInvalidFields([]);
        setIsBlank(false)
    }
    const handleSubmitSignup = async (e) => {
        e.preventDefault();
        const payload = {
            username: newUser.username,
            password: newUser.password
        }
        let invalids = validate(newUser);

        if (invalids === 0) {
            actions.signupUser(payload, dispatch, setOpenSignup, setOpenUpdate)
        }
    }
    const validate = (newUser) => {
        let invalids = 0;
        let fields = Object.entries(newUser);
        fields.forEach(item => {
            if (item[1] === '') {
                setInvalidFields((prev) => [...prev, {
                    name: item[0],
                }])
                setIsBlank(true);
                invalids++;
            }
        })
        fields.forEach(item => {
            switch (item[0]) {
                case 'password':
                    if (item[1].length <= 8) {
                        setInvalidFields((prev) => [...prev, {
                            name: item[0],
                            message: 'Must be 8 characters or more'
                        }])
                        invalids++;
                    }
                    break;
                case 'confirmPassword':
                    if (item[1] !== newUser.password) {
                        setInvalidFields((prev) => [...prev, {
                            name: item[0],
                            message: 'Please valid confirm password'
                        }])
                        invalids++;
                    }
                    break;

                default:
                    break;
            }
        })
        return invalids;
    }


    return (
        <section>
            <div className="signup-page">
                <div className="signup-container">
                    <header className="signup-header">
                        <div className="esc-icon" onClick={() => setOpenSignup(false)}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                                    <path d="m6 6 20 20M26 6 6 26">
                                    </path>
                                </svg>
                            </span>
                        </div>
                        <div className="text-header">
                            {loading && <Loading />}
                            <h1>Log in or sign up</h1>
                        </div>
                        <span></span>
                    </header>
                    <div className='signup-content'>
                        <div className='signup-form'>
                            <div className='form-title'>
                                Welcome to Airbnb
                            </div>
                            <form className='form-input'>
                                <div className='user-input'>
                                    <input className="form-username"
                                        id='username'
                                        type="text"
                                        placeholder="User name"
                                        onChange={handleNewUser}
                                        onFocus={handleSetInvalids} />
                                    <input className="form-password"
                                        id='password'
                                        type="text"
                                        placeholder="Password"
                                        onChange={handleNewUser}
                                        onFocus={handleSetInvalids} />
                                    <input className="form-submit-password"
                                        id='confirmPassword'
                                        type="text"
                                        placeholder="Confirm password"
                                        onChange={handleNewUser}
                                        onFocus={handleSetInvalids} />
                                </div>
                                <a className='form-privacy'><ins>Privacy Policy</ins></a>
                                {invalidFields.length > 0 &&
                                    <div className='valid-err'>
                                        {isBlank && <small className='valid-error'><i>You cannot leave it blank</i></small>}
                                        <small className='valid-error'><i>{invalidFields.find((i) => i.name === 'password')?.message}</i></small>
                                        <small className='valid-error'><i>{invalidFields.find((i) => i.name === 'confirmPassword')?.message}</i></small>
                                    </div>
                                }
                            </form>
                            <div className='form-signup'>
                                <button className='signup-btn' onClick={handleSubmitSignup}>Continue</button>
                            </div>
                            <div className='line-between'>
                                <span></span>
                                <a>or</a>
                                <span></span>
                            </div>
                            <div className='signup-another'>
                                <button className='login-page' onClick={handleMoveLogin}>
                                    Log in
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Signup;