//Formspree used for form submission 

const ContactForm = () => {
    return (
        <div className="contactForm">
    <form
    action="https://formspree.io/f/mdkwgyjz"
    method="POST"
    >
      <label>
        Name:
        <input type="text" name="name" className="contactLabel" required />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" className="contactLabel" required />
      </label>
      <br />
      <label>
        Message:
        <textarea name="message" className="contactLabel" required />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default ContactForm; 