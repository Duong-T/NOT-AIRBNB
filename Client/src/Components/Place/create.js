import React from 'react';
import { useState, useEffect } from 'react';
import './create.scss';

export default function Create() {

    const [selectedFile, setSelectedFile] = useState([])
    const [previewImg, setPreviewImg] = useState([])

    const handleSelectedFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        const selectedFileArray = Array.from(e.target.files);

        const imagesArray = selectedFileArray.map((file) => {
            return URL.createObjectURL(file);
        });
        setSelectedFile(selectedFileArray)

        setPreviewImg((previousImages) => previousImages.concat(imagesArray));
    }
    return (
        <div className='create-container'>
            <div className='create-link'>
                <a href="#images">1. Photos</a>
                <a href="#title">2. Title</a>
                <a href="#description">3. Description</a>
                <a href="#address">4. Address</a>
                <a href="#perks">5. Perks</a>
                <a href="#guest-price">6. Guests and Price</a>
                <a href="#check">7. Check in & check out</a>
            </div>
            <div className='place-content'>
                <div className='create-place'>
                    <div id='images' className='place-images'>
                        <div className='title-place'>
                            1. Photos
                        </div>
                        <label className="custum-file-upload" htmlFor="file">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill=""
                                    viewBox="0 0 24 24">
                                    <g id="SVGRepo_bgCarrier"></g>
                                    <g id="SVGRepo_tracerCarrier"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z">
                                        </path> </g></svg>
                            </div>
                            <div className="text">
                                <span>Click to upload image</span>
                            </div>
                            <input type="file" id='file' name='images' multiple accept='image/.jpg/.png'
                                onChange={handleSelectedFile} />
                        </label>
                        <div className='album-img'>
                            <h1>Images</h1>
                            <div className='prew-img'>
                                {previewImg ?
                                    previewImg.map((item, index) => {
                                        return (
                                            <div className='img-upload'>
                                                <img src={item} />
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
                                                    <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                                                </svg>
                                            </div>
                                        )
                                    })
                                    :
                                    <div></div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div id='title' className='place-title'>
                    <div className='title-place'>
                        2. Title for your place
                    </div>
                    <div className='title-input'>
                        <input type='text' className='title-text' />
                    </div>
                </div>
                <div id='description' className='place-description'>
                    <div className='title-place'>
                        3. Description of the place
                    </div>
                    <input type='text' className='description-text' />
                </div>
                <div id='address' className='place-address'>
                    <div className='title-place'>
                        4. Adress to this place
                    </div>
                    <div className='address-area'>
                        <label className='address-country'>
                            <a>Country</a>
                            <input type='text' name='country' />
                        </label>
                        <label className='address-city'>
                            <a>City</a>
                            <input type='text' name='city' />
                        </label>
                    </div>
                    <label className='address-place'>
                        <a>Adress</a>
                        <input type='text' className='address-text' />
                    </label>
                </div>
                <div id='perks' className='place-perk'>
                    <div className='title-place'>
                        4. Select all the perks of your place
                    </div>
                    <div className='perk-select'>
                        <label className='perk-wifi'>
                            <input type='checkbox' name='wifi' />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"></path>
                            </svg>
                            <span>Wifi</span>
                        </label>
                        <label className="perk-tv">
                            <input type="checkbox" name="tv" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"></path>
                            </svg>
                            <span>TV</span>
                        </label>
                        <label className="perk-parking">
                            <input type="checkbox" name="parking" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"></path>
                            </svg>
                            <span>Free parking spot</span>
                        </label>
                        <label className="perk-radio">
                            <input type="checkbox" name="radio" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
                            </svg>
                            <span>Radio</span>
                        </label>
                        <label className="perk-pet">
                            <input type="checkbox" name="pets" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path>
                            </svg>
                            <span>Pets</span>
                        </label>
                        <label className="perk-entrance">
                            <input type="checkbox" name="entrance" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"></path>
                            </svg>
                            <span>Private entrance</span>
                        </label>
                    </div>
                </div>
                <div id='guest-price' className='place-guest-price'>
                    <div className='title-place'>
                        5. Max number of guests and Price per night
                    </div>
                    <div className='guest-price'>
                        <div className='guest'>
                            <a>Max number of guests</a>
                            <input type='number' name='maxGuests' />
                        </div>
                        <div className='price'>
                            <a>Price per night</a>
                            <input type='number' name='price' />
                        </div>
                    </div>

                </div>
                <div id='check' className='place-check'>
                    <div className='title-place'>
                        7. Check in & Check out times
                    </div>
                    <div className='checkin-checkout'>
                        <label className='place-checkin'>
                            <a>Check in times</a>
                            <input type='date' name='checkIn' />
                        </label>
                        <label className='place-checkout'>
                            <a>Check out times</a>
                            <input type='date' name='checkOut' />
                        </label>
                    </div>
                </div>
            </div>


        </div >
    )
}
