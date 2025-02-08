import React, { useState, useContext, useEffect } from 'react';

import '../styles/fonts.module.css'

// Constants
import Colors from '../constants/Colors.js';

// Contexts
import { ScreenContext } from '../contexts/ScreenContext.js';

function Hero() {
    const [nameSize, setNameSize] = useState('6.25rem');

    const screenContext = useContext(ScreenContext);

    useEffect(() => {
        setNameSize(`${Math.pow(screenContext.width / 1200, 0.5) * 16}px`);
        switch (screenContext.deviceType()) {
            case 'mobile':
                // setNameSize('3.4rem');
                // setNameSize('8.75px');
                break;
            case 'tablet':
                // setNameSize('5rem');
                // setNameSize('13px');
                break;
            case 'desktop':
                // setNameSize('6.25rem');
                // setNameSize('16px');
                break;
        }
    }, [screenContext]);

    return (
        <header style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '6em',
            fontSize: nameSize,
            lineHeight: '1',
        }}>
            <p style={{
                fontFamily: 'Mont',
                fontSize: '6.25em',
                letterSpacing: '-0.2rem',
                color: Colors.Light(),
                width: 'fit-content'
            }}>Olivia Harris</p>
            <p style={{
                fontFamily: 'AlteHaasGrotesk',
                fontSize: '2.1em',
                transform: screenContext.isOnMobile ? '' : 'translate(-0.8em, -0.65em)'
            }}>Full-Stack Software Developer</p>
        </header>
    );
}

export default Hero;