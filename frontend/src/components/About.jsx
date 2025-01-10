import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-light-100 text-light shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
          About Me
        </h2>
        <p className="text-base sm:text-lg text-blue-500 leading-relaxed">
          Hi, I'm{" "}
          <span className="text-secondary font-semibold">
            Chandu Srikakulam
          </span>
          . Aspiring Full Stack Developer adept in ExpressJs, NodeJs, and
          ReactJs. Eager to collaborate with a dynamic team, bringing enthusiasm
          to craft intuitive web applications. Excited about the opportunity to
          contribute my skills and collectively innovate.
        </p>
      </div>
    </section>
  );
};

export default About;
