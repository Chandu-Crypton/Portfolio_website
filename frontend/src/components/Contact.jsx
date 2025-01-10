import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-10 md:py-20 bg-light text-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
          Contact Me
        </h2>
        <p className="text-sm md:text-lg text-gray-600 mb-8">
          I'd love to hear from you! Whether it's a project idea or just to say hi.
        </p>

        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center">
            <h3 className="text-lg font-semibold mr-2">Gmail:</h3>
            <p className="text-base text-gray-700">srikakulamchandu@gmail.com</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center">
            <h3 className="text-lg font-semibold mr-2">Phone Number:</h3>
            <p className="text-base text-gray-700">8688175600</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
