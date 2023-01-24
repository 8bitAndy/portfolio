import { useState } from "react";

export default function Projects() {

    // Will be used to display all of my work as a type
    type portfolioItem = {
        title: string;
        description: string;
        technologies: string[];
        id: number;
    }

    // Test of a portfolio item
    const projectTest: portfolioItem = {
        title: 'mobile app',
        description: 'this is an example description',
        technologies: ['TypeScript', 'React', 'C#'],
        id: 1
    };

    // Test of a portfolio item
    const projectTest2: portfolioItem = {
        title: 'Example test app',
        description: 'this is an example description',
        technologies: ['Java', 'Python'],
        id: 1
    };


    const projects: portfolioItem[] = [projectTest, projectTest2];

    const [count, setCount]  = useState(0);

    const handleClick = (changeValue : number) =>{
        
        // Prevents the array from going out of bounds
        if(count === 0 && changeValue === -1){
            setCount(projects.length - 1)
        }
        else if (count === projects.length - 1 && changeValue === 1){
            setCount(0)
        }
        else{
            setCount(count + changeValue)
        }
        
    }

    


    return (
        <div className="Projects">
            <h2>Check out my portfolio</h2>
            <p>Projects length is {projects.length}</p>
            {/* {projects.map((project: portfolioItem) => (
                <>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p>{project.technologies}</p>
                </>
            ))} */}
            <div className="Project-content">
                <i className="arrow left" onClick={() => handleClick(-1)} />
                <h3>Item number: {count}</h3>
                <i className="arrow right" onClick={() => handleClick(1)} />
            </div>
        </div>
    )
}