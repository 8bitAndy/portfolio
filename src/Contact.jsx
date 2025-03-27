export default function Contact() {
    return (
        <div className="contact-form-container">
            <h3>Get in contact with me</h3>

            <form className="contact-form"> 
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" placeholder="Your name here"/>
                <label htmlFor="message">Enter you message below:</label>
                <input type="text" id="message" placeholder="Your email here"></input>
                <button>Send email</button>


            </form>
        </div>)

}