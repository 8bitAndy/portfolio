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
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>

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