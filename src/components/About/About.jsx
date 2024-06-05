export const About = () => {
  return (
    <section
      className="flex flex-col min-h-screen mx-5vw items-center justify-center text-center content-center text-lg text-white gap-8"
      id="about"
    >
      <h2 className="text-8xl font-bold text-blue-400 text-shadow-3d-blue">
        About
      </h2>
      <p>
        My journey into coding began as a hobby in 2020, driven by passion for
        creation, problem-solving, and continuous learning.
      </p>
      <p>
        In October 2023, I took the plunge to take my skills to the next level
        by enrolling in an intensive three-month full-time Software Engineering
        bootcamp with an esteemed organisation called Northcoders.
      </p>
      <p>
        Through completing this course, I solidified a robust foundation in both
        frontend and backend web development, gaining hands-on experience with
        the latest industry practices and technologies.
      </p>
      <p>
        Now equipped with a comprehensive skill set and a desire for growth, I
        am excited to embark on the next chapter of my journey through
        professional roles, freelance work, or collaborative projects.
      </p>
      <div>
        <a href="#skills">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-yellow-500 to-orange-600 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 font-medium rounded-lg px-6 py-3 text-center mb-8"
          >
            Skills ↓
          </button>
        </a>
      </div>
    </section>
  );
};
