import { useSelector } from "react-redux";
import StartCreate from "../../Components/Place/Create/start";
import StepOne from "../../Components/Place/Create/stepone";
import TypeHouse from "../../Components/Place/Create/typehouse";
import "./CreatePlace.scss";


const CreatePlace = () => {

    return (
        <div className="create-page">
            <header>
                <div className="icon-left">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                        <path d="M16 1c2 0 3.46.96 4.75 3.27l.53 1.02a424.58 424.58 0 0 1 7.1 14.84l.15.35c.67 1.6.9 2.48.96 3.4v.41l.01.23c0 4.06-2.88 6.48-6.36 6.48-2.22 0-4.55-1.26-6.7-3.39l-.26-.26-.17-.17h-.02l-.17.18c-2.05 2.1-4.27 3.42-6.42 3.62l-.28.01-.26.01c-3.48 0-6.36-2.42-6.36-6.48v-.47c.03-.93.23-1.77.83-3.24l.22-.53c.97-2.3 6.08-12.98 7.7-16.03C12.55 1.96 14 1 16 1zm0 2c-1.24 0-2.05.54-2.99 2.21l-.52 1a422.57 422.57 0 0 0-7.03 14.7l-.35.84a6.86 6.86 0 0 0-.6 2.24l-.01.33v.2C4.5 27.4 6.41 29 8.86 29c1.77 0 3.87-1.24 5.83-3.35-2.3-2.94-3.86-6.45-3.86-8.91 0-2.92 1.94-5.39 5.18-5.42 3.22.03 5.16 2.5 5.16 5.42 0 2.45-1.56 5.96-3.86 8.9 1.97 2.13 4.06 3.36 5.83 3.36 2.45 0 4.36-1.6 4.36-4.48v-.4a7.07 7.07 0 0 0-.72-2.63l-.25-.6C25.47 18.41 20.54 8.12 19 5.23 18.05 3.53 17.24 3 16 3zm.01 10.32c-2.01.02-3.18 1.51-3.18 3.42 0 1.8 1.18 4.58 2.96 7.04l.2.29.18-.24c1.73-2.38 2.9-5.06 3-6.87v-.22c0-1.9-1.17-3.4-3.16-3.42z"></path>
                    </svg>
                </div>
                <div className="icon-right">
                    <button className="save-btn">
                        Save & exit
                    </button>
                </div>
            </header>
            <div className="center-page">
                <TypeHouse />
            </div>
            <footer className="footer-btn">
                <div className="get-start">
                    <button>
                        Get started
                    </button>
                </div>
            </footer>
        </div>
    )

}

export default CreatePlace;