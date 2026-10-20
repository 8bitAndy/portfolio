// Shows past work and jobs, newest first.
import './Experiences.css'
import type { Experience } from './types';

type Props = {
    experiences?: Record<string, Experience>;
};

export default function Experiences({ experiences }: Props) {
    // Turn the object into a list, newest first.
    const sorted = experiences
        ? Object.values(experiences).sort((a, b) => b.date - a.date)
        : [];

    return (
        <div className="">
            <h1 className="exp-title">Experience</h1>
            <span className="exp-container">
                {sorted.map((job) => (
                    <div key={job.id} className="exp-item">
                        <h3 className="exp-role">{job.title}</h3>
                        <div className="exp-meta">
                            <span className="exp-company">{job.company}</span>
                            <span className="exp-date">{job.date}</span>
                        </div>
                        <ul className="exp-skills">
                            {job.skills.split(",").map((skill) => (
                                <li key={skill} className="exp-skill">{skill.trim()}</li>
                            ))}
                        </ul>
                        <p className="exp-content">{job.content}</p>
                    </div>
                ))}
            </span>
        </div>
    )
}
