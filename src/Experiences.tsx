// Component will read in JSON file of previous work experiences and dynamically create
// a vertical list of past work and jobs on portolio site.
import './Experiences.css'
import type { PortfolioContent } from './types';



// Loop through the array of JSON objects and render each as a unique component
export default function Experiences() {
    //     // Loop through array of objects and generate an instance of a job or past experience
    //     const experienceList = testData.map(record => <div key={record.id}>
    //         <h2>{record.title}</h2>
    //         <h3>{record.company}</h3>
    //         <p>{record.skills}</p>
    //         <p>{record.content}</p>
    //         <br />
    //         <br />
    //     </div>
    //     );

    return (
        <div className="">
            <h1 className="exp-title">Experience</h1>
            <span className="intro-container">

            </span>
            {/* {experienceList} */}

        </div>
    )
}