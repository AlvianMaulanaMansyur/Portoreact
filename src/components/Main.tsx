import MainButton from './MainButton';
import Typingeffect from './Typingeffect';

import '@fortawesome/fontawesome-free/css/all.min.css';

function Main() {
  return (
    <main>
      <div className="flex flex-col-reverse  mt-20 max-w-xs md:max-w-5xl md:flex-row  mx-auto justify-between">
        <div className="text-white font-extrabold">
          <p className="text-xs md:text-md mb-5">Hi, my name is </p>
          <p className="text-2xl md:text-6xl mb-2">
            AL<span className="text-cyan-300">VIAN</span> <br /> MAULANA
          </p>
          <Typingeffect />
          <div className="flex gap-4 mt-5">
            <MainButton label="Contact Me!" onClick={() => console.log('halo')} variant="primary" />
            <MainButton label="Download CV" onClick={() => console.log('halo')} variant="secondary" />
          </div>
          <div className="flex text-4xl gap-2 mt-5">
            <a href="#" target="_blank">
              <i className="fa-brands fa-linkedin me-3" />
            </a>
            <a href="#" target="_blank">
              <i className="fa-brands fa-github " style={{ color: '#fff;' }} />
            </a>
          </div>
        </div>

        {/* ====== foto ====== */}
        <div className="relative w-64 h-64 mb-10 md:w-90 md:h-90 mt-5 md:mt-0 mx-auto ">
          <div className="absolute inset-0 rounded-full border-4 border-purple-600"></div>
          <div className="absolute inset-5 rounded-full overflow-hidden z-10 border-4 border-gray-700">
            <img
              src="images/fotoDiri.jpg"
              alt="Profile"
              className="object-cover object-bottom w-full h-full"
              style={{ objectPosition: 'center 40%' }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
