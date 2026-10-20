import { useEffect, useState } from "react";
import './IntroContainer.css'
import type { PortfolioContent } from './types';

export default function IntroContainer() {
    // Will be null until content is loaded.
    const [content, setContent] = useState<PortfolioContent | null>(null);

    // Fetches json data after page first renders.
    useEffect(() => {
        fetch('/data.json')
            .then((r) => r.json() as Promise<PortfolioContent>)
            .then(setContent)
            .catch(() => setContent(null));
    }, []);

    return (
        <div>
            <span className="intro-container">
                <h1 className="intro-name">Liam Andrews</h1>
                <h4>Software Engineer</h4>

                <p>{content?.introduction.about}</p>
                <div className='button-container'>
                    <button className='button-download'>Download Resume</button>
                    <button className='button-social-link-linkedin'>LinkedIn</button>
                    <button className='button-social-link-github'>Github</button>
                </div>
            </span>

        </div>
    )
}
