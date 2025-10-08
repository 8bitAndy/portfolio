import './IntroContainer.css'
import headshot from './assets/react.svg'

export default function IntroContainer() {
    return (
        <div>
            <div className='header'>
                <img src={headshot} className='headshot'/>
                <div className='name-title'>
                    <h1>Liam Andrews</h1>
                    <h4>Junior Software Engineer</h4>
                </div>
                
            </div>
        </div>
    )
}