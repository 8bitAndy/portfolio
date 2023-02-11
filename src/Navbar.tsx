


// Navbar component for website
export default function Navbar() {

    window.onscroll = () => {
        scrollFunction()
    };

    // Logic for channging scss class when user is not at top of page
    function scrollFunction() {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            document.getElementById("navbar")?.classList.add('change');
        } else {
            document.getElementById("navbar")?.classList.remove('change');
        }
    }

    return (
        <div className="Parent">
            <div id="navbar" className="Navbar">
                <ul>
                    <li><a href="#top">Top</a></li>
                    <li><a href="#about-me">About me</a></li>
                    <li><a href="#my-portfolio">My Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}