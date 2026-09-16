import React from 'react';
import './App.css';

import Navbar from './sections/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import Work from './sections/Work/Work';
import Skills from './sections/Skills/Skills';
import Resources from './sections/Resources/Resources';
import Setup from './sections/Setup/Setup';
import Footer from './sections/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Work />
        <Skills />
        <Resources />
        <Setup />
      </main>

      <Footer />
    </>
  );
}

export default App;
