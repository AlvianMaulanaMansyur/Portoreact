import MainButton from './MainButton';

function About() {
  return (
    <div className="bg-[#E8E8E8] relative py-5 lg:py-10  rounded-4xl left-0 w-full " id="about">
      <div className="flex flex-col max-w-5xl mx-auto items-center justify-center mt-5">
        <p className="text-xl font-semibold">Get To Know More </p>
        <p className="text-[2.5rem] font-bold">ABOUT ME!</p>
      </div>
      <div className="container mx-auto lg:px-20 flex flex-col lg:flex-row items-center justify-center md:mt-10 ">
        <div className="aspect-square w-62 lg:w-90 rounded-4xl lg:mb-20 lg:rounded-[110px] overflow-hidden ">
          <img src="images/about.jpg" loading="lazy" alt="AboutPhoto" className="object-cover  w-full h-full" style={{ objectPosition: 'center 25%' }} />
        </div>
        <div className="flex flex-col mx-10  lg:mt-0 mt-5 gap-5">
          <div className="max-w-xl lg:ms-10 text-lg text-justify  ">
              <p>
                I am a passionate individual in the field of web development, equipped with strong skills in several programming languages such as PHP and JavaScript. My capabilities are proven through the completion of several complex projects. I stay up-to-date with
                the latest technologies in the programming world, as reflected in the modern frameworks I’ve used throughout my development journey.
              </p>
              <p> Additionally, I possess good communication skills, which are valuable when working in a team environment. I am currently a freelance student and looking forward to the opportunity to work with you!</p>
            
          </div>
          <div className="flex mt-5 gap-4 lg:mx-10 mb-10 lg:mb-0">
            <MainButton label="Email Me!" onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=alvianmaulana0704@gmail.com&su=Hello&body=I%20would%20like%20to%20connect!', '_blank')} variant="primary" className="font-bold" />
            <div className="text-3xl mt-2">
              <a href="https://www.linkedin.com/in/alvian-maulana-mansyur/" target="_blank">
                <i className="fa-brands fa-linkedin me-3" />
              </a>
              <a href="https://github.com/AlvianMaulanaMansyur" target="_blank">
                <i className="fa-brands fa-github " style={{ color: '#fff;' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
