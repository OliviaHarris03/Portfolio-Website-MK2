import React, { useContext, useEffect, useState } from 'react';

// Constants
import Colors from '../constants/Colors.js';

// Contexts
import { ScreenContext } from '../contexts/ScreenContext.js';

// Components
import Hero from '../components/Hero.jsx';
import Page from '../components/Page.jsx';
import Resume from '../components/Resume.jsx';
import Section from '../components/Section.jsx';

function Home() {
  const screenContext = useContext(ScreenContext);

  console.log(screenContext.isOnDesktop);

  return (
    <Page noTopSpacing>
      <Hero />
      <Section theme='dark' heading='Hello.'>
        <div style={{
          display: 'grid',
          gridTemplateColumns: screenContext.isOnDesktop ? 'repeat(2, calc(50% - 1rem))' : '100%',
          gap: '2rem',
          width: '100%',
          height: '100%'
        }}>
          <p style={{
            fontSize: '1.8rem',
            width: '100%',
            height: 'fit-content',
            backgroundColor: Colors.Background(),
            padding: '2rem',
            boxShadow: '-16px 16px 0px ' + Colors.Light(),
            boxSizing: 'border-box',
            borderRight: 'solid 1px black'
          }}>My name is Olivia Harris. I am an Integrative General Studies student at the University of Central Florida. My studies were focused on Computer Science and Digital Media, which have given me a strong foundation for full-stack web developement</p>
          <img src='' />
        </div>
      </Section>
      <Section theme='default' heading='Resume.'>
        <Resume style={{
          fontSize: '9px',
        }}/>
      </Section>
    </Page>
  )
}

export default Home;