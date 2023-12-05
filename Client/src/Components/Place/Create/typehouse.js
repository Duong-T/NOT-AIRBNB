import React from 'react'
import './all.scss'
import { typehouse } from '../../../utils/data/createplace'

export default function TypeHouse() {

    const typeHouse = typehouse;

    return (
        <section className='type-house'>
            <h1 className='title'>
                Which of these best describes your place?
            </h1>
            <div className='house-choice'>
                {typeHouse.map((item, index) => {
                    return (
                        <div className={`kind-house ${index === 0 ? 'active' : ''}`} key={item.id} >
                            <img id={item.code} src={item.icon} />
                            <a>{item.name}</a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
