import React from "react";
import { skills } from "../data";
import { FiCpu, FiCheck } from "react-icons/fi"

export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto bg-[#fafafa]">
                <div className="text-center mb-10">
                    <FiCpu className="w-10 inline-block mb-4 text-2xl" />
                    {/* <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
                        Skills &amp; Technologies
                    </h1> */}
                    <h1 className='text-4xl font-bold inline border-b-4 text-black border-[#418aff]'>
                        Skills{/*  &amp; Technologies */}
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mt-10">
                        I enjoy diving into and learning new things. Here's a list of technologies I've worked with
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                            <div className=" bg-[#555fdc]  rounded-lg flex p-4 h-full items-center">
                                <FiCheck className=" w-8 text-black font-blod text-center inline-flex justify-center items-center" />
                                <span className="title-font font-medium text-white ">
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}