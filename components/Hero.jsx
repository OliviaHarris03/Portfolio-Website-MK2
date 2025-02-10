import React, { useState, useContext, useEffect } from 'react';

import '../styles/fonts.module.css'

// Constants
import Colors from '../constants/Colors.js';
import Sizing from '../constants/Sizing.js';

// Contexts
import { ScreenContext } from '../contexts/ScreenContext.js';

function Hero() {
    const [nameSize, setNameSize] = useState('6.25rem');

    const screenContext = useContext(ScreenContext);

    useEffect(() => {
        setNameSize(`${Math.pow(screenContext.width / 1200, 0.5) * 16}px`);
    }, [screenContext]);

    return (
        <header style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: nameSize,
            lineHeight: '1',
            height: `calc(100svh - ${Sizing.NavigationBarHeight()})`,
        }}>
            <p style={{
                fontFamily: 'Mont',
                fontSize: '6.25em',
                letterSpacing: '-0.2rem',
                color: Colors.Light(),
                width: 'fit-content',
                transform: screenContext.isOnMobile ? '' : `translateY(-${Sizing.NavigationBarHeight()}`
            }}>Olivia Harris</p>
            <p style={{
                fontFamily: 'AlteHaasGrotesk',
                fontSize: '2.1em',
                transform: screenContext.isOnMobile ? 'translateY(-0.60em)' : `translate(-0.8em, -0.60em) translateY(-${Sizing.NavigationBarHeight()})`,
                color: Colors.Dark()
            }}>Full-Stack Software Developer</p>
        </header>
    );
}

export default Hero;