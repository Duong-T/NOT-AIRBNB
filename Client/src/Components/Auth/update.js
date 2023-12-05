import React from 'react'
import './update.scss';
import { useState } from 'react';
import * as actions from '../../redux/actions'
import Loading from '../loading/loading';
import { useDispatch, useSelector } from 'react-redux';

const Update = (props) => {
    const { setOpenSignup, setOpenUpdate, setOpenAvatar } = props
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        dob: '',
        email: '',
        phonenumber: ''
    });
    const [invalidFields, setInvalidFields] = useState([]);
    const [isBlank, setIsBlank] = useState(false);
    const currentUser = useSelector((state) => state.auth.signup?.currentUser);
    const id = currentUser?.user.id;

    const handleUserUpdate = (e) => {
        setUser((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }
    const dispatch = useDispatch();
    const handleUpdateUser = async (e) => {
        e.preventDefault();

        let invalids = validate(user);
        if (invalids === 0) {
            actions.updateUser(user, dispatch, id)
        }
    }
    const validate = (user) => {
        let invalids = 0;
        let fields = Object.entries(user);
        fields.forEach(item => {
            if (item[1] === '') {
                setInvalidFields((prev) => [...prev, {
                    name: item[0],
                }])
                setIsBlank(true);
                invalids++;
            }
        })

        return invalids;
    }


    return (
        <section>
            <div className='update-page'>
                <div className='update-container'>
                    <header className='update-header'>
                        <div className='back-icon'
                            onClick={() => {
                                setOpenSignup(true)
                                setOpenUpdate(false)
                            }}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z">
                                    </path>
                                </svg>
                            </span>
                        </div>
                        <div className='text-header'>
                            <h1>Finish signing up</h1>
                        </div>
                        <span></span>
                    </header>
                    <div className='update-content'>
                        <form className='form-input'>
                            <div className='name-input'>
                                <input className='first-name'
                                    id='firstname'
                                    type='text'
                                    placeholder='First name'
                                    onChange={handleUserUpdate}
                                />
                                <input className='last-name'
                                    id='lastname'
                                    type='text'
                                    placeholder='Last name'
                                    onChange={handleUserUpdate} />
                                <small>Make sure it matches the name on your government ID</small>
                            </div>
                            <div className='dob-input'>
                                <input className='date-of-birth'
                                    id='dob'
                                    type='date'
                                    placeholder='Date of birth'
                                    onChange={handleUserUpdate}
                                />
                                <small>To sign up, you need to be at least 18.
                                    Your birth day won't be shared with other people who use Airbnb
                                </small>
                            </div>
                            <div className='contact-input'>
                                <input className='email'
                                    id='email'
                                    type='email'
                                    placeholder='Email'
                                    onChange={handleUserUpdate} />
                                <input className='phone'
                                    id='phonenumber'
                                    type='phone'
                                    placeholder='Phone number'
                                    onChange={handleUserUpdate}
                                />
                                <small>We'll email or text you trip confirmations and receipts</small>
                                {isBlank && <small>You cannot leave it blank</small>}
                            </div>
                        </form>
                        <div className='form-submit'>
                            <div className='submit-text'>
                                By selecting Agree and countinue, I agree to Airbnb's Terms of Service,
                                Payments Terms of Service, and Nondiscrimination Policy and acknowledge the Privacy Policy
                            </div>
                            <button className='submit-btn'
                                onClick={handleUpdateUser}>
                                Agree and countinue
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Update