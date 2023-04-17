import lottery from './lottery.jpg';
import python from './python.jpg';
import monte from './monte.png';
import react_logo from './react.jpg';
import aspdotnet from './aspdotnet.jpg';


export default function Projects() {
    const projects = [{ name: "Lottery and sorting system", description: "A random lottery system with five sorting algorithms to sort the results", tech: "Python", link: "https://github.com/8bitAndy/DSA_LotterySortingSystem", image: lottery },
    { name: "Portfolio website", description: "This very website you are using! Made to practice my front end skills", tech: "React, Javascript, HTML, CSS", link: "https://github.com/8bitAndy/portfolio", image: react_logo },
    { name: "2D Tilemap generator", description: "A basic level generation system with a start and finish ", tech: "Python", link: "https://github.com/8bitAndy/mapGenerator", image: python },
    { name: "Monte Carlo Methods", description: "Estimates the area under a curve using a random point generator", tech: "Lua, Solar SDK", link: "https://github.com/8bitAndy/MobileAppsAssignment", image: monte },
    { name: "InvoiceIT", description: "A full stack application developed for a university project with full CRUD capabilities", tech: "C#, ASP.NET, SQL", link: "https://github.com/8bitAndy/InvoiceIT", image: aspdotnet },
    ];



    return (
        <div className="Projects">
            <h2 className="Projects-header">Some of my previous projects</h2>
            <div className="Projects-container">
                {projects.map((project) => (
                    <div className="Project-card">
                        <a href={project.link} target="_blank" rel="noreferrer">
                            <img src={project.image} alt='a portfolio item card'></img>
                            <h3>{project.name}</h3>
                            <h4>{project.tech}</h4>
                            <p>{project.description}</p>
                        </a>
                    </div>
                ))}
            </div>
            <div id='contact'></div>
        </div>
    )
}