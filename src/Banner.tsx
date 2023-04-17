import image from './banner.jpg';

// Banner image with header text and a brief bio
export default function Banner({ title, intro }: any) {
    return (
        <>
            <img src={image} alt='A banner of a Broome coastline' className='Banner-image' />
            <div className='Banner-text'>
                <h1>Liam Andrews</h1>
                <h3>{title}</h3>
                <p>{intro}</p>
                <br />
                <a href="#contact"><button id='about-me' className='Button-general'>Get in touch</button></a>
            </div>
        </>
    )
}