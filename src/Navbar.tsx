// Navbar component for website
export default function Navbar() {
    // State of the hamburger menu and mobile menu
    var burgerButton = document.querySelector('.Hamburger');
    var mobileMenu = document.querySelector('.MobileNav');

    // Deals with the opening and closing of hamburger menu, also the only time I can possibly use name a name with burger in it
    const handleBurger = () => {
        // Get the values of the class name
        burgerButton = document.querySelector('.Hamburger');
        mobileMenu = document.querySelector('.MobileNav');
        // toggle the class name status
        burgerButton?.classList.toggle('is-active');
        mobileMenu?.classList.toggle('is-active');
    }

    window.onscroll = () => {
        scrollFunction()
    };

    // Logic for channging scss class when user is not at top of page
    function scrollFunction() {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            document.getElementById("navbar")?.classList.add('change');
        } else {
            document.getElementById("navbar")?.classList.remove('change')
        }
    }

    return (
        <div className="Parent">
            <div id="navbar" className="Navbar">
                <ul className="DesktopNav">
                    <li><a href="#top">Top</a></li>
                    <li><a href="#about-me">About me</a></li>
                    <li><a href="#my-portfolio">My Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button className="Hamburger" onClick={handleBurger}>
                    <div className="Bar" id="burgerBar">
                    </div>
                </button>
            </div>
            <div className="MobileNav">
                <ul>
                    <li><a href="#top" onClick={handleBurger}>Top</a></li>
                    <li><a href="#about-me" onClick={handleBurger}>About me</a></li>
                    <li><a href="#my-portfolio" onClick={handleBurger}>My Portfolio</a></li>
                    <li><a href="#contact" onClick={handleBurger}>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}