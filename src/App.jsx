import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Technologies } from './components/Technologies';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <Skills />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

