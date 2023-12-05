import { startSection } from "../../../utils/data/createplace";
import './all.scss';

const StartCreate = () => {

    const dataRight = startSection;

    return (
        <section className="start-section">
            <div className="left-info">
                <h1>
                    It's easy to get
                    started on Airbnb
                </h1>
            </div>
            <div className="right-info">
                {dataRight.map(item => {
                    return (
                        <>
                            {item.id === 1 ? <></> : <span></span>}
                            <div className="step-info" key={item.id}>
                                <h1>{item.id}</h1>
                                <div className="title-des">
                                    <h1>{item.title}</h1>
                                    <a>{item.des}</a>
                                </div>
                                <img src={item.image} />
                            </div>
                        </>
                    )
                })}
            </div>
        </section>
    )
}

export default StartCreate;