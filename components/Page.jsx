import React, { useState, useEffect} from 'react';

// Constants
import Colors from '../constants/Colors';
import ScreenSizes from '../constants/ScreenSizes';
import Sizing from '../constants/Sizing.js';

// Contexts
import { ScreenContext } from '../contexts/ScreenContext';

// Components
import NavigationBar from '../components/NavigationBar.jsx';

function Page(props) {
    const [screenWidth, setScreenWidth] = useState();
    const [navbarVisible, setNavbarVisible] = useState(false);
    const [blockScroll, setBlockScroll] = useState(false);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        handleResize();
        window.addEventListener('resize', handleResize);

        document.querySelector('body').style.backgroundColor = Colors.Background();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleOpenNavbar = () => {
        let navbarOpen = !navbarVisible;

        setNavbarVisible(prev => !prev);
        setBlockScroll(prev => !prev);

        if (navbarOpen)
        document.querySelector('body').style.backgroundColor = Colors.Dark();
        else
        document.querySelector('body').style.backgroundColor = Colors.Background();
    }

    let linesOffset = {x: 0, y: 0};
    linesOffset.y = (screenWidth / 1920) * -16;
    if (ScreenSizes.IsMobile(screenWidth)) {
        linesOffset.y -= 10;
        linesOffset.x = -20;
    }

    let headerColumns;
    if (ScreenSizes.IsTablet(screenWidth))
      headerColumns = '40% 60%';
    else
      headerColumns = '100%';


    return (
        <ScreenContext.Provider value={{ 
            width: screenWidth, 
            isOnMobile: ScreenSizes.IsMobile(screenWidth),
            isOnTablet: ScreenSizes.IsTablet(screenWidth),
            isOnDesktop: ScreenSizes.IsDesktop(screenWidth),
            deviceType: () => {
              if (ScreenSizes.IsMobile(screenWidth)) return 'mobile';
              if (ScreenSizes.IsTablet(screenWidth)) return 'tablet';
              return 'desktop';
            }
          }}>
            {screenWidth !== undefined ?
            <div style={{
              width: '100svw',
              height: '100svh',
              overflowX: 'hidden',
              overflowY: blockScroll ? 'hidden' : 'auto',
              fontFamily: 'AlteHaasGrotesk'
            }}>
              <div style={{
                backgroundColor: Colors.Background(),
                minHeight: '100svh',
              }}>
                <header style={{
                  width: '100%',
                  display: 'grid',
                  gridTemplateColumns: headerColumns,
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transform: ScreenSizes.IsMobile(screenWidth) ? 'translateY(1.25rem)' : 'translateY(0)',
                    order: ScreenSizes.IsTablet(screenWidth) ? '0' : '1'
                  }}>
                    <h1 style={{ 
                      fontFamily: 'Mont',
                      color: Colors.Light(),
                    }}>{props.heading ? props.heading : 'Olivia Harris'}</h1> 
                  </div>
                  <NavigationBar onHamburgerClick={handleOpenNavbar} visible={navbarVisible} />
                </header>
                <div style={{
                  paddingTop: props.noTopSpacing ? '0' : Sizing.NavigationBarHeight(),
                }}>
                  {props.children}
                </div>
              </div>
            </div> : null}
        </ScreenContext.Provider>
    );
}

export default Page;