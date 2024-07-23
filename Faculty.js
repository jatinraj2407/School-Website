import React from 'react';

function Faculty() {
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
            background-image: url('https://gardenhighschool.in/wp-content/uploads/2016/04/faculty-1.jpg');
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
            background-color: rgba(255, 255, 255, 0.9); /* Slightly transparent white background for readability */
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
          ul {
            list-style-type: disc;
            padding-left: 20px;
            margin-bottom: 20px;
          }
          li {
            font-size: 1.2rem;
            margin-bottom: 15px;
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
          <h1>Faculty</h1>
          <h2>Our Teaching Staff</h2>
          <ul>
            <li>
              <strong>Jaswant Singh:</strong> Principal, M.Ed, with over 20 years of experience in educational administration. Jaswant has led various educational reforms and has a keen interest in student development and educational technology. His leadership and vision have greatly contributed to the growth and success of our institution.
            </li>
            <li>
              <strong>Rupali Shah:</strong> Vice Principal, M.Sc. in Physics, bringing 15 years of teaching experience. Rupali is known for her innovative teaching methods and dedication to student engagement. She is actively involved in curriculum development and academic research.
            </li>
            <li>
              <strong>Ameha gupta:</strong> English Teacher, M.A. in English, with a decade of teaching experience. Ameha specializes in literature and creative writing, fostering a love for language and expression in her students. She also coordinates the school's literary club and writing workshops.
            </li>
            <li>
              <strong>Rupak sharma:</strong> Mathematics Teacher, M.Sc. in Mathematics, with 8 years of experience. Rupak is passionate about making mathematics accessible and enjoyable for all students. He employs a range of interactive techniques to enhance problem-solving skills and conceptual understanding.
            </li>
            <li>
              <strong>Sonali Dev:</strong> Science Teacher, M.Sc. in Chemistry, offering 12 years of teaching experience. Sonali excels in hands-on experiments and encourages students to explore the wonders of science through inquiry-based learning. She also manages the school’s science fair and extracurricular science clubs.
            </li>
            <li>
              <strong>Dipak kumar:</strong> Computer Science Teacher, B.Tech in Computer Science, with 5 years of teaching experience. Dipak is dedicated to preparing students for the digital age with a focus on coding, software development, and IT skills. He also oversees the school's tech club and coding competitions.
            </li>
          </ul>
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

export default Faculty;
