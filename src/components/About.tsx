import MainButton from './MainButton';

function About() {
  return (
    <div className="bg-[#E8E8E8] absolute left-0 w-full lg:h-screen ">
      <div className="flex flex-col max-w-5xl mx-auto items-center justify-center mt-10">
        <p className="text-xl font-semibold">Get To Know More </p>
        <p className="text-[2.5rem] font-bold">ABOUT ME!</p>
      </div>
      <div className="container mx-auto lg:px-20 flex flex-col lg:flex-row items-center justify-center md:mt-10 gap-5">
        <div className="aspect-square w-62 xl:w-72 rounded-4xl lg:rounded-[120px] overflow-hidden ">
          <img src="images/about.jpg" alt="AboutPhoto" className="object-cover  w-full h-full" style={{ objectPosition: 'center 25%' }} />
        </div>
        <div className="flex flex-col mx-10  lg:mt-0 mt-5 gap-5">
          <div className="max-w-xl lg:ms-10 text-lg text-justify  ">
            <p>
              I am a passionate individual in the field of web development, equipped with strong skills in several programming languages
              such as PHP and JavaScript. My capabilities are proven through the completion of several complex projects. I stay up-to-date
              with the latest technologies in the programming world, as reflected in the modern frameworks I’ve used throughout my
              development journey. 
              </p>
              <p> Additionally, I possess good communication skills, which are valuable when working in a team environment.
              I am currently a freelance student and looking forward to the opportunity to work with you!
            </p>
          </div>
          <div className="flex mt-5 gap-4 lg:mx-10 mb-10 lg:mb-0">
            <MainButton label="Email Me!" onClick={() => console.log('halo')} variant="primary" className="font-bold" />
            <div className="text-3xl mt-2">
              <a href="#" target="_blank">
                <i className="fa-brands fa-linkedin me-3" />
              </a>
              <a href="#" target="_blank">
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
