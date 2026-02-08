export const Home = () => {
  return (
    <section className="flex flex-col min-h-screen mx-auto max-w-xl p-4 items-center justify-center text-center content-center text-md text-white gap-5 md:gap-10">
      <h1 className="text-9xl font-bold text-blue-400 text-shadow-3d-blue">
        Hi,
      </h1>
      <p>
        I'm Dave, a Software Engineer based in Sheffield, UK. Welcome to
        my portfolio, here you can find information about me, my skills and my
        latest projects.
      </p>

      <a href="#about">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-yellow-500 to-orange-600 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 transform motion-safe:hover:scale-110"
        >
          About ↓
        </button>{" "}
      </a>
    </section>
  );
};
