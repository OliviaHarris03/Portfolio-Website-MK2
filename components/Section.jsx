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
                padding: '3rem'
            }}>
                {props.children}
            </div>
        </ThemeContext.Provider>
    );
}

export default Section;