import React from 'react'
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <div className='pb-4'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-while drop-shadow-md'>
                PROJECTS
            </motion.h2>
            <div className='mt-24'>
                {PROJECTS.map((project, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, y: -100 }}
                            transition={{ duration: 1 }}
                            className='w-full mt-14 lg:w-1/4 mb-6 lg:mb-0'>
                            <img src={project.image}
                                width={250}
                                height={250}
                                alt={project.title}
                                className='mb-4 rounded' />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className='w-full max-w-xl lg:w-3/4'>
                            <h3 className='mb-2 font-semibold text-2xl'>{project.title}</h3>
                            <p className='mb-4 text-stone-400'>{project.description}</p>
                            <div className='flex flex-wrap'>
                                {project.technologies.map((tech, index) => (
                                    <span
                                        className='mr-2 mb-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'
                                        key={index}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;
