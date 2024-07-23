import React from 'react';

function Admissions() {
  return (
    <div>
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            font-family: Arial, sans-serif;
          }
          .background {
            background-image: url('https://nirajinternationalschool.com/wp-content/uploads/2023/10/Admission-Open-Hero-Banner.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            min-height: 100vh;
            padding: 20px;
            box-sizing: border-box;
            background-attachment: fixed; /* Ensures the background image stays fixed */
          }
          .container {
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
            background-color: rgba(255, 255, 255, 0.8); /* Slightly transparent white background for readability */
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
          h1 {
            font-size: 3rem;
            margin-bottom: 20px;
            color: #004d40;
            text-align: center;
          }
          h2 {
            font-size: 2rem;
            margin-top: 20px;
            color: #004d40;
            border-bottom: 2px solid #004d40;
            padding-bottom: 10px;
          }
          p {
            font-size: 1.2rem;
            line-height: 1.6;
            margin-bottom: 20px;
          }
          ul {
            list-style-type: disc;
            padding-left: 20px;
            margin-bottom: 20px;
          }
          li {
            font-size: 1.2rem;
            margin-bottom: 10px;
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
      <div className="background">
        <div className="container mt-4">
          <h1>Admissions</h1>
          <h2>Apply Now</h2>
          <p>We are excited to welcome new students to Himalayan Public School. Our admissions process is designed to be straightforward and efficient, ensuring that every prospective student has the opportunity to become a part of our vibrant community.</p>
          <h2>How to Apply</h2>
          <p>To apply for admission, please follow these steps:</p>
          <ul>
            <li>Fill out the online application form available on our website.</li>
            <li>Submit required documents, including previous academic records and identification.</li>
            <li>Attend an admission interview, if applicable.</li>
            <li>Receive an admission offer and complete the enrollment process.</li>
          </ul>
          <h2>Important Dates</h2>
          <p>Ensure you are aware of key deadlines to complete your application:</p>
          <ul>
            <li>Application Opening: 22 March</li>
            <li>Application Last Date: 10 April</li>
            <li>Final Admission Decision: 20 April</li>
          </ul>
          <h2>Contact Us</h2>
          <p>If you have any questions or need assistance with the admissions process, please feel free to reach out to us:</p>
          <p>Email: <a href="mailto:admissions@Himalayanpublicschool.com">admissions@Himalayanpublicschool.com</a></p>
          <p>Phone: (123) 456-7890</p>
        </div>
        
        <div className="footer">
          <p>Contact Us: Himalayan Public School, 1234 School Lane, City, Country</p>
          <p>Email: <a href="mailto:info@Himalayanpublicschool.com">info@Himalayanpublicschool.com</a></p>
          <p>Phone: (123) 456-7890</p>
          <p>&copy; 2024 Himalayan Public School. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Admissions;
