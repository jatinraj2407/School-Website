import React from 'react';

function Gallery() {
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
          h1 {
            font-size: 3rem;
            margin-bottom: 20px;
            color: #004d40;
            text-align: center;
          }
          .row {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-bottom: 40px;
          }
          .col-md-4 {
            flex: 0 0 32%;
            box-sizing: border-box;
          }
          img {
            width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            margin-bottom: 10px;
          }
          p {
            font-size: 1rem;
            color: #333;
          }
          h2 {
            font-size: 1.5rem;
            color: #004d40;
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
      <div className="container">
        <h1>Gallery</h1>
        <div className="row">
          <div className="col-md-4">
            <h2>Sports Day</h2>
            <img src="https://thekhaitanschool.org/wp-content/uploads/2023/05/Running-to-win-Zig-Zag-Race.jpg" alt="Sports Day" />
            <p>Students participating in various sports events.</p>
          </div>
          <div className="col-md-4">
            <h2>Science Exhibition</h2>
            <img src="https://scontent.fluh3-2.fna.fbcdn.net/v/t1.6435-9/78748644_2412204078907288_1384590515839696896_n.jpg?stp=dst-jpg_s600x600&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=We10IfenMzIQ7kNvgEyIIgW&_nc_ht=scontent.fluh3-2.fna&oh=00_AYDIcmtTeKMw2ujUdyvwBuIcldLL3XGkhnyp8r7oZIQWnQ&oe=66C72760" alt="Science Exhibition" />
            <p>Students presenting their science projects.</p>
          </div>
          <div className="col-md-4">
            <h2>Cultural Fest</h2>
            <img src="https://silicon.ac.in/wp-content/uploads/2023/05/4.-Zygon-scaled.jpg" alt="Cultural Fest" />
            <p>Students performing in the cultural fest.</p>
          </div>
          <div className="col-md-4">
            <h2>Lunch Time</h2>
            <img src="https://c7.alamy.com/comp/WAAPXE/students-enjoying-in-lunch-time-WAAPXE.jpg" alt="Lunch Time" />
            <p>Students enjoying their lunch break.</p>
          </div>
          <div className="col-md-4">
            <h2>Classroom</h2>
            <img src="https://xello.world/wp-content/uploads/student-success-1-1024x683.jpeg" alt="Classroom" />
            <p>Students engaged in a classroom activity.</p>
          </div>
          <div className="col-md-4">
            <h2>Playground</h2>
            <img src="https://www.shutterstock.com/shutterstock/photos/1355500133/display_1500/stock-photo-new-delhi-india-march-young-children-playing-in-their-basketball-court-1355500133.jpg" alt="Playground" />
            <p>Students playing in the school playground.</p>
          </div>
          <div className="col-md-4">
            <h2>School Transport</h2>
            <img src="https://indianexpress.com/wp-content/uploads/2018/04/school-buses-759.jpg" alt="School Transport" />
            <p>School buses lined up for student transport.</p>
          </div>
          <div className="col-md-4">
            <h2>Assembly</h2>
            <img src="https://c7.alamy.com/comp/DGYC22/morning-assembly-students-chapslee-school-the-chapslee-shimla-himachal-DGYC22.jpg" alt="Assembly" />
            <p>Students gathered for the morning assembly.</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Contact Us: Himalayan Public School, 1234 School Lane, City, Country</p>
        <p>Email: <a href="mailto:info@Himalayanpublicschool.com"></a></p>
        <p>Phone: (123) 456-7890</p>
        <p>&copy; 2024 Himalayan Public School. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Gallery;
