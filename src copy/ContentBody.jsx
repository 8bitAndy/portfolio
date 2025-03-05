import Navbar from "./Navbar";
import Placeholder from "./Placeholder";
import Skills from "./Skills";

export default function ContentBody(){
    return(
        <div className="content-body">
            <h1 className="name-header">Liam Andrews</h1>
            <Navbar/>
            <Placeholder/>
            <Skills/>
        </div>
    )
}