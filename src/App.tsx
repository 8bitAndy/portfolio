import React from 'react';
import logo from './logo.svg';

import './App.scss';
import Navbar from './Navbar';
import Banner from './Banner';
import Footer from './Footer';
import About from './About';


// Will be used to display all of my work as a type
type portfolioItem = {
  title: string;
  description: string;
  technologies: string[];
  id: number;
}

// Test of a portfolio item
const project: portfolioItem = {
  title: 'Gym mobile app',
  description: 'this is an example description',
  technologies: ['TypeScript', 'React', 'C#'],
  id: 1
};

function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
