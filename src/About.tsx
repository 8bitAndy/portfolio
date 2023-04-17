import image from './headshot.jpg';

// Big card with info about me displayed below the banner
export default function About() {
    return (
        <div className='About-me'>
            <div className="About-me-card">
                <h2 >About me</h2>
                <div className='Content'>
                    <img src={image} className='Profile-image' />
                    <div className='About-me-text'>
                    <br/>
                        <p>
                        Hi there! My name's Liam I'm a junior software developer based in Perth. I’m a passionate tech enthusiast and have a love for coding. Throughout my degree I’ve covered technologies such as C#, Microsoft SQL Server and ASP.NET to name a few. I’m always keen to take on a new challenge whether that be learning a new skillset or a new web framework. Currently I’m teaching myself front-end web development with React so that I can build some exciting and modern user interfaces.
                        </p>
                        <p id="my-portfolio">
                        Have a look at some of my work below, by clicking on any of the tiles you will be taken to the GitHub repo for the project. I’m always keen to have a chat and get some feedback, feel free to send me an email or message!
                        </p>
                    </div>
                </div>
            </ div>
        </div>
    )
}