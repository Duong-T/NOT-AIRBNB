import './place.scss';

const Place1 = () => {
    return (
        <section className='section-container'>
            <div className='ready-content'>
                <div className='ready-title'>
                    Ready to Airbnb it?
                </div>
                <button className='ready-button'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24" >
                            <path d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z">
                            </path>
                        </svg>
                    </span>
                    <div>
                        Airbnb Setup
                    </div>
                </button>
            </div>
            <div className='setup-content'>
                <div className='setup-title'>
                    Airbnb it easily with Airbnb Setup
                </div>
                <img className='setup-img' src='https://a0.muscache.com/im/pictures/65214d06-ffb4-4b70-93c0-01d368e76649.jpg?im_w=2560&im_q=highq' />
                <div className='setup-info'>
                    <div className='setup-text'>
                        <h1>
                            One-to-one guidance from a Superhost
                        </h1>
                        <a>
                            We&apos;ll match you with a Superhost in your area,
                            who&apos;ll guide you from your first question to your first guest—by phone,
                            video call, or chat.
                        </a>
                    </div>
                    <div className='setup-text'>
                        <h1>
                            An experienced guest for your first booking
                        </h1>
                        <a>
                            For your first booking, you can choose to welcome an experienced guest
                            who has at least three stays and a good track record on Airbnb.
                        </a>
                    </div>
                    <div className='setup-text'>
                        <h1>
                            Specialized support from Airbnb
                        </h1>
                        <a>
                            New Hosts get one-tap access to specially trained Community Support agents
                            who can help with everything from account issues to billing support.
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Place1