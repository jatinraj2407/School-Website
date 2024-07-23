import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="background">
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            font-family: Arial, sans-serif;
          }
          .background {
            background-color: #f4f4f4;
            padding: 20px;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
          h1, h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: #004d40;
            text-align: center;
          }
          form {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .form-group {
            display: flex;
            flex-direction: column;
          }
          label {
            font-size: 1.2rem;
            margin-bottom: 5px;
            color: #004d40;
          }
          input, textarea {
            font-size: 1rem;
            padding: 10px;
            border-radius: 4px;
            border: 1px solid #ccc;
          }
          button {
            align-self: center;
            font-size: 1.2rem;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            background-color: #004d40;
            color: #fff;
            cursor: pointer;
          }
          button:hover {
            background-color: #00332c;
          }
          .contact-info {
            text-align: center;
            margin-top: 40px;
            font-size: 1.2rem;
            color: #333;
          }
          iframe {
            width: 100%;
            height: 450px;
            border: 0;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
          .footer {
            background-color: #004d40;
            color: #ffffff;
            text-align: center;
            padding: 20px;
            position: relative;
            bottom: 0;
            width: 100%;
            box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
          }
          .footer p {
            margin: 0;
            font-size: 1rem;
          }
          .footer a {
            color: #ffffff;
            text-decoration: none;
            font-weight: bold;
          }
          .footer a:hover {
            text-decoration: underline;
          }
        `}
      </style>
      <div className="container">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <h2>Contact Information</h2>
        <div className="contact-info">
          <p>Himalayan Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Email: <a href="mailto:info@Himalayan.edu">info@Himalayan.edu</a></p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093667!2d144.95373531531555!3d-37.816279742021275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577ed92b528b1d6!2sVictoria%20Harbour%2C%20Docklands%20VIC%203008%2C%20Australia!5e0!3m2!1sen!2sus!4v1633254907740!5m2!1sen!2sus" allowFullScreen="" loading="lazy"></iframe>
      </div>
      <div className="footer">
        <p>Contact Us: Himalayan Public School, 1234 School Lane, City, Country</p>
        <p>Email: <a href="mailto:info@Himalayanpublicschool.com">info@Himalayanpublicschool.com</a></p>
        <p>Phone: (123) 456-7890</p>
        <p>&copy; 2024 Himalayan Public School. All rights reserved.</p>
      </div>
    </div>
  );
}

export default ContactUs;
