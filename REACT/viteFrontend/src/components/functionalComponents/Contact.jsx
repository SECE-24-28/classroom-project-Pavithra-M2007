const Contact = () => {
    return(
        <div className="contact-gradient">
            <div className="content-card">
                <h1>Get In Touch</h1>
                <p>Have questions, feedback, or need help with your React learning journey? We'd love to hear from you!</p>
                
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem'}}>
                    <div>
                        <h3>Contact Information</h3>
                        <div className="component-card">
                            <p><strong>📧 Email:</strong> learn@reacthub.com</p>
                            <p><strong>📱 Phone:</strong> +1 (555) 123-REACT</p>
                            <p><strong>📍 Location:</strong> San Francisco, CA</p>
                            <p><strong>🕰️ Hours:</strong> Mon-Fri 9AM-6PM PST</p>
                        </div>
                    </div>
                    
                    <div>
                        <h3>Send us a Message</h3>
                        <form className="component-card">
                            <input type="text" placeholder="Your Name" className="form-input" required />
                            <input type="email" placeholder="Your Email" className="form-input" required />
                            <textarea placeholder="Your Message" rows="4" className="form-input" style={{resize: 'vertical', height: '100px'}} required></textarea>
                            <button type="submit" className="btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;
