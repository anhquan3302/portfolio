import React from 'react'
import { BiLogoSpringBoot } from 'react-icons/bi'
import { DiMsqlServer, DiMysql } from 'react-icons/di'
import { FaHtml5 } from 'react-icons/fa'
import { FaSquareGithub } from 'react-icons/fa6'
import { IoLogoCss3 } from 'react-icons/io'
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiCashapp, SiDotnet, SiMongodb, SiMysql, SiSpringboot } from 'react-icons/si'
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: { y: [10, -10] },
    transition: {
        duration: duration,
        else: 'linear',
        repeat: Infinity,
        repeatType: 'reverse',
    }
});

const Technologies = () => {
    const techs = [
        { icon: <RiReactjsLine className='text-7xl text-cyan-400' />, label: 'ReactJS' },
        { icon: <FaHtml5 className='text-7xl text-orange-500' />, label: 'HTML' },
        { icon: <IoLogoCss3 className='text-7xl text-yellow-500' />, label: 'CSS' },
        { icon: <RiTailwindCssFill className='text-7xl text-cyan-500' />, label: 'Tailwind' },
        { icon: <SiSpringboot className='text-7xl text-green-400' />, label: 'Spring Boot' },
        { icon: <SiDotnet className='text-7xl text-violet-500' />, label: '.NET' },
        { icon: <SiMysql className='text-7xl text-cyan-400' />, label: 'MySQL' },
        { icon: <DiMsqlServer className='text-7xl text-red-500' />, label: 'SQL Server' },
        { icon: <SiMongodb className='text-7xl text-green-500' />, label: 'MongoDB' },
        { icon: <FaSquareGithub className='text-7xl text-black-500' />, label: 'Github' },

    ]

    return (
        <div className='pb-24'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-while drop-shadow-md'
            >
                TECHNOLOGIES
            </motion.h2>

            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 1, y: -100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-10'>
                {techs.map((tech, index) => (
                    <motion.div key={index} initial='initial'
                        animate='animate'
                        variants={iconVariants(2.5)}
                        className='flex flex-col items-center p-4'>
                        {tech.icon}
                        <span className='mt-2 text-lg font-medium'>{tech.label}</span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Technologies
