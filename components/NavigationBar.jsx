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
            backgroundColor: Colors.Dark(),
            position: 'absolute',
            width: '100%',
            height: '100svh',
            left: '0',
            top: '0',
            display: 'flex',
            gap: '2rem',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            transform: props.visible ? 'translateX(0)' : 'translateX(-100%)',
            transition: Animation.SlowAll(),
            order: '0',
            zIndex: '2'
        }}>
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
            <Link href='/' text='home' theme='light' />
            <Link href='/projects' text = 'projects' theme='light' />
            <Link href='#skills' text='skills' theme='light' />
            <Link href='#contact' text='contact' theme='light' />
        </nav>
    );
}

export default NavigationBar;