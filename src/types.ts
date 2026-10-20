export interface Experience{
    id: number;
    title: string;
    company: string;
    date: number;
    skills: string;
    content: string;
}

export interface Volunteering{
    id: number;
    title: string;
    organisation: string;
    info: string;
}

export interface PortfolioContent{
    introduction: {about: string; about2: string; email: string};
    experiences: Record<string, Experience>;
    volunteering: Record<number, Volunteering>;
}