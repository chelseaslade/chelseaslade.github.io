import React from 'react';

const Contact = () => {
    return (
        <>
              <div className="container">
                <div className="Contact">
                    <h3>Contact</h3>
                    <form action="" id="contactForm">
                    <input type="text" id="inputName" placeholder="Enter your name:" />
                    <input type="text" id="inputEmail" placeholder="Enter your email:" />
                    <input type="text" id="inputMessage" placeholder="Enter your message or inquiry:" />
                    <button type="submit">Submit</button>
                </form>
                </div>
                </div>
        </>
    );
};

    export default Contact;