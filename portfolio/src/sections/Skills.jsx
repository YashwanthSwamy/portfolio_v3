import React from 'react'
import { skills, education } from "../constants";

const Skills = () => {
    return (
        <section className="min-h-screen w-full flex flex-col relative bg-slate-100" id="skills">
            <div className='w-full mx-auto flex flex-col c-space gap-3'>
                <div className="py-10 flex flex-col">
                    <h3 className="text-xl  sm:text-2xl text-slate-600 font-bold font-generalsans"> My Skills</h3>
                    <div className="mt-16 flex flex-wrap gap-12 sm:items-center sm:justify-center sm:pr-10">
                        {skills.map((skill, index) => (
                            <div className="block-container w-24 h-20 " key={`${skill}-${index}`}>
                                <div className="btn-back rounded-xl" />
                                <div className="btn-front rounded-xl justify-center items-center flex flex-col ">
                                    <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
                                    <p className='text-sm'>{skill.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-xl  sm:text-2xl text-slate-600 font-bold font-generalsans"> Education</h3>
                </div>
                <div className="flex flex-wrap my-4 gap-16">
                    {education.map((education, index) => (
                        <div className=" w-full flex flex-row gap-12 mt-4" key={`${education.university}-${index}`}>
                            <div className="block-container w-12 h-12">
                                <div className={`btn-back-orange rounded-xl ${education.theme}`} />
                                <div className="btn-front rounded-xl flex justify-center items-center">
                                    <img src={education.iconUrl} alt="project-icon" className="w-3/4 h-3/4 object-contain" />
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <h4 className="text-2xl font-poppins font-semibold">
                                    {education.name}
                                </h4>
                                <p className='text-blue-500'> {education.date}</p>
                                <div className='flex flex-row items-center gap-8'>
                                    <p className="mt-1 text-slate-500">
                                        {education.university} - <span className='font-poppins font-semibold'>{education.gpa}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills