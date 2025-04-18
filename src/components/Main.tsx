import About from './About';
import MainButton from './MainButton';
import Project from './Project';

import TechStack from './TechStack';
import Typingeffect from './Typingeffect';

import '@fortawesome/fontawesome-free/css/all.min.css';

function Main() {
  return (
    <main>
      <div className="flex flex-col-reverse mb-10 lg:mb-2 mt-20 max-w-lg lg:max-w-5xl lg:flex-row  mx-auto justify-between gap-10 lg:h-screen lg:mt-0  items-center" id="home">
        <div className="text-white font-extrabold ">
          <p className="text-xl mb-5">Hi, my name is </p>

          <p className="text-7xl mb-2">
            AL<span className="text-cyan-300">VIAN</span> <br /> MAULANA
          </p>
          <Typingeffect />
          <div className="flex justify-center lg:justify-start gap-4 mt-5">
            <MainButton
              label="Contact Me!"
              onClick={() => {
                window.open('https://mail.google.com/mail/?view=cm&fs=1&to=alvianmaulana0704@gmail.com&su=Hello&body=I%20would%20like%20to%20connect!', '_blank');
              }}
              variant="primary"
            />
            <MainButton
              label="Download CV"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/cv/CV-AlvianMaulanaMansyur.pdf'; // path relatif dari folder public
                link.download = 'CV-AlvianMaulanaMansyur.pdf'; // nama file saat diunduh
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              variant="secondary"
            />
          </div>
          <div className="flex justify-center lg:justify-start text-4xl gap-2 mt-5 text-white">
            <a href="https://www.linkedin.com/in/alvian-maulana-mansyur/" target="_blank">
              <i className="fa-brands fa-linkedin me-3" />
            </a>
            <a href="https://github.com/AlvianMaulanaMansyur" target="_blank">
              <i className="fa-brands fa-github " style={{ color: '#fff;' }} />
            </a>
          </div>
        </div>

        {/* ====== foto ====== */}
        <div className="relative w-84 h-84 mb-10 md:w-90 md:h-90 mt-5 md:mt-0 mx-auto lg:mx-0 ">
          <div className="absolute inset-0 rounded-full border-7 border-purple-600 animate-pulse" />
          <div className="absolute inset-5 rounded-full overflow-hidden z-10 border-4 border-gray-700">
            <img src="images/fotoDiri.jpg" alt="Profile" className="object-cover object-bottom w-full h-full" style={{ objectPosition: 'center 40%' }} />
          </div>
        </div>
      </div>
      <About />
      <div className="">
        <TechStack />
      </div>
      <Project />
    </main>
  );
}

export default Main;
