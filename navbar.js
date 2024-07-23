import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <style>
        {`
          .navbar-custom {
            background: linear-gradient(135deg, #004d40 0%, #009688 100%); /* Gradient background */
            color: #ffffff;
            padding: 15px 30px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Box shadow for depth */
            backdrop-filter: blur(5px); /* Slight blur effect for background */
          }
          .navbar-custom .navbar-brand {
            color: #ffffff;
            font-weight: bold;
            font-size: 2rem; /* Larger font size */
            text-transform: uppercase; /* Uppercase text for emphasis */
          }
          .navbar-custom .navbar-nav {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            margin-left: auto;
            margin-right: auto;
          }
          .navbar-custom .navbar-nav .nav-link {
            color: #ffffff;
            font-weight: 500;
            text-decoration: none;
            margin: 0 15px;
            padding: 8px 16px;
            border-radius: 5px;
            transition: background-color 0.3s, color 0.3s;
          }
          .navbar-custom .navbar-nav .nav-link:hover {
            background-color: #00796b; /* Darker shade for hover effect */
            color: #ffffff;
          }
          .navbar-toggler {
            border: none;
            background-color: transparent;
          }
          .navbar-toggler-icon {
            background-image: url('data:image/svg+xml;charset=utf8,%3csvg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"%3e%3cpath stroke="%23ffffff" stroke-width="2" d="M5 6h20M5 15h20M5 24h20"/%3e%3c/svg%3e');
          }
          @media (max-width: 768px) {
            .navbar-nav {
              flex-direction: column;
              text-align: center;
            }
            .navbar-nav .nav-item {
              margin: 0;
              padding: 10px 0;
            }
          }
        `}
      </style>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <Link className="navbar-brand" to="/"><center>Himalayan Public School</center></Link>
        <button className="navbar-toggler" type="" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about-us">About Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/academics">Academics</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/admissions">Admissions</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/faculty">Faculty</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/students">Students</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/gallery">Gallery</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
