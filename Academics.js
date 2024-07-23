import React from 'react';

function Academics() {
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
            background-image: url('https://media.istockphoto.com/id/1146925253/photo/group-of-students-studying-book-at-classroom.jpg?s=2048x2048&w=is&k=20&c=bvhjr1NvzAr2iHv2wqavgEyMfVoKDAxsgWfkcP_1ZhI=');
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
            background-color: rgba(255, 255, 255, 0.8); /* Slightly transparent white background for readability */
            border-radius: 8px;
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
          .highlight {
            background-color: #e0f2f1;
            padding: 10px;
            border-radius: 5px;
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
      <div className="background">
        <div className="container mt-4">
          <h1>Academics</h1>
          <h2>Curriculum Overview</h2>
          <p>Our curriculum at Himalayan Public School is crafted to support the intellectual, social, and emotional development of students. We offer a well-rounded education that prepares students for success in a diverse and ever-evolving world.</p>
          
          <h2>Programs Offered</h2>
          <div className="highlight">
            <ul>
              <li>Primary Education (Grades 1-5): Emphasis on core subjects, foundational skills, and holistic development including Art and Physical Education.</li>
              <li>Middle School (Grades 6-8): Focus on advanced topics and critical thinking, preparing students for high school academics.</li>
              <li>High School (Grades 9-12): Specialized streams in Science, Commerce, and Humanities to prepare students for higher education and career paths.</li>
            </ul>
          </div>
          
          <h2>Subjects</h2>
          <div className="highlight">
            <ul>
              <li>Mathematics: From basic arithmetic to advanced calculus, ensuring a strong grasp of mathematical concepts.</li>
              <li>Science: Comprehensive coverage of Physics, Chemistry, and Biology with practical laboratory experiences.</li>
              <li>History: Exploration of historical events, their causes, and impacts on contemporary society.</li>
              <li>Geography: Study of physical and human geography to understand global dynamics and environmental issues.</li>
              <li>English: Enhancing language skills through literature, creative writing, and communication practices.</li>
              <li>Social Studies: Understanding societal structures, governance, and global citizenship.</li>
              <li>Computer Science: Introducing coding, software development, and information technology basics.</li>
            </ul>
          </div>
          
          <h2>Teaching Methodologies</h2>
          <p>Our teaching approach integrates various methodologies to accommodate diverse learning styles and enhance student engagement:</p>
          <ul>
            <li>Interactive Learning: Using digital tools and multimedia to create an engaging learning environment.</li>
            <li>Project-Based Learning: Encouraging students to solve real-world problems through hands-on projects.</li>
            <li>Collaborative Learning: Facilitating teamwork and peer interactions to build communication and problem-solving skills.</li>
            <li>Personalized Instruction: Offering tailored support to meet individual learning needs and pace.</li>
            <li>Inquiry-Based Learning: Fostering curiosity and critical thinking through exploration and questioning.</li>
          </ul>
          
          <h2>Educational Resources</h2>
          <p>We provide a range of resources to support our students’ educational journey:</p>
          <ul>
            <li>Digital Classrooms: Equipped with the latest technology to facilitate interactive and modern learning experiences.</li>
            <li>Interactive Learning Modules: Engaging educational content that caters to various learning preferences.</li>
            <li>Online Educational Platforms: Access to a wealth of digital resources and tools to complement classroom instruction.</li>
            <li>Library: A well-stocked library with books, journals, and digital media to support research and reading.</li>
            <li>Science and Computer Labs: Hands-on learning experiences with modern lab equipment and technology.</li>
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

export default Academics;
