export default function Contact() {
    return (
        <div className="contact-form-container">
            <h3 id="contact">Get in contact with me</h3>

            <form className="contact-form">
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" placeholder="Your name here" />
                <label htmlFor="message">Enter you message below:</label>

                <textarea id="message" type="text" placeholder="Your email here"></textarea>
                <button type="button">Send email</button>
            </form>
            <div className="footer">
                <p>More content coming soon!</p>
                <p>And mobile view!</p>


                <h4>Links to my github & LinkedIn</h4>
                <a href="https://github.com/8bitAndy">Github</a>
                <br />
                <br />
                <a href="https://www.linkedin.com/in/liam-c-andrews/">LinkedIn</a>

            </div>
        </div>)

}