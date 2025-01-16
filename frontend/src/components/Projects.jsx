import React from "react";

const projects = [
  {
    title: "Form Builder",
    description:
      "1. Developed a Form Builder application for creating customizable forms. 2. Features - It supports text inputs, grid-style questions, and multiple-choice questions. 3. Technologies used: React.js, Tailwind CSS, JavaScript, Node.js, and MongoDB for backend storage.",
    link: "https://github.com/Chandu-Crypton/Form-Builder",
  },
  {
    title: "Task Manager Application",
    description:
      "1. Designed a responsive Task Manager Application for showcasing proficiency in front-end development. 2. Features - Task details including title, description, priority, due date and options to edit or delete tasks. 3. Technologies used: HTML, JavaScript, CSS, React Toolkit.",
    link: "https://github.com/Chandu-Crypton/Task_Manager",
  },
  {
    title: "Restaurant Website",
    description:
      "1. Designed and developed a responsive restaurant website. 2. Features - Sections include Home, About, Qualities, Team, and Menu. 3. Technologies used: React.js, Node.js, Express.js, and Bootstrap.",
    link: "https://github.com/Chandu-Crypton/Deployment",
  },
  {
    title: "AI-Integrated Portfolio Website with Authentication",
    description:
      "1. Developed an interactive portfolio website with ChatGPT integration. 2. Features - Secure authentication, navigation bar, and ChatGPT integration. 3. Technologies used: HTML, CSS, JavaScript, React.js, Node.js, and ChatGPT API.",
    link: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-10 md:py-20 bg-light text-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-orange-100 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-green-600 mb-2">
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-4">
                {project.description}
              </p>
              {project.link ? (
                <button
                  onClick={() =>
                    window.open(project.link, "_blank", "noopener,noreferrer")
                  }
                  className="text-sm md:text-base text-red bg-pink-500 hover:underline px-4 py-2 rounded transition-colors"
                >
                  View Project
                </button>
              ) : (
                <p className="text-gray-500 italic">Link not available</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
