import React, { useState } from 'react';
import './Button.css'

const Button = () => {
    const [counter, changeCounter] = useState(0);
    // let counter = 0;
    const addOne = () => {
        changeCounter(counter + 1)
    };

    const subOne = () => {
        changeCounter(counter - 1)
    }

    return (
        <div className="Counter">
            <h1 className="Counter_text">{counter}</h1>
             <button className="Counter_button" type="button" 
             onClick={subOne}> -
        </button>
        <button className="Counter_button" type="button" 
        onClick={addOne}> + </button>
        </div>
    )
}

export default Button;