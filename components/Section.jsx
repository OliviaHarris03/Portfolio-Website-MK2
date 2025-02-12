import React, { useContext } from 'react';

// Constants
import Colors from '../constants/Colors';

// Contexts
import { ScreenContext } from '../contexts/ScreenContext.js';
import { ThemeContext } from '../contexts/ThemeContext.js';


function Section(props) {
    const screenContext = useContext(ScreenContext);

    return (
        <ThemeContext.Provider value={props.theme}>
            <div style={{
                backgroundColor: Colors.GetThemeBasedColor('background', props.theme),
                color: Colors.GetThemeBasedColor('text', props.theme),
                fontFamily: 'AlteHaasGrotesk',
                padding: '3rem',
                paddingTop: '1rem',
                height: '100svh',
                scrollSnapAlign: 'start'
            }}>
                <p style={{
                    fontSize: '7rem',
                    fontFamily: 'Mont'
                }}>{props.heading}</p>
                {props.children}
            </div>
        </ThemeContext.Provider>
    );
}

export default Section;