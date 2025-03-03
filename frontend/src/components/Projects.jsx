import React from "react";

const projects = [
  {
    title: "GlobalForm: Multi-functional User Data Form ",
    description:
      "1. Designed and implemented a responsive, feature-rich form system with global adaptability. 2. Features - Multi-language support,Multi-currency functionality,Multi-timezone handling,User data management. 3.Leveraged React, Context API for state management, and Mymemory API for content translation and multilingual support. 4. Technologies used: React.js, Tailwind CSS, JavaScript, Node.js, and MongoDB for backend storage.",
    view: "https://chandusrikakulam-global-formlive.vercel.app/",
    source: "https://github.com/Chandu-Crypton/Global_Form",
  },

  {
    title: "MemeVerse - Meme Sharing and Profile Management Applicatio",
    description:
      "1. Developed a fun social platform where users can upload, view, and manage memes. 2. Features - Profile Page,local storage persistence,dark mode toggle,editable profile cards. 3. Technologies used: React.js, Vite,Tailwind CSS, JavaScript.",
    view: "https://chandu-meme-verse-live.vercel.app/",
    source: "https://github.com/Chandu-Crypton/Meme_Verse",
  },

  {
    title: "Form Builder",
    description:
      "1. Developed a Form Builder application for creating customizable forms. 2. Features - It supports text inputs, grid-style questions, and multiple-choice questions. 3. Technologies used: React.js, Tailwind CSS, JavaScript, Node.js, and MongoDB for backend storage.",
    view : "https://form-builder-pearl.vercel.app/",
    source : "https://github.com/Chandu-Crypton/Form-Builder"
  },
  {
    title: "Task Manager Application",
    description:
      "1. Designed a responsive Task Manager Application for showcasing proficiency in front-end development. 2. Features - Task details including title, description, priority, due date and options to edit or delete tasks. 3. Technologies used: HTML, JavaScript, CSS, React Toolkit.",
    source: "https://github.com/Chandu-Crypton/Task_Manager",
  },
  {
    title: "Restaurant Website",
    description:
      "1. Designed and developed a responsive restaurant website. 2. Features - Sections include Home, About, Qualities, Team, and Menu. 3. Technologies used: React.js, Node.js, Express.js, and Bootstrap.",
    source: "https://github.com/Chandu-Crypton/Deployment",
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

           <div className="flex items-center justify-center">

              <div className="">
              {project.view ? (
                <button
                  onClick={() =>
                    window.open(project.view, "_blank", "noopener,noreferrer")
                  }
                  className="text-sm md:text-base text-red bg-pink-500 hover:underline px-4 py-2 rounded transition-colors"
                >
                  View Project
                </button>
              ) : (
                <p className="text-gray-500 italic">Link not available</p>
              )}
              </div>

             <div className="mx-2">
              {project.source ? (
                <button
                  onClick={() =>
                    window.open(project.source, "_blank", "noopener,noreferrer")
                  }
                  className="text-sm md:text-base text-red bg-pink-500 hover:underline px-4 py-2 rounded transition-colors"
                >
                  View source
                </button>
              ) : (
                <p className="text-gray-500 italic">Link not available</p>
              )}
              </div>

              </div>
        </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
