import React from 'react'
import profilePic from '../assets/anhquan.jpg'
import { motion } from "framer-motion"
import { stagger } from 'framer-motion/dom'

const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5
        }
    }
}
const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        }
    }
}
const Hero = () => {
    return (
        <div className='pb-4 lg:mb-36'>
            <div className='flex flex-col lg:flex-row-reverse items-center justify-between'>
                {/* Image bên phải */}
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:p-8'>
                        <motion.img src={profilePic} alt='Ravi Kumar' className='border border-stone-900 rounded-3xl'
                            width={650}
                            height={650}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 }} />
                    </div>
                </div>

                {/* Nội dung bên trái */}
                <div className='w-full lg:w-1/2 flex flex-col items-start mt-10 px-4 text-left max-w-xl'>
                    <motion.div
                        initial='hidden'
                        animate='visible'
                        variants={containerVariants}>
                        <motion.h2  variants={childVariants}
                        className='pb-2 text-4xl tracking-tighter lg:text-8xl'>Anh Quan</motion.h2>

                        <motion.span  variants={childVariants} className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'>
                            Full Stack Developer
                        </motion.span>

                        <motion.p variants={childVariants} className='my-4 py-4 text-xl leading-relaxed tracking-tight'>
                            Backend Developer with hands-on experience in Spring Boot and Java, seeking to leverage my technical skills
                            in building scalable, high-performance applications. Passionate about clean code principles and delivering
                            efficient solutions that address business challenges. Committed to continuous learning and contributing to
                            innovative projects that enhance user experiences.
                        </motion.p>

                        <motion.a
                            variants={childVariants}
                            href='https://www.canva.com/design/DAGi7lrzlV0/_O9TuCary67x_-iPLJ1ERA/edit?utm_content=DAGi7lrzlV0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
                            target='_blank'
                            rel='noopener noreferrer'
                            download
                            className='bg-white rounded-full px-6 py-3 text-sm text-stone-800 mb-10 shadow hover:shadow-lg transition'
                        >
                            Download Resume
                        </motion.a>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default Hero
