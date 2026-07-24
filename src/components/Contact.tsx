import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">
          {/* Contact & Education */}
          <div className="contact-box">
            <h4>Connect</h4>

            <p>
              <a
                href="https://www.linkedin.com/in/jm1904/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — Jeet Mondal
              </a>
            </p>

            <h4>Education</h4>

            <p>
              <strong>B.Tech in Information Technology</strong>
              <br />
              Narula Institute of Technology (MAKAUT)
              <br />
              2025 – 2028
            </p>

            <p>
              <strong>Diploma in Computer Science & Technology</strong>
              <br />
              Berhampore Polytechnic College .
              <br />
              2022 – 2025
            </p>
          </div>

          {/* Social Links */}
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/JEETJM"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>

            <a
              href="https://www.linkedin.com/in/jm1904/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>

            <a
              href="https://www.youtube.com/@JM38211-JM"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              YouTube <MdArrowOutward />
            </a>
          </div>

          {/* Footer */}
          <div className="contact-box">
            <h2>
              Designed and Developed <br />
              by <span>Jeet Mondal</span>
            </h2>

            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
