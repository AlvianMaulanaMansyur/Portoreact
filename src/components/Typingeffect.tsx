import { TypeAnimation  } from "react-type-animation";

export default function Typingeffect() {
    return (
        <h1 className="text-2xl">
            I'm a {' '}
            <span className="text-cyan-400 ">
                <TypeAnimation
                 sequence={[
                    'Freelancer',
                    3000,
                    'Fullstack Developer',
                    3000,
                    'Web Designer',
                    3000,
                 ]}
                 wrapper="span"
                 speed={50}
                 deletionSpeed={40}
                 repeat={Infinity}
                 cursor={true}
                 />
            </span>
        </h1>
    );
}