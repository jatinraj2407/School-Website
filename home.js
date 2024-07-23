import React from 'react';

function Home() {
  return (
    <div>
      <style>
        {`
          .hero-section {
            position: relative;
            height: 500px;
            background-image: url('https://qph.cf2.quoracdn.net/main-qimg-a16b19debc1cf68f6bcdbafe175acfde.webp');
            background-size: cover;
            background-attachment: fixed;
            background-position: center;
            color: #ffffff;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            overflow: hidden;
            padding: 20px;
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
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
          .section {
            padding: 60px 20px;
            text-align: center;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin: 20px auto;
            max-width: 100%;
            width: 100%;
          }
          .section:nth-of-type(even) {
            background-color: #f4f4f4;
          }
          .section h2 {
            margin-bottom: 20px;
            font-size: 2.5rem;
            color: #004d40;
            position: relative;
            padding-bottom: 10px;
            border-bottom: 3px solid #004d40;
          }
          .section p {
            font-size: 1.2rem;
            color: #333;
            line-height: 1.6;
          }
          .highlight, .teaching-approach, .resources {
            background-color: #ffffff;
            padding: 30px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin: 20px auto;
            max-width: 100%;
            width: 90%;
            text-align: left;
          }
          .highlight h3, .teaching-approach h3, .resources h3 {
            color: #004d40;
            font-size: 1.5rem;
            margin-bottom: 15px;
            border-bottom: 2px solid #004d40;
            padding-bottom: 10px;
          }
          .highlight ul, .teaching-approach ul, .resources ul {
            padding-left: 20px;
          }
          .highlight li, .teaching-approach li, .resources li {
            margin-bottom: 10px;
            font-size: 1.1rem;
            line-height: 1.5;
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
        <p>Nurturing Young Minds for a Brighter Future</p>
      </div>
      <div className="section">
        <h2>About Us</h2>
        <p>Founded in 1985, Himalayan Public School has been dedicated to providing quality education and holistic development to students. Our journey began with a vision to create an institution where academic excellence and personal growth go hand in hand. Over the decades, we have evolved into a premier educational establishment, renowned for our commitment to nurturing young minds.

From our humble beginnings, we have consistently strived to adapt and grow in response to the changing educational landscape. Our school has seen numerous milestones, including the introduction of innovative teaching methods, the expansion of our facilities, and the development of a diverse curriculum designed to cater to the needs of each student.

Our core values of integrity, excellence, and inclusivity have guided us throughout our history. We are proud of our achievements and the many contributions of our dedicated faculty, supportive parents, and, most importantly, our talented students.

Himalayan Public School is more than just a place of learning; it is a community where students are encouraged to explore their passions, develop their skills, and prepare for the future with confidence. As we continue to grow and evolve, we remain steadfast in our mission to provide an exceptional education that prepares our students for success in an ever-changing world.</p>
      </div>
      <div className="section">
        <h2>Academics</h2>
        <p>At Himalayan Public School, our diverse curriculum is designed to meet various educational needs and promote academic excellence. We offer a well-rounded education that prepares students for future success.</p>
        <div className="highlight">
          <h3>Curriculum Highlights:</h3>
          <ul>
            <li><strong>Primary (Grades 1-5):</strong> Focuses on foundational skills in English, Mathematics, Science, and Social Studies, along with Art and Physical Education to foster a love for learning.</li>
            <li><strong>Secondary (Grades 6-10):</strong> Expands into advanced topics in English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, and Computer Science, with continued emphasis on Physical Education and Art.</li>
            <li><strong>Senior Secondary (Grades 11-12):</strong> Provides specialized streams in Science (Physics, Chemistry, Biology, Mathematics) and Commerce (Accountancy, Business Studies, Economics) to support diverse academic and career interests.</li>
          </ul>
        </div>
        <div className="teaching-approach">
          <h3>Teaching Approach:</h3>
          <ul>
            <li><strong>Interactive Learning:</strong> Engages students with modern tools and multimedia.</li>
            <li><strong>Project-Based Learning:</strong> Encourages practical problem-solving.</li>
            <li><strong>Personalized Instruction:</strong> Tailors support to individual needs.</li>
          </ul>
        </div>
        <div className="resources">
          <h3>Resources:</h3>
          <ul>
            <li><strong>Digital Classrooms and Labs:</strong> Modern technology for hands-on learning.</li>
            <li><strong>Library:</strong> A vast collection of books and digital resources.</li>
          </ul>
        </div>
        <p>Our goal is to nurture each student's potential and prepare them for a successful future through a blend of academic rigor and creative exploration.</p>
      </div>
      <div className="footer">
        <h3>Contact Us</h3>
        <p>Himalayan Public School, 1234 School Lane, City, Country</p>
        <p>Email: <a href="mailto:info@himalayanpublicschool.com">info@himalayanpublicschool.com</a></p>
        <p>Phone: (123) 456-7890</p>
        <p>&copy; 2024 Himalayan Public School. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Home;
