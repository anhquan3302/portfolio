import React from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-10 px-10 py-20">
      {/* Form liên hệ (bên trái) */}
      <div className="w-full lg:w-1/2">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 1, y: -100 }}
          transition={{ duration: 0.5 }}
          className='my-20 text-center text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-while drop-shadow-md'
        >
          CONTACT
        </motion.h2>
        <div className="tracking-tighter">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 1, x: -100 }}
            transition={{ duration: 1 }}
            className="my-4"
          >
            {CONTACT.address}
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 1, x: -100 }}
            transition={{ duration: 1 }}
            className="my-4"
          >
            {CONTACT.phoneNo}
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 1, x: -100 }}
            transition={{ duration: 1 }}
            className="my-4"
          >
            {CONTACT.email}
          </motion.p>
          {/* Có thể thêm form input tại đây */}
        </div>
      </div>

      {/* Spline Viewer (bên phải) */}
      <div className="w-full lg:w-1/2 h-[400px] rounded-2xl overflow-hidden shadow-lg">
        <spline-viewer
          url="https://prod.spline.design/xthIqYSwEfQ3wUPU/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        ></spline-viewer>
      </div>
    </div>
  );
};

export default Contact;
