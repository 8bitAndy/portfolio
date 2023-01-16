import image from './banner.jpg';

export default function Contact() {
    return (
        <div className="Contact">
            <div className="Contact-content">
                <h2>Get in touch or grab a copy of my resume!</h2>
                <p>Must go faster. God help us, we're in the hands of engineers. What do they got in there? King Kong? This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows.
                    Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should.</p>
                <br />
                <button id='my-portfolio'  className='Button-general'><a href={process.env.PUBLIC_URL + '/SoftwareResume.pdf'} download>Download resume</a></button>
            </div>
        </div >
    )
}