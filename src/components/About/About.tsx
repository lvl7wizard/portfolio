export const About = () => {
  return (
    <section
      className="flex flex-col min-h-screen mx-auto max-w-xl p-4 items-center justify-center text-center content-center text-md text-white gap-5 md:gap-10"
      id="about"
    >
      <h2 className="text-8xl font-bold text-blue-400 text-shadow-3d-blue">
        About
      </h2>
      <p>
        🚀 My journey into coding began as a hobby in 2020, driven by a passion for
        creation, problem-solving, and continuous learning.
      </p>
      <p>
        🎓 In March 2024, I graduated from a 13-week full-time Software Engineering
        bootcamp at Northcoders where I solidified my understanding of front-end and back-end web technologies.
      </p>
      <p>
        🌱 I'm now excited to utilise and continue to develop my skills as I begin my career as a Junior Developer.
      </p>
      <div>
        <a href="#skills">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-yellow-500 to-orange-600 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 font-medium rounded-lg px-6 py-3 text-center mb-8 transform motion-safe:hover:scale-110"
            aria-label="Navigate to Skills section"
          >
            Skills ↓
          </button>
        </a>
      </div>
    </section>
  );
};