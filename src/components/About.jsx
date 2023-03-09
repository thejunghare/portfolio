import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import me from '../public/me.jpeg';

const About = () => {
    return (
        <div
            name="home"
            className="h-screen w-full  bg-[radial-gradient(_circle_farthest-corner_at_12.3%_19.3%,rgba(85,88,218,1)_0%,rgba(95,209,249,1)_100.2%_)]"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center items-center h-full ">
                    <h2 className="text-4xl  max-sm:text-center font-bold text-black">
                        I'm a Front End Web Developer
                    </h2>
                    <p className="text-black py-4 max-w-md text-center">
                        I have 1 years of experience in front end design and web development.
                        Currently, I love to work on web application using technologies like
                        React, Tailwind, React Native and WordPress.
                    </p>
                    <div className='max-sm:flex max-sm:justify-center max-sm:items-center'>
                        <a
                            to="about"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex sm:justify-center sm:items-center rounded-md  bg-[#555fdc] cursor-pointer"
                            href='#contact'
                        >
                            Let's Collaborate
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight size={25} className="ml-3" />
                            </span>
                        </a>
                    </div>
                </div>
                {/* <div>
                    <img
                        src={me}
                        alt="my profile"
                        className="rounded-2xl mx-auto w-2/3 md:w-full"
                    />
                </div> */}
            </div>
        </div>
    );
};
export default About;