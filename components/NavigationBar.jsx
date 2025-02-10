import React, { useContext, useEffect, useState } from 'react';

// Constants
import Animation from '../constants/Animation.js';
import Colors from '../constants/Colors.js';
import Sizing from '../constants/Sizing.js';

// Contexts
import { ScreenContext } from '../contexts/ScreenContext.js';

// Components
import Link from './Link.jsx';


function NavigationBar(props) {
    const screenContext = useContext(ScreenContext);

    return (
        <nav style={{
            backgroundColor: screenContext.isOnMobile ? Colors.Dark() : Colors.Light(),
            position: screenContext.isOnMobile ? 'absolute' : 'relative',
            width: screenContext.isOnDesktop ? '40%' : '100%',
            height: screenContext.isOnMobile ? '100svh' : Sizing.NavigationBarHeight(),
            left: screenContext.isOnDesktop ? '60%' : '0',
            paddingTop: screenContext.isOnMobile ? '0' : '1rem',
            paddingBottom: screenContext.isOnMobile ? '0' : '1rem',
            display: 'flex',
            gap: screenContext.isOnMobile ? '2rem' : '0.5rem',
            flexDirection: screenContext.isOnMobile ? 'column' : 'row',
            justifyContent: screenContext.isOnMobile ? 'center' : 'space-around',
            alignItems: 'center',
            borderBottomLeftRadius: screenContext.isOnMobile ? '0' : '1.75rem',
            transform: screenContext.isOnMobile ? (props.visible ? 'translateX(0)' : 'translateX(-100%)') : 'translateX(0)',
            transition: Animation.SlowAll(),
            order: '0',
            zIndex: '2'
        }}>
            {screenContext.isOnMobile ? 
                <div>
                    <p style={{
                        fontFamily: 'Mont',
                        fontSize: '3rem',
                        letterSpacing: '-0.12rem',
                        color: Colors.Light(),
                        width: 'fit-content',
                    }}>Olivia Harris</p> 
                    <div style={{
                        width: '100%',
                        height: '2px',
                        backgroundColor: Colors.Light(),
                        marginTop: '1rem',
                        marginBottom: '5rem'
                    }} /> 
                </div>
            : null}
            <Link href='/' text='home' theme={screenContext.isOnMobile ? 'light' : 'dark'} />
            <Link href='/projects' text = 'projects' theme={screenContext.isOnMobile ? 'light' : 'dark'} />
            <Link href='#skills' text='skills' theme={screenContext.isOnMobile ? 'light' : 'dark'} />
            <Link href='#contact' text='contact' theme={screenContext.isOnMobile ? 'light' : 'dark'} />
            {screenContext.isOnMobile ? 
                <button onClick={props.onHamburgerClick} style={{
                    position: 'fixed',
                    top: '1rem',
                    left: props.visible ? '1rem' : 'calc(100% + 1rem)',
                    width: '2.5rem',
                    height: '2.5rem',
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none'
                }} >
                    {props.visible ?
                        <svg width="100%" height="100%" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd" >
                                <g id="Icon-Set" transform="translate(-568.000000, -1087.000000)" fill={Colors.Light()}>
                                    <path d="M584,1117 C576.268,1117 570,1110.73 570,1103 C570,1095.27 576.268,1089 584,1089 C591.732,1089 598,1095.27 598,1103 C598,1110.73 591.732,1117 584,1117 L584,1117 Z M584,1087 C575.163,1087 568,1094.16 568,1103 C568,1111.84 575.163,1119 584,1119 C592.837,1119 600,1111.84 600,1103 C600,1094.16 592.837,1087 584,1087 L584,1087 Z M589.717,1097.28 C589.323,1096.89 588.686,1096.89 588.292,1097.28 L583.994,1101.58 L579.758,1097.34 C579.367,1096.95 578.733,1096.95 578.344,1097.34 C577.953,1097.73 577.953,1098.37 578.344,1098.76 L582.58,1102.99 L578.314,1107.26 C577.921,1107.65 577.921,1108.29 578.314,1108.69 C578.708,1109.08 579.346,1109.08 579.74,1108.69 L584.006,1104.42 L588.242,1108.66 C588.633,1109.05 589.267,1109.05 589.657,1108.66 C590.048,1108.27 590.048,1107.63 589.657,1107.24 L585.42,1103.01 L589.717,1098.71 C590.11,1098.31 590.11,1097.68 589.717,1097.28 L589.717,1097.28 Z" id="cross-circle" />
                                </g>
                            </g>
                        </svg> : 
                        <svg width="100%" height="100%" viewBox="2 2 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355ZM18.75 16C18.75 16.4142 18.4142 16.75 18 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H18C18.4142 15.25 18.75 15.5858 18.75 16ZM18 12.75C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25H6C5.58579 11.25 5.25 11.5858 5.25 12C5.25 12.4142 5.58579 12.75 6 12.75H18ZM18.75 8C18.75 8.41421 18.4142 8.75 18 8.75H6C5.58579 8.75 5.25 8.41421 5.25 8C5.25 7.58579 5.58579 7.25 6 7.25H18C18.4142 7.25 18.75 7.58579 18.75 8Z" fill={Colors.Light()}/>
                        </svg>
                    }
                </button>
            : null}    
        </nav>
    );
}

export default NavigationBar;