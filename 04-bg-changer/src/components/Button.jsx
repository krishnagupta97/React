import React from 'react'

function Button({ color, setColour, blackText }) {

    function colorHandler() {
        setColour(color);
    }

    return (
        <button onClick={colorHandler} className={`outline-none px-4 py-1 rounded-full ${(blackText.includes(color)?" text-black" : "text-white")} shadow-lg font-semibold`} style={{backgroundColor:color}}>{color.charAt(0).toUpperCase() + color.slice(1)}</button>
    )
}

export default Button
