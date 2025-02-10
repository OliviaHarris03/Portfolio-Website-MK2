import React, { useEffect, useState } from 'react';

// Components
import Hero from '../components/Hero.jsx';
import Page from '../components/Page.jsx';
import Section from '../components/Section.jsx';

function Home() {
  return (
    <Page noTopSpacing>
      <Hero />
      <Section theme='dark'>
        <p>Hello</p>
      </Section>
    </Page>
  )
}

export default Home;