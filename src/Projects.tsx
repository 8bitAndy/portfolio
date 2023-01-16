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


    const projects: portfolioItem[] = [projectTest, projectTest2]


    return (
        <div className="Projects">
            <h2>Check out my portfolio</h2>
            {projects.map((project: portfolioItem) => (
                <>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p>{project.technologies}</p>
                </>
            ))}
        </div>
    )
}