import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaJava, FaHtml5, FaGitAlt } from "react-icons/fa";
import {  SiJavascript, SiTailwindcss,} from "react-icons/si";


function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-gray-900 sticky top-0">
        <h1 className="text-3xl font-bold text-blue-400">
          Jakkula Ajay
        </h1>

        <ul className="flex gap-6 text-lg">
          <li>
            <a 
              href="#about" 
              className="hover:text-blue-400 cursor-pointer"
            >
              About
            </a>
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
           <a
            href="#skills"
            className="hover:text-blue-400 cursor-pointer"
           >
            Skills
          </a>
          </li>
          <li className="hover:text-blue-400 cursor-pointer">
           <a
            href="#experience"
            className="hover:text-blue-400 cursor-pointer"
           >
            Experience
          </a>
          </li>


          <li className="hover:text-blue-400 cursor-pointer">
          <a 
           href="#projects"
           className="hover:text-blue-400 cursor-pointer"
          >
            Projects
          </a>
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            <a
            href="#contact"
            className="hover:text-blue-400 cursor-pointer"
            >
            Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">

        <h1 className="text-6xl font-bold mb-6">
         Hi, I'm Jakkula Ajay

        </h1>

        <p className="text-2xl text-gray-400 mb-8">
          React Native Developer | Frontend Developer
          </p>
          <p className="text-2xl text-gray-400 mb-8">

          Building modern mobile and web applications using React Native, React, JavaScript, and Firebase.
        </p>
        <img
          src="/profile.jpeg"
          alt="Ajay"
          className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-blue-500"
        />
      <a
        href="/Jakkula_Ajay_Resume.pdf"
        download
        className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-xl text-lg"
        >
          Download Resume
        </a>
        <div className="flex gap-6 mt-6 text-3xl">

  <a
    href="https://github.com/Jakkula-Ajay"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-400 duration-300"
  >
    <FaGithub />
  </a>

  <a
    href=" https://www.linkedin.com/in/jakkula-ajay-0545272b8"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-400 duration-300"
  >
    <FaLinkedin />
  </a>

  <a
    href="mailto:jakkulaajay199@gmail.com"
    className="hover:text-blue-400 duration-300"
  >
    <FaEnvelope />
  </a>

</div>
      </section>

      {/* About */}
      <section id="about" className="px-10 py-20 max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-6 text-blue-400">
          About Me
        </h2>

        <p className="text-gray-300 text-lg leading-8">
          React Native Developer Intern with experience building 
          mobile and web applications using React Native, React, 
          JavaScript, Firebase, and Java. Passionate about creating
          responsive, user-friendly applications and continuously 
          learning modern technologies. Currently seeking 
          opportunities to contribute to innovative development teams.
        </p>
      </section>

      {/* Skills */}
    <section id="skills" className="py-20 text-center">

  <h2 className="text-4xl font-bold text-blue-400 mb-10">
    Skills
  </h2>

  <div className="flex flex-wrap justify-center gap-10 text-6xl">

    <div className="hover:scale-110 duration-300">
      <FaReact />
      <p className="text-lg mt-2">React</p>
    </div>

    <div className="hover:scale-110 duration-300">
      <SiJavascript />
      <p className="text-lg mt-2">JavaScript</p>
    </div>

    <div className="hover:scale-110 duration-300">
      <SiTailwindcss />
      <p className="text-lg mt-2">Tailwind CSS</p>
    </div>
    <div className="hover:scale-110 duration-300">
      <SiTailwindcss />
      <p className="text-lg mt-2">CSS</p>
    </div>

       <div className="hover:scale-110 duration-300">
          <FaJava />
        <p className="text-lg mt-2">Java</p>
       </div>
        <div className="hover:scale-110 duration-300">
            <FaHtml5 />
            <p className="text-lg mt-2">HTML</p>
       </div>
       <div className="hover:scale-110 duration-300">
            <FaGitAlt />
            <p className="text-lg mt-2">Git</p>
       </div>
       <div className="hover:scale-110 duration-300">
            <FaGitAlt />
            <p className="text-lg mt-2">GitHub</p>
       </div>


        <div className="hover:scale-110 duration-300">  
         <FaReact />
         <p className="text-lg mt-2">React Native</p>
       </div>

       </div>

      </section>
      {/* Experience */}
      <section id="experience" className="px-10 py-20 max-w-5xl mx-auto">

  <h2 className="text-4xl font-bold mb-10 text-center text-blue-400">
    Experience
  </h2>

  <div className="bg-gray-900 p-8 rounded-2xl hover:scale-105 duration-300">

    <h3 className="text-2xl font-semibold">
      React Native Developer Intern
    </h3>
     <p className="text-blue-400 mt-2">
      CodeFacts IT Solutions Pvt Ltd
    </p>

    <p className="text-gray-500 mt-1">
      Feb 2026 – Present
    </p>

    <ul className="list-disc list-inside text-gray-300 mt-6 space-y-3 leading-7">
      <li>
        Developing cross-platform mobile applications using React Native.
      </li>

      <li>
        Building responsive and user-friendly UI components for Android and iOS applications.
      </li>

      <li>
        Integrating APIs and implementing application features based on business requirements.
      </li>

      <li>
        Working with JavaScript, React Native, Git, and GitHub for application development and version control.
      </li>
      <li>
        Collaborating with team members to debug issues and improve application performance.
      </li>
    </ul>
    </div>
    </section>

      
      {/* Projects */}
      <section id="projects" className="px-10 py-20">

        <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          <div className="bg-gray-900 p-8 rounded-2xl hover:scale-105 duration-300">
            <h3 className="text-2xl font-semibold mb-4">
              MiniGroceryDelivery App
            </h3>

            <p className="text-gray-400 leading-7">
              Developed a React Native grocery delivery application
              featuring OTP authentication, product search, category 
              filtering, cart management, and checkout functionality. 
              Integrated responsive UI components to provide a seamless 
              mobile shopping experience.
            </p>
            <div className="flex gap-4 mt-6">
              <a
              href="https://github.com/Jakkula-Ajay/MiniGroceryDeliveryApp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white duration-300"
              >
                GitHub
              </a>
              <a
              href="https://drive.google.com/file/d/1O5lGe7Wn9gh3Afp1HYe-7x0HrgFAB3c2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500 hover:bg-blue-500 px-4 py-2 rounded-lg text-white duration-300"
              >
                Demo Video
              </a>
          </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl hover:scale-105 duration-300">
            <h3 className="text-2xl font-semibold mb-4">
              Portfolio Website
            </h3>

            <p className="text-gray-400 leading-7">
              Personal responsive portfolio website built using
              React and Tailwind CSS.
            </p>
            <div className="flex gap-4 mt-6">
              <a
              href="https://github.com/Jakkula-Ajay/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white duration-300"
              >
                GitHub
              </a>
              <a
              href="https://portfolio-three-cyan-bx18yi23hm.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500 hover:bg-blue-500 px-4 py-2 rounded-lg text-white duration-300"
              >
                Live Demo
              </a>
          </div>
          </div>
      

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-900 py-20 text-center">

        <h2 className="text-4xl font-bold mb-8 text-blue-400">
          Contact Me
        </h2>

        <div className="space-y-4 text-lg">
         <a
           href="mailto:jakkulaajay199@gmail.com"
           className="block text-gray-300 hover:text-blue-400 duration-300"
          >
           📧 Mail: jakkulaajay199@gmail.com
         </a>
         <a
          href="https://github.com/Jakkula-Ajay"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-gray-300 hover:text-blue-400 duration-300"
         >
          💻 GitHub: github.com/Jakkula-Ajay
        </a>
        <a
        href="LinkedIn: https://www.linkedin.com/in/jakkula-ajay-0545272b8"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-gray-300 hover:text-blue-400 duration-300"
        >
         🔗 LinkedIn: linkedin.com/in/jakkula-ajay-0545272b8
        </a>
        </div>

      </section>

    </div>
  )
}

export default App