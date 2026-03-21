import React from 'react'

const toggle = () => {
    function toggle() {
        if (body.style.backgroundColor == white) {
            body.style.backgroundColor = black;
            button.textContent = white;
        }
        if (body.style.backgroundColor == black) {
            body.style.backgroundColor = white;
            button.textContent = black;
        }
    }

    return (
        <>
            <button type="button" onClick={toggle}></button>
        </>
    )
}

export default toggle
