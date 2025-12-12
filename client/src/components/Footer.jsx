import { Link } from "react-router-dom";
// @ts-ignore
import "../styles/footer.css";
const Footer = () => {
  return (
    <div className="footerMain">
      <div className="footerClass">
        <div className="footerAbout">
          <p>
            <b style={{ fontSize: "larger" }}>About</b>
          </p>
          <p id="description">
            Our digital notice board is designed to bring clarity and
            convenience to both students and faculty. Instead of relying on
            crowded WhatsApp groups, scattered PDFs, or missed announcements,
            this platform centralizes every important update in one clean and
            accessible place.
          </p>
          <br />
          <p>
            <b style={{ fontSize: "larger" }}>Quick Links</b>
          </p>
          <p>
            <Link to="#">Home</Link> •<Link to="#">Notices</Link>
          </p>
        </div>
        <div className="footerContact">
          <br />
          <p>
            <b style={{ fontSize: "larger" }}>Contact</b>
          </p>
          <p>Email: demo@example.com</p>
          <p>Phone: +91 demo number</p>
          <p>Address: Kolkata, West Bengal, India</p>
          <br />
          <p>
            <b style={{ fontSize: "larger" }}>Follow Us</b>
          </p>
          <p>
            <Link to={"https://instagram.com"} target="_blank">
              Instagram
            </Link>{" "}
            •
            <Link to={"https://facebook.com"} target="_blank">
              Facebook
            </Link>{" "}
            •
            <Link to={"https://x.com"} target="_blank">
              X(Twitter)
            </Link>{" "}
            •
            <Link to={"https://linkedin.com"} target="_blank">
              LinkedIn
            </Link>
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};
export default Footer;
