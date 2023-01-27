import React, {Component} from 'react';
import logo from './logo.svg';

import './App.scss';
import Navbar from './Navbar';
import Banner from './Banner';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import content from './data/site-content.json'


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
      <Banner title={content.banner.title} intro={content.banner.intro} />
      <Navbar />
      <About />
      <Contact liLink={content.contact.liLink} mailLink={content.contact.mailLink} ghLink={content.contact.ghLink}/>
      {/* <Projects /> */}
      {/* <div className='Placeholder'/> */}
      <Footer />
    </div>
  );
}

export default App;
