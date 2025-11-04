

const About = () => {
      return (
            <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-blue-600">
           About Me
        </h1>
        <p className="text-center text-gray-600 mt-1">Student & Web Developer</p>

        {/* Intro Section */}
        <div className="mt-6 text-gray-700 leading-7">
          <p>
            Hi! I’m <span className="font-semibold text-blue-600">Abu Tahir Sk</span>, a passionate web developer exploring the world of modern web technologies. I enjoy creating clean, responsive, and user-friendly web applications.
          </p>

          <p className="mt-3">
            This project, <span className="font-semibold text-blue-600">Discount Pro</span>, is a coupon collecting platform that helps users find active discount coupons from popular Bangladeshi brands and save money while shopping.
          </p>
        </div>

        {/* Skills */}
        <h2 className="text-2xl font-semibold mt-8 text-gray-800"> Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3 text-gray-700">
          <li> HTML, CSS, Tailwind CSS</li>
          <li> JavaScript (ES6+)</li>
          <li> React & React Router</li>
          <li> Firebase Auth</li>
          <li> Git & GitHub</li>
          <li> API Integration</li>
        </ul>

        {/* Projects */}
        <h2 className="text-2xl font-semibold mt-8 text-gray-800">Projects</h2>
        <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-1">
          <li>Coupon Collecting Web App (This Project)</li>
        </ul>

        {/* Contact */}
        <h2 className="text-2xl font-semibold mt-8 text-gray-800"> Contact Me</h2>
        <div className="mt-3 text-gray-700 space-y-1">
          <p>Email: <a className="text-blue-600 font-semibold" href="mailto:youremail@gmail.com">abutahir2626@gmail.com</a></p>
          <p>GitHub: <a className="text-blue-600 font-semibold" href="https://github.com/abu-tahir-sk" target="_blank">abu-tahir-sk</a></p>
          <p>LinkedIn: <a className="text-blue-600 font-semibold" href="https://www.linkedin.com/in/abu-tahir-sk-739036352/" target="_blank">abu-tahir-sk</a></p>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-8">
          © {new Date().getFullYear()} Abu Tahir Sk. All Rights Reserved.
        </p>
      </div>
    </div>
      );
};

export default About;