import img from './react.svg';
import logo_csharp from './assets/c-sharp-logo.png';
import logo_git from './assets/git-logo.png';
import logo_python from './assets/python-logo.png';
import logo_sql from './assets/sql-logo.png';
import logo_javascript from './assets/javascript-logo.png';
import logo_cpp from './assets/cpp-logo.png';



export default function Skills() {


    return (
        <div className="skills-container">
            <h3>My languages and skills</h3>
            <p>Below is a list of the technologies and programming languages I have been exposed to throughtout my studies and professional career. I am by no means a master of any of these but I have a love for writing code and developing software. I have solid foundations in all of the below listed technologies and am always keen to learn new and exciting things in the everchanging landscape that is software development.</p>

            <div className='tech-container'>
                <div className="tech-row1">
                    <div className='skill-container'>
                        <img src={logo_javascript} />
                        <h2>Javascript</h2>
                    </div>
                    <div className='skill-container'>
                        <img src={img} />
                        <h2>React.js</h2>
                    </div>
                    <div className='skill-container'>
                        <img src={logo_sql} />
                        <h2>SQL</h2>
                    </div>
                </div>
                <div className="tech-row2">
                    <div className='skill-container'>
                        <img src={logo_python} />
                        <h2>Python</h2>
                    </div>
                    <div className='skill-container'>
                        <img src={logo_csharp} />
                        <h2>C#</h2>
                    </div>
                    <div className='skill-container'>
                        <img src={logo_git} />
                        <h2>Git</h2>
                    </div>
                    <div className='skill-container'>
                        <img src={logo_cpp} />
                        <h2>C++</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}