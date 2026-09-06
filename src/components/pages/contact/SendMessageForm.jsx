import { useState } from "react";
import emailjs from "emailjs-com";
import { FaComment, FaEnvelope, FaPaperPlane, FaUser } from "react-icons/fa";
import Success from "../../../messages/Success";
import Unsuccess from "../../../messages/Unsuccess";

export default function SendMessageForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [successKey, setSuccessKey] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_2utvxpf",
        "template_u4jtf2d",
        e.target,
        "BsG1_TvuetovfbRee",
      )
      .then(
        (result) => {
          setStatus("success");
          setSuccessKey((prev) => prev + 1);
          setName("");
          setEmail("");
          setMessage("");
          setIsSubmitting(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
          setIsSubmitting(false);
        },
      );
  };

  return (
    <div className="contactPage__form-wrapper">
      <div className="contactPage__form-card">
        <div className="form-header">
          <h2>Send Me a Message</h2>
          <p>I'll get back to you within 24 hours</p>
        </div>

        <form onSubmit={sendEmail} className="form">
          <div className="form-group">
            <div className="input-wrapper">
              <FaUser className="input-icon" />
              <input
                type="text"
                placeholder="Your Name"
                name="from_name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="input-line"></div>
            </div>
          </div>

          <div className="form-group">
            <div className="input-wrapper">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                placeholder="Your Email"
                name="from_email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="input-line"></div>
            </div>
          </div>

          <div className="form-group">
            <div className="input-wrapper textarea-wrapper">
              <FaComment className="input-icon" />
              <textarea
                placeholder="Your Message"
                name="message_html"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
              />
              <div className="input-line"></div>
            </div>
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Sending...
              </>
            ) : (
              <>
                <FaPaperPlane /> Send Message
              </>
            )}
          </button>
        </form>

        {/* Status Messages */}
        <div className="status-messages">
          {status === "success" && (
            <Success key={successKey}>
              Your message sent successfully! 🎉
            </Success>
          )}
          {status === "error" && <Unsuccess />}
        </div>
      </div>
    </div>
  );
}
