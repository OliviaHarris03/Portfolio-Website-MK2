import React, { useContext, useEffect, useState } from 'react';

// Constants
import Colors from '../constants/Colors.js';
import Animation from '../constants/Animation.js';

// Contexts
import { ScreenContext } from '../contexts/ScreenContext.js';

// Components
import Link from './Link.jsx';


function NavigationBar(props) {
    const [navWidth, setNavWidth] = useState('40%');

    const screenContext = useContext(ScreenContext);

    useEffect(() => {
        switch (screenContext.deviceType()) {
            case 'mobile':
                setNavWidth('100%');
                break;
            case 'tablet':
                setNavWidth('60%');
                break;
            case 'desktop':
                setNavWidth('40%');
                break;
        }
    }, [screenContext]);

    return (
        screenContext.width === undefined ? null :
        <div style={{
            width: '100%',
            height: screenContext.isOnMobile ? '100svh' : 'fit-content',
            position: screenContext.isOnMobile ? 'absolute': 'relative',
            overflow: 'hidden'
        }}>
            <nav style={{
                backgroundColor: screenContext.isOnMobile ? Colors.Dark() : Colors.Light(),
                postion: 'relative',
                float: 'right',
                width: navWidth,
                height: '100%',
                paddingTop: '1rem',
                paddingBottom: '1rem',
                display: 'flex',
                gap: screenContext.isOnMobile ? '2rem' : '0.5rem',
                flexDirection: screenContext.isOnMobile ? 'column' : 'row',
                justifyContent: screenContext.isOnMobile ? 'center' : 'space-around',
                alignItems: 'center',
                borderBottomLeftRadius: '1.75rem',
                borderBottomRightRadius: screenContext.isOnMobile ? '1.75rem' : '0',
                transform: screenContext.isOnMobile ? (props.visible ? 'translateX(0)' : 'translateX(-100%)') : 'translateX(0)',
                transition: Animation.SlowAll()
            }}>
                <Link href='#' text='home' theme={screenContext.isOnMobile ? 'light' : 'dark'} />
                <Link href='#projects' text = 'projects' theme={screenContext.isOnMobile ? 'light' : 'dark'} />
                <Link href='#skills' text='skills' theme={screenContext.isOnMobile ? 'light' : 'dark'} />
                <Link href='#contact' text='contact' theme={screenContext.isOnMobile ? 'light' : 'dark'} />
                {screenContext.isOnMobile ? <button onClick={props.onHamburgerClick} style={{
                    position: 'absolute',
                    top: '0.5rem',
                    left: props.visible ? '' : 'calc(100% + 0.5rem)',
                    right: props.visible ? '0.5rem' : '',
                    width: '2rem',
                    height: '2rem',
                    cursor: 'pointer'
                }}/> : null}
            </nav>
        </div>
    );
}

export default NavigationBar;