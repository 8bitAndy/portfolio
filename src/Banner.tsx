import image from './banner.jpg';
import App from './App';


// Banner image with header text and a brief bio
export default function Banner({title, intro} : any) {
    return (
        <>
            <img src={image} alt='A banner of a Broome coastline' className='Banner-image' />
            <div className='Banner-text'>
                <h1>Liam Andrews</h1>
                <h3>{title}</h3>
                <p>{intro}</p>
                <br/>
                <button id='about-me' className='Button-general'><a href="mailto:liamcandrews@outlook.com?subject=Let's get in touch!">Get in touch</a></button>
            </div>
        </>
    )
}