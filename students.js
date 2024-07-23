import React from 'react';

function Students() {
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
            background-image: url('https://media.istockphoto.com/id/1136325730/photo/group-of-students-in-a-classroom.jpg');
            background-size: cover;
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            min-height: 100vh;
            padding: 20px;
            box-sizing: border-box;
          }
          .container {
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
            background-color: rgba(255, 255, 255, 0.8);
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
          .section {
            margin-bottom: 40px;
            padding: 20px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            color: #000;
            background-color: #f0f0f0;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
          .section img {
            max-width: 300px;
            border-radius: 8px;
            margin-right: 20px;
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
          <h1>Student Life</h1>
          
          <div className="section">
            <img src="https://enrollbasis.com/wp-content/uploads/2023/01/Benefits-of-Extra-Curricular-Activities-990x500-1.jpg" alt="Extracurricular Activities" />
            <div>
              <h2>Extracurricular Activities</h2>
              <p>At Himalayan Public School, we believe in nurturing well-rounded individuals. Our students have access to a wide range of extracurricular activities that enhance their skills and provide a platform for personal growth. These activities include:</p>
              <ul>
                <li>Music: Participate in school bands, orchestras, and solo performances.</li>
                <li>Dance: Join various dance forms such as classical, contemporary, and folk.</li>
                <li>Drama: Engage in theatrical productions and drama workshops.</li>
                <li>Art: Explore different art mediums and participate in exhibitions.</li>
                <li>Sports: Compete in inter-school tournaments and develop athletic skills.</li>
                <li>Robotics: Work on innovative projects and participate in robotics competitions.</li>
                <li>Debate Club: Develop public speaking and argumentation skills.</li>
                <li>Science Club: Engage in scientific experiments and projects.</li>
              </ul>
            </div>
          </div>

          <div className="section">
            <img src="https://www.parents.com/thmb/d2Qp93fKfYmB8Q-8KM702dViGmI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/RoboticsSTEMprogramkids-fd6b3d55111d48ecbbd96614728e4cac.jpg" alt="Clubs and Societies" />
            <div>
              <h2>Clubs and Societies</h2>
              <p>Our clubs and societies offer students the chance to delve into their interests and collaborate with peers who share similar passions. Some of the active clubs include:</p>
              <ul>
                <li>Literary Society: Explore literature, writing, and creative expression.</li>
                <li>Environmental Club: Participate in eco-friendly initiatives and awareness programs.</li>
                <li>Astronomy Club: Study celestial phenomena and engage in stargazing events.</li>
                <li>Coding Club: Develop programming skills and work on technology projects.</li>
              </ul>
            </div>
          </div>

          <div className="section">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Jagseer_S_Sidhu_teaching_school_students_about_Wikipedia.jpg/330px-Jagseer_S_Sidhu_teaching_school_students_about_Wikipedia.jpg" alt="Achievements" />
            <div>
              <h2>Achievements</h2>
              <p>Our students excel both academically and in extracurricular pursuits. Here are some of the recent notable achievements:</p>
              <ul>
                <li>Aarav Patel - National Level Math Olympiad Winner, showcasing exceptional mathematical skills and problem-solving abilities.</li>
                <li>Meera Reddy - Gold Medalist in State Swimming Championship, demonstrating outstanding performance in aquatic sports.</li>
                <li>Innovators Club - Winners of the Inter-School Robotics Competition, reflecting innovation and teamwork in technology.</li>
              </ul>
            </div>
          </div>

          <div className="section">
            <img src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/5/2023_5$largeimg_65797872.jpg" alt="Student Council" />
            <div>
              <h2>Student Council</h2>
              <p>The Student Council plays a crucial role in representing the student body and organizing various school events. Meet our current Student Council members:</p>
              <ul>
                <li>President: Aryan Sharma, Grade 12 - Leading the council with a vision to enhance student engagement.</li>
                <li>Vice President: Simran Gupta, Grade 11 - Assisting the president and managing council activities.</li>
                <li>Secretary: Raj Patel, Grade 10 - Responsible for documentation and communication within the council.</li>
              </ul>
            </div>
          </div>
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

export default Students;
