import './MainContent.css'
import IntroContainer from './IntroContainer'
import Experiences from './Experiences'

// Serves as the main container for all other components to be placed into
export default function MainContent(){
    return(
        <div className='main-column'>
            <IntroContainer/>
            <br></br>
            <Experiences/>
        </div>
    )
}

