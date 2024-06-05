export const Home = () => {
  return (
    <section className="flex flex-col min-h-screen mx-5vw items-center justify-center text-center content-center text-1xl text-white gap-5">
      <h1 className="text-9xl font-bold text-blue-400 text-shadow-3d-blue">
        Hi,
      </h1>
      <p>
        I'm Dave, a Junior Software Developer based in Sheffield, UK. Welcome to
        my portfolio site, here you can find information about my skills and a showcase of my
        latest projects.
      </p>

      <a href="#about">
      <button type="button" className="text-white bg-gradient-to-r from-yellow-500 to-orange-600 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">About ↓</button>
      </a>
    </section>
  );
};
