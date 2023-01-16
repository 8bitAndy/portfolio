import image from './banner.jpg';
import App from './App';

const test : string = "test"


// Banner image with header text and a brief bio
export default function Banner() {
    return (
        <>
            <img src={image} alt='A banner of a Broome coastline' className='Banner-image' />
            <div className='Banner-text'>
                <h1>Liam Andrews</h1>
                <h3>Software Developer</h3>
                <p>I develop software of all kinds, have a look at some of my work below</p>
                <br/>
                <button id='about-me' className='Button-general'>Get in touch</button>
            </div>
        </>
    )
}