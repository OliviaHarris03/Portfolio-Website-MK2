import React, { useContext, useEffect, useState } from 'react';

// Constants
import Colors from '../constants/Colors.js';
import ScreenSizes from '../constants/ScreenSizes.js';

// Contexts
import { ScreenContext } from '../contexts/ScreenContext.js';

// Components
import NavigationBar from '../components/NavigationBar.jsx';
import Hero from '../components/Hero.jsx';

function Home() {
  const [screenWidth, setScreenWidth] = useState();
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [blockScroll, setBlockScroll] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOpenNavbar = () => {
    setNavbarVisible(prev => !prev);
    setBlockScroll(prev => !prev);
  }

  let linesOffset = {x: 0, y: 0};
  linesOffset.y = (screenWidth / 1920) * -16;
  if (ScreenSizes.IsMobile(screenWidth)) {
    linesOffset.y -= 10;
    linesOffset.x = -20;
  }

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
      <div style={{
        width: '100svw',
        height: '100svh',
        overflowX: 'hidden',
        overflowY: blockScroll ? 'hidden' : 'scroll'
      }}>
        <div style={{
          backgroundColor: Colors.Background(),
          minHeight: '100svh',
        }}>
          <NavigationBar onHamburgerClick={handleOpenNavbar} visible={navbarVisible} />
          <Hero />
        </div>
      </div>
    </ScreenContext.Provider>
  );
}

export default Home;