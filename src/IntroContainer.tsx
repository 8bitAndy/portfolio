import './IntroContainer.css'
import type { PortfolioContent } from './types';

type Props = {
    introduction?: PortfolioContent['introduction'];
};

const RESUME_FILE = 'Liam Andrews Resume.pdf';
const RESUME_URL = `/${encodeURIComponent(RESUME_FILE)}`;
const LINKEDIN_URL = 'https://www.linkedin.com/in/liam-c-andrews';
const GITHUB_URL = 'https://github.com/8bitAndy';

export default function IntroContainer({ introduction }: Props) {
    // Open the resume in a new tab and download a copy
    const handleResumeClick = () => {
        window.open(RESUME_URL, '_blank', 'noopener,noreferrer');

        const link = document.createElement('a');
        link.href = RESUME_URL;
        link.download = RESUME_FILE;
        link.click();
    };

    return (
        <div>
            <h1 className="exp-title">Liam Andrews</h1>
            <span className="intro-container">
                <h3 className="exp-role">Software Engineer</h3>

                <p>{introduction?.about}</p>
                <p className="intro-about2">{introduction?.about2}</p>
                <div className='button-container'>
                    <button className='button-download' onClick={handleResumeClick}>Download Resume</button>
                    <a className='button-social-link-linkedin' href={LINKEDIN_URL} target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                    <a className='button-social-link-github' href={GITHUB_URL} target='_blank' rel='noopener noreferrer'>Github</a>
                </div>
            </span>
        </div>
    )
}
