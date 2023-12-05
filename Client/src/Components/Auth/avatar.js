import React from 'react'
import './avatar.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import * as actions from '../../redux/actions'

const Avatar = () => {

    const [selectedFile, setSelectedFile] = useState()
    const [previewImg, setPreviewImg] = useState()

    const id = useSelector((state) => state.auth.login.currentUser?.user.id)
    const dispatch = useDispatch();

    useEffect(() => {
        if (!selectedFile) {
            setPreviewImg(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreviewImg(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const handleAvatarImg = async (e) => {
        let formData = new FormData();
        formData.append('avatar', selectedFile)

        actions.updateUser(formData, dispatch, id)
    }

    const handleSelectedFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setSelectedFile(e.target.files[0])
    }
    return (
        <section>
            <div className='avatar-page'>
                <div className='avatar-container'>
                    <header className='avatar-header'>
                        <div className='back-icon'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z">
                                    </path>
                                </svg>
                            </span>
                        </div>
                        <div className='text-header'>
                            <h1>Create your profile</h1>
                        </div>
                        <span></span>
                    </header>
                    <div className='avatar-content'>
                        <div className='text-content'>
                            <small className='text-1'>STEP 1 OF 1</small>
                            <div className='text-title'>Add a profile photo</div>
                            <div className='text-2'>
                                Pick an image the shows your face. Hosts won't be able to
                                see your profile photo until your reservation is confirmed.
                            </div>
                        </div>
                        {selectedFile ?
                            <img src={previewImg} className='img-avatar' />
                            :
                            <div className='img-content'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"></path>
                                    <path d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"></path>
                                </svg>
                            </div>
                        }
                        <label className='upload-btn' htmlFor='avatar'>
                            <div className='icon-btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M13 19v-4h3l-4-5-4 5h3v4z"></path>
                                    <path d="M7 19h2v-2H7c-1.654 0-3-1.346-3-3 0-1.404 1.199-2.756 2.673-3.015l.581-.102.192-.558C8.149 8.274 9.895 7 12 7c2.757 0 5 2.243 5 5v1h1c1.103 0 2 .897 2 2s-.897 2-2 2h-3v2h3c2.206 0 4-1.794 4-4a4.01 4.01 0 0 0-3.056-3.888C18.507 7.67 15.56 5 12 5 9.244 5 6.85 6.611 5.757 9.15 3.609 9.792 2 11.82 2 14c0 2.757 2.243 5 5 5z"></path>
                                </svg>
                            </div>
                            <div className='text-btn'>Upload a photo</div>
                            <span className='space-right'></span>
                            <input id='avatar' type='file' accept='image/.jpg/.png' onChange={handleSelectedFile} />
                        </label>
                        {selectedFile &&
                            <button className='submit-img'
                                onClick={handleAvatarImg}>
                                Continue
                            </button>
                        }
                        <div className='upload-later'>
                            <ins>
                                I'll do this later
                            </ins>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Avatar