import { useState } from "react";
import image from './project.jpeg';
import lottery from './lottery.jpg';
import python from './python.jpg';
import monte from './monte.png';
import plates from './plates.jpg';
import unity from './unity.jpg';

export default function Projects() {
    const projects = [{ name: "Lottery and sorting system", description: "A random lottery system with five sorting algorithms to sort the results", tech: "Python", image: lottery },
    { name: "Game scheduler", description: "A way to decide which games to play next and organise your backlog", tech: "C#, ASP.NET, SQL", image: image },
    { name: "2D Tilemap generator", description: "A basic level generation system with a start and finish ", tech: "Python", image: python },
    { name: "Monte Carlo Methods", description: "Estimates the area under a curve using a random point generator", tech: "Lua, Solar SDK", image: monte },
    { name: "Unity Project", description: "A small platformer developed in the unity game engine", tech: "C# , Unity", image: unity },
    { name: "Mobile gym app", description: "A streamlined gym and exercise mobile app for free public use", tech: "Java, Android SDK", image: plates }];


    return (
        <div className="Projects">
            <h2>Some of my previous projects</h2>
            <div className="Projects-container">
                {projects.map((project) => (
                    <div className="Project-card">
                        <a href="https://github.com/8bitAndy" target="_blank" rel="noreferrer">
                            <img src={project.image}></img>
                            <h3>{project.name}</h3>
                            <h4>{project.tech}</h4>
                            <p>{project.description}</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}