import React from 'react';
import profilePic from '../profile.jpeg';

function Home() {
  return (
    <div className="home-container">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      
      <h2>About Me</h2>
      <p>I am an Artificial Intelligence engineering student experienced in machine learning and data engineering. I enjoy uncovering behavioral patterns, predicting outcomes using massive datasets, and engineering seamless data pipelines.</p>
      
      <h2>Research Interests</h2>
      <p>My core research interests revolve around Machine Learning, Natural Language Processing (NLP), and Predictive Analytics, specifically applying parameter-efficient fine-tuning (LORA) and real-time failure risk assessments.</p>
      
      <h2>Personal Details</h2>
      <ul className="details-list">
        <li><strong>Name:</strong> Nishal Karamsetty</li>
        <li><strong>Phone Number:</strong> +91 6302463674</li>
        <li><strong>Personal Email:</strong> nishall4k@gmail.com</li>
        <li><strong>College Email:</strong> SE23UARI084@mahindrauniversity.edu.in</li>
      </ul>

      <h2>Skills</h2>
      <div className="skills-box">
        <span>Python</span> | <span>DSA in C/C++</span> | <span>MySQL</span> | <span>Pandas</span> | <span>NumPy</span> | <span>Matplotlib</span> | <span>Seaborn</span> | <span>Scikit-learn</span> | <span>VS Code</span> | <span>GitHub</span>
      </div>
    </div>
  );
}

export default Home;