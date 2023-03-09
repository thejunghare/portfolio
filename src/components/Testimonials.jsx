import React from "react";
import { FiUser, FiCheck } from "react-icons/fi"
import { testimonials } from "../data";

export default function Testimonials() {
    return (
        <section id="testimonials">
            <div className="container px-5 py-10 mx-auto text-center bg-[#ffffff]">
                <FiUser className="w-10 inline-block mb-4 text-2xl" />
                {/* <h1 className="sm:text-4xl text-3xl font-medium title-font text-black  border-b-4 mb-12 border-[#418aff]">
                    Client Testimonials
                </h1> */}
                <h1 className='text-4xl font-bold inline border-b-4 text-black border-[#418aff]'>
                     Testimonials
                </h1>
                <div className="flex flex-wrap m-4">
                    {testimonials.map((testimonial) => (
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-[#1f2937]  p-8 rounded">
                                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                                <div className="inline-flex items-center">
                                    <img
                                        alt="testimonial"
                                        src={testimonial.image}
                                        className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                                    />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-white">
                                            {testimonial.name}
                                        </span>
                                        <span className="text-gray-500 text-sm uppercase">
                                            {testimonial.company}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}