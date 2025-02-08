import React, { useState}  from 'react';

import '../styles/fonts.module.css';

// Constants
import Colors from '../constants/Colors.js';
import Animation from '../constants/Animation.js';

function Link(props) {
    const [isHovered, setIsHovered] = useState();

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    let linkColor;

    switch (props.theme) {
        case 'light':
            linkColor = isHovered ? Colors.Accent(3) : Colors.Light(); 
            break;
        case 'dark':
        default:
            linkColor = isHovered ? Colors.Accent(3) : Colors.Dark();
            break;
    }


    return (
        <a href={props.href} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{
            color: linkColor,
            transition: Animation.StandardAll(),
            fontFamily: 'AlteHaasGrotesk',
            fontSize: '1.25rem',
            textDecoration: 'none'
        }}>{props.text}</a>
    );
}

export default Link;