import { MdOutlineMailOutline } from 'react-icons/md';
import { CiPhone } from 'react-icons/ci';

function Footer() {
  return (
    <div className="bg-[#070F2B] absolute left-0 w-full h-auto " id='contact'>
      <div className="max-w-5xl flex flex-col mx-auto  items-center lg:py-10 gap-5">
        <div className="flex flex-col text-white justify-center items-center pt-10 lg:gap-4">
          <p className="font-bold lg:text-2xl">CONTACT</p>
          <p className="font-extrabold lg:text-4xl">Interested Work With Me?</p>
        </div>
        <div className="flex flex-col md:flex-row  text-white py-10 justify-center lg:justify-between gap-5">
          <div className="flex justify-center items-center">
            <MdOutlineMailOutline className="text-4xl" />
            <p>alvianmaulana0704@gmail.com</p>
          </div>
          <div className="flex items-center">
            <CiPhone className="text-4xl" />
            <p>+62 8124 675 5645</p>
          </div>
        </div>

        <div className="flex flex-col text-white justify-center gap-2 mb-10">
          <a href="https://www.linkedin.com/in/alvian-maulana-mansyur/" target="_blank" className="flex items-center">
            <i className="fa-brands fa-linkedin me-3 text-3xl" />
            <p>www.linkedin.com/in/alvian-maulana-mansyur</p>
          </a>
          <a href="https://github.com/AlvianMaulanaMansyur" target="_blank" className="flex items-center">
            <i className="fa-brands fa-github me-3 text-3xl" />
            <p>www.github.com/AlvianMaulanaMansyur</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
