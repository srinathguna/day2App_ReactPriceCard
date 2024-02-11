import React from 'react';
import './style/price.css';
import doneIcon from '../assets/done.svg'
import closeIcon from '../assets/close.svg'

const Price = ({plans}) => {
    const handleSubmit = (item) => {
        alert((item.planName))
    }
    return (
        <div className='container'>
            {
                plans.map((item,index) => {
                    return (
                        <>
                            <div className='card' key={index}>
                                <h5>{item.planName}</h5>
                                <h1>{item.price}</h1>
                                <ul>
                                    {item.features.map((item) => {
                                        return (
                                            <>                                            
                                                {item.value ?
                                                    <li className="open-feature">
                                                        <img src={doneIcon} alt="done" />
                                                        <span>{item.feature}</span> 
                                                    </li>
                                                    :
                                                    <li className="close-feature">
                                                        <img src={closeIcon} alt="close" />
                                                        <span>{item.feature}</span> 
                                                    </li>}
                                               
                                            </>    
                                        )
                                    })}                                    
                                </ul>
                                 <button onClick={handleSubmit}>Button</button>
                            </div>
                        </>
                    )
                })
            }           
        </div>
    );
};

export default Price;