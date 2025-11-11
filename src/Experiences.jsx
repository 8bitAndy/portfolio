// Component will read in JSON file of previous work experiences and dynamically create
// a vertical list of past work and jobs on portolio site.


// Dummy data, component will read
const testData = [
    {
        "id": 1,
        "title": "Junior Software Engineer",
        "company": "Company name 1",
        "skills": "skill 1, skill 2",
        "content": "I did this at this time..."
    },
    {
        "id": 2,
        "title": "Software Developer Intern",
        "company": "Diversus",
        "skills": "Javascript, React",
        "content": "Throughout my internship I learnt a great deal about front-end web development."
    }
];

// Loop through the array of JSON objects and render each as a unique component
export default function Experiences() {
    // Loop through array of objects and generate an instance of a job or past experience
    const experienceList = testData.map(record => <div>
        <h2>{record.title}</h2>
        <h3>{record.company}</h3>
        <p>{record.skills}</p>
        <p>{record.content}</p>
        <br />
        <br />
    </div>
    );

    return (
        <div className="experiences-container">
            {experienceList}
        </div>
    )
}