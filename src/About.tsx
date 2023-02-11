import image from './test.jpeg';

// Big card with info about me displayed below the banner
export default function About() {
    return (
        <div className='About-me'>
            <div className="About-me-card">
                <h2>About me</h2>
                <div className='Content'>
                    <img src={image} className='Profile-image' />
                    <div className='About-me-text'>
                        <p>
                            Life finds a way. So you two dig up, dig up dinosaurs? Hey, you know how I'm, like, always trying to save the planet? Here's my chance. What do they got in there? King Kong? Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should.
                        </p>
                        <p>
                            Jaguar shark! So tell me - does it really exist? Did he just throw my cat out of the window? Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager?
                        </p>
                    </div>
                </div>
            </div>
            <div id="my-portfolio"></div>
        </div>
    )
}