import './IntroContainer.css'
import headshot from './assets/react.svg'

export default function IntroContainer() {
    return (
        <div>
            <div className='header'>
                <img src={headshot} className='headshot' />
                <div className='name-title'>
                    <h1>Liam Andrews</h1>
                    <h4>Junior Software Engineer</h4>
                </div>
            </div>
            <p>I am a passionate software developer that loves making cool looking user interface. My experiences</p>
            <div className='button-container'>
                <button className='button-download'>Download CV</button>
                <button className='button-social-link'>&lt;--&gt;</button>
                <button className='button-social-link'>&lt;--&gt;</button>
            </div>
        </div>
    )
}