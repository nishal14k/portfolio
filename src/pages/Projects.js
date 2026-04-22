import React from 'react';

function Projects() {
  const projectList = [
    {
      title: "Aircraft Engine Health Monitoring and Predictive Maintenance",
      description: "Built an end-to-end predictive maintenance system using the NASA CMAPSS dataset to forecast aircraft engine degradation and optimize maintenance scheduling. Accurately predicted Remaining Useful Life (RUL) and assessed failure risk in real-time.",
      repoLink: "https://github.com/nishall4k/aircraft-engine-monitoring"
    },
    {
      title: "Legal and Medical Document Summarizer",
      description: "Built an NLP-based system to summarize legal and medical documents using transformer models. Applied parameter-efficient fine-tuning using LORA to adapt the T5 transformer, comparing it against Lead-3 and TextRank.",
      repoLink: "https://github.com/nishall4k/document-summarizer"
    }
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      {projectList.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="github-btn">
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;