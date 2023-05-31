import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id='header'
      className='flex flex-col items-center justify-center relative mb-8 px-8'
      style={{ height: 600 }}
    >
      <h4 className='text-3xl font-semibold text-blue-200 mb-6 text-center'>Hola soy Erik, soy desarrollador web, y estoy aqui para crear tus sitios y aplicaciones a tu medida.</h4>
      <a href='#aboutMe' className='btn-lg btnPrimary shadow-md'>
        <FontAwesomeIcon icon={faArrowDown} className='mr-2 animate-bounce' />
        Ver más
      </a>
    </motion.header>
  )
}

export default Header