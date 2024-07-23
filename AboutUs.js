import React from 'react';

function Home() {
  return (
    <div>
      <style>
        {`
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            color: #333;
            background-image: url('https://media.istockphoto.com/id/1148232185/photo/teacher-using-tablet-computer-in-elementary-school-lesson.jpg?s=2048x2048&w=is&k=20&c=lJgZnRdmIJ2TPSebgB3VxWPB27ikTCcs1ZXNus8iHMM=');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
          }
          .hero-section {
            position: relative;
            height: 500px;
            background: rgba(0, 77, 64, 0.6); /* Semi-transparent dark teal for overlay */
            color: #ffffff;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 20px;
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
            margin-bottom: 20px;
          }
          .hero-section h1 {
            font-size: 4rem;
            margin: 0;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
          }
          .hero-section p {
            font-size: 1.5rem;
            margin-top: 10px;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
          }
          .about-us-section {
            padding: 60px 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin: 20px auto;
            max-width: 1200px;
            width: 90%;
            text-align: center;
            color: #333;
          }
          .about-us-section h2 {
            margin-bottom: 20px;
            font-size: 2.5rem;
            color: #004d40;
            position: relative;
            padding-bottom: 10px;
            border-bottom: 3px solid #004d40;
          }
          .about-us-section h3 {
            color: #004d40;
            font-size: 1.5rem;
            margin-bottom: 15px;
            border-bottom: 1px solid #004d40;
            padding-bottom: 5px;
          }
          .about-us-section p {
            font-size: 1.2rem;
            line-height: 1.6;
          }
          .footer {
            background-color: #004d40;
            color: #ffffff;
            padding: 20px;
            text-align: center;
            position: relative;
            bottom: 0;
            width: 100%;
            box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
          }
          .footer h3 {
            margin: 0;
            font-size: 1.5rem;
          }
          .footer p {
            margin: 10px 0;
            font-size: 1rem;
          }
          .footer a {
            color: #e0f2f1;
            text-decoration: none;
          }
          .footer a:hover {
            text-decoration: underline;
          }
        `}
      </style>
      <div className="hero-section">
        <h1>Welcome to Himalayan Public School</h1>
        <p>Creating a Brighter Future Through Quality Education</p>
      </div>
      <div className="about-us-section">
        <h2>About Us</h2>
        <h3>Our History</h3>
        <p>Founded in 1985, Himalayan Public School has been dedicated to providing quality education and holistic development to students. Our journey began with a vision to create an institution where academic excellence and personal growth go hand in hand. Over the decades, we have evolved into a premier educational establishment, renowned for our commitment to nurturing young minds.</p>
        
        <h3>Our Vision</h3>
        <p>To create a learning environment that fosters academic excellence, critical thinking, and ethical values. We aspire to empower students with the tools they need to succeed both academically and personally.</p>
        
        <h3>Our Mission</h3>
        <p>To empower students with the knowledge, skills, and values needed to thrive in a dynamic world. We aim to equip our students with a comprehensive education that prepares them for future challenges and opportunities.</p>
        
        <h3>Message from the Principal</h3>
        <p>At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future. Our dedicated faculty and innovative programs are designed to support each student's individual growth and success. We are committed to providing a supportive and inspiring educational environment where every student can excel and achieve their dreams.</p>
      </div>
      <div className="footer">
        <h3>Contact Us</h3>
        <p>Himalayan Public School, 1234 School Lane, City, Country</p>
        <p>Email: <a href="mailto:info@Himalayanpublicschool.com">info@Himalayanpublicschool.com</a></p>
        <p>Phone: (123) 456-7890</p>
        <p>&copy; 2024 Himalayan Public School. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Home;
