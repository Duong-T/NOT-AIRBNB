import React from 'react'
import "./all.scss";

export default function StepOne() {
    return (
        <section className='step-one'>
            <div className='description-step'>
                <a>STEP 1</a>
                <h1>
                    TELL US ABOUT YOUR PLACE
                </h1>
                <p>
                    In this step, we'll ask you which type of property you have and if
                    guests will book the entire place or just a room. Then let us know the
                    location and how many guests can stay.
                </p>
            </div>
            <div className="video-display">
                <video autoPlay='autoplay' crossOrigin="anonymous" muted='muted' playsInline='playsinline' preload="auto">
                    <source src="https://stream.media.muscache.com/zFaydEaihX6LP01x8TSCl76WHblb01Z01RrFELxyCXoNek.mp4?v_q=high" />
                </video>
            </div>
        </section>
    )
}
