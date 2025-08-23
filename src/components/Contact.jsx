import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false); 

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); 

    //To me
    emailjs
      .sendForm(
        "service_qlli30l",
        "template_4t6emye",
        form.current,
        "KI82vtQl8EQpsF3G_"
      )
      .then(
        () => {
          //To user
          emailjs
            .sendForm(
              "service_qlli30l",
              "template_kczzass",
              form.current,
              "KI82vtQl8EQpsF3G_"
            )
            .then(
              () => {
                alert("Thank you for reaching out, I’ll get back to you soon. ✅ !");
                form.current.reset();
                setLoading(false);   
              },
              (error) => {
                console.error("Auto-reply FAILED...", error);
                alert("Message sent to you, but auto-reply failed ❌");
                setLoading(false);
              }
            );
        },
        (error) => {
          console.error("Message to you FAILED...", error);
          alert("Something went wrong ❌");
          setLoading(false); 
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Feel free to drop me a message, I’ll get back to you as soon as possible...
        </p>

        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? <span className="loader"></span> : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
