import { useSelector } from 'react-redux'
import './listing.scss'

const Listing = () => {

    const lastname = useSelector((state) => state.auth.login.currentUser?.user.lastname);

    return (
        <section className='listing-section'>
            <div className='header-listing'>
                <div className='header-left'>
                    Welcome, {lastname}
                </div>
                <div className='header-mid'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 24 24" >
                            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z">
                            </path></svg>
                    </span>
                    <input type='text'
                        className='search-listing'
                        placeholder='Search listings' />
                </div>
                <div className='header-right'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z">
                            </path></svg>
                    </span>
                    <div className='create-listing'>
                        Create listing
                    </div>
                </div>
            </div>
            <div className='list-cointainer'>
                <h1 className='list-title'>0 Listing</h1>
            </div>
        </section>
    )
}

export default Listing