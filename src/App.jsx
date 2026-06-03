function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-gray-900 sticky top-0">
        <h1 className="text-3xl font-bold text-blue-400">
          Jakkula Ajay
        </h1>

        <ul className="flex gap-6 text-lg">
          <li className="hover:text-blue-400 cursor-pointer">
            About
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            Skills
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            Projects
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            Contact
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">

        <h1 className="text-6xl font-bold mb-6">
          Hi, I'm Ajay
        </h1>

        <p className="text-2xl text-gray-400 mb-8">
          React Native & Frontend Developer
        </p>

        <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-xl text-lg">
          Download Resume
        </button>
      </section>

      {/* About */}
      <section className="px-10 py-20 max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-6 text-blue-400">
          About Me
        </h2>

        <p className="text-gray-300 text-lg leading-8">
          I am a passionate developer skilled in React,
          React Native, JavaScript, Java, CSS, HTML and Python.
          Currently working as a React Native Developer Intern
          and interested in building modern mobile and web applications.
        </p>
      </section>

      {/* Skills */}
      <section className="px-10 py-20 bg-gray-900">

        <h2 className="text-4xl font-bold mb-10 text-center text-blue-400">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-6">

          {[
            "React",
            "React Native",
            "JavaScript",
            "Java",
            "Python",
            "HTML",
            "CSS",
            "GitHub",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-black border border-gray-700 px-8 py-4 rounded-xl text-lg hover:border-blue-400"
            >
              {skill}
            </div>
          ))}

        </div>
      </section>

      {/* Projects */}
      <section className="px-10 py-20">

        <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          <div className="bg-gray-900 p-8 rounded-2xl hover:scale-105 duration-300">
            <h3 className="text-2xl font-semibold mb-4">
              VenueTech App
            </h3>

            <p className="text-gray-400 leading-7">
              Built using React Native for venue and event management
              with responsive UI and authentication features.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl hover:scale-105 duration-300">
            <h3 className="text-2xl font-semibold mb-4">
              Portfolio Website
            </h3>

            <p className="text-gray-400 leading-7">
              Personal responsive portfolio website built using
              React and Tailwind CSS.
            </p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-900 py-20 text-center">

        <h2 className="text-4xl font-bold mb-8 text-blue-400">
          Contact Me
        </h2>

        <div className="space-y-4 text-lg text-gray-300">
          <p>Email: jakkulaajay199@gmail.com</p>
          <p>GitHub: https://github.com/</p>
          <p>LinkedIn: https://www.linkedin.com/in/jakkula-ajay-0545272b8</p>
        </div>

      </section>

    </div>
  )
}

export default App