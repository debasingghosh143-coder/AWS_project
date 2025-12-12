import "../styles/footer.css"
const Footer = () => {
    return (
    <div className="footerMain">
        <div className="footerClass">
            <div className="footerAbout">
                <p><b style={{fontSize:"larger"}}>About</b></p>
                <p id="description">
                    Our digital notice board is designed to bring clarity and convenience to both 
    students and faculty. Instead of relying on crowded WhatsApp groups, scattered 
    PDFs, or missed announcements, this platform centralizes every important update 
    in one clean and accessible place.
                </p>
                <br />
                <p><b style={{fontSize:"larger"}}>Quick Links</b></p>
                <p>
                    <a href="#">Home</a> • 
                    <a href="#">Notices</a>  
                </p>
            </div>
            <div className="footerContact">
                <br />
                <p><b style={{fontSize:"larger"}}>Contact</b></p>
                <p>Email: demo@example.com</p>
                <p>Phone: +91 demo number</p>
                <p>Address: Kolkata, West Bengal, India</p>
                <br />
                <p><b style={{fontSize:"larger"}}>Follow Us</b></p>
                <p>
                    <a href="#">Instagram</a> • 
                    <a href="#">Facebook</a> • 
                    <a href="#">Twitter</a> • 
                    <a href="#">LinkedIn</a>
                </p>
                <br />
            </div>
        </div>
    </div>


    )
}
export default Footer;