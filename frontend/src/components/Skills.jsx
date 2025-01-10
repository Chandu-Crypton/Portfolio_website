import React from "react";

const skills = [
  "React.js",
  "Node.js",
  "Tailwind CSS",
  "Bootstrap",
  "Rest APIs",
  "JavaScript (ES6+)",
  "MongoDB",
  "Express.js",
  "MySQL",
];

const Skills = () => {
  return (
    <section id="skills" className="py-10 md:py-20 bg-dark text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">
          Skills
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="text-sm sm:text-lg font-medium bg-light text-dark py-2 rounded shadow-lg hover:bg-secondary hover:text-dark transition-colors"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
