import React, { Fragment, ReactElement, useEffect } from 'react'
import "./ripple.css"
export default function Ripple({children}:{children:ReactElement<HTMLElement>}) {
    function createRipple(event:any): void {
        const button = event.currentTarget;
      
        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add("ripple");
      
        const ripple = button.getElementsByClassName("ripple")[0];
      
        if (ripple) {
          ripple.remove();
        }
        button.appendChild(circle);
    }
    return (
            <span className='ripple-container' onClick={createRipple}>
                {children}
            </span>
    )
}
