import React from 'react'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer className='bg-slate-900 h-60 p-5'>
      <div className='flex items-center gap-x-8 mb-4'>
        <hr className='border-1 border-slate-200 w-full' />
        <div>
          <a href="https://github.com/BeMora11" target='_blank' rel="noreferrer">
            <div className='icon'>
              <i className="fa-brands fa-github text-lg"></i>
            </div>
          </a>
        </div>
        <hr className='border-1 border-slate-200 w-full' />
      </div>
      <div className='flex flex-col items-center gap-4'>
        <h5 className='text-slate-200 text-lg font-medium'>
          <FontAwesomeIcon className='mr-2' icon={faEnvelope} />
          dronemaxis_935@outlook.com
        </h5>
        <h5 className='text-slate-200 text-lg font-medium'>
          <FontAwesomeIcon className='mr-2' icon={faPhone} />
          312 189 9296
        </h5>
        <h5 className='text-slate-200 text-lg font-medium text-center'>
          Copyright &copy; {new Date().getFullYear()} Todos los derechos reservados.
        </h5>
      </div>
    </footer>
  )
}

export default Footer