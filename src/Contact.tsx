import image from './banner.jpg';

export default function Contact({ liLink, mailLink, ghLink }: any) {
    return (
        <div className="Contact">
            <div className="Contact-content">
                <h2 >Get in touch or grab a copy of my resume!</h2>
                <p>Feel free to grab a copy of my resume from below or contact me via LinkedIn/email, I’m always keen to have a chat or discuss anything software related. 
                    If you have any questions about me or any of my work don’t be afraid to strike up a conversation!</p>
                <br />
                <a href={process.env.PUBLIC_URL + '/SoftwareResume.pdf'} download><button className='Button-general'>Download resume</button></a>
                <br />
                <br />
                <h3 >Contact me with one of the below</h3>
                <a href={liLink} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" className="linkLogo" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <line x1="8" y1="11" x2="8" y2="16" />
                        <line x1="8" y1="8" x2="8" y2="8.01" />
                        <line x1="12" y1="16" x2="12" y2="11" />
                        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                    </svg>
                </a>
                <a href={"mailto:" + mailLink + "?subject=Let's get in touch!"} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" className="linkLogo" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                    </svg>
                </a>
                <a href={ghLink} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" className='linkLogo' width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                </a>
            </div>
        </div >
    )
}