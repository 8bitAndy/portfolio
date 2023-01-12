import React from 'react';
import logo from './logo.svg';

import './App.scss';
import Navbar from './Navbar';
import Banner from './Banner';
import Footer from './Footer';


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

const testData: string = "My name's Liam I'm a software developer";


function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <div id="next" className='next'>
        <h2>About me</h2>
      </div>
      <Footer />
    </div>
  );
}

export default App;
