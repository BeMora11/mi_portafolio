import React from 'react'
import { faArrowDown, faCaretUp, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import image from './../../assets/img/developer.png';
import Card from '../components/Card';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className='bg-slate-900 overflow-x-hidden'>
      <motion.header
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        id='header'
        className='h-96 flex flex-col items-center justify-center relative mb-8 px-8'
      >
        <h4 className='text-3xl font-semibold text-blue-200 mb-6 text-center'>Hola soy Erik, soy desarrollador web, y estoy aqui para crear tus sitios y aplicaciones a tu medida.</h4>
        <a href='#aboutMe' className='btn-lg btnPrimary shadow-md'>
          <FontAwesomeIcon icon={faArrowDown} className='mr-2 animate-bounce' />
          Ver más
        </a>
      </motion.header>

      <div className="grid grid-cols-12 gap-5 p-4 mb-5">
        <motion.div initial={{ opacity: 0, x: 400 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className='col-span-12 bg-transparent p-5' id='aboutMe'>
          <h4 className='title text-center mb-8'>Sobre mi</h4>
          <div className='h-40 w-40 mx-auto ring-2 ring-slate-200 ring-offset-4 ring-offset-slate-900 rounded-full mb-8'>
            <img src={image} alt="Developer" />
          </div>
          <p className='text'>
            Mi nombre es Erik, estudié la carrera de Ingeniería en Sistemas Computacionales. Siempre me ha llamado la atención el campo del software, por lo que durante mi etapa como estudiante universitario me incliné más hacia el desarrollo. Creo que uno de los factores que más me impulsó a desarrollar mis habilidades fue la época de pandemia, durante la cual decidí invertir la mayor cantidad de tiempo posible en tomar cursos de desarrollo web, tanto en Front-end como en Back-end, así como bases de datos.
            <br /><br />
            Siempre estoy entusiasmado y abierto a aprender cosas nuevas para ampliar mis conocimientos en mi profesión. Me gustan los retos y alcanzar mis objetivos para lograr completarlos.
            <br /><br />
            En mis tiempos libres me gusta jugar videojuegos, disfrutar del atardecer en la playa, practicar skateboarding, me gusta pasar tiempo con mi novia y mi familia. También me encanta viajar y conocer nuevos lugares. ¡Es emocionante ir a un lugar desconocido!!!
          </p>
        </motion.div>
        <motion.h4 initial={{ opacity: 0, x: -400 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className='col-span-12 text-center title mb-5'>Mis experiencias</motion.h4>
        <motion.div className='col-span-4' initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} >
          <Card className='bg-slate-900 shadow-slate-500 h-full'>
            <h4 className='subtitle text-center mb-5'>Blog Camaleón</h4>
            <p className='text'>
              En este proyecto trabajé en conjunto con un amigo para una persona que deseaba que su sitio web fuera más dinámico. Trabajamos en reestructurar su diseño y añadimos funcionalidades como un panel de administrador, inicio de sesión y conexión a una base de datos. Estas mejoras permitieron el registro de usuarios y que el administrador pudiera subir contenido, como publicaciones sobre diversos temas. Además, los usuarios tuvieron la capacidad de comentar esas publicaciones e interactuar con ellas.
            </p>
            <h4 className='text-gray-200 font-medium mt-4'>Tecnologias utilizadas</h4>
            <div className='mt-4 flex items-center gap-3 flex-wrap'>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>HTML</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>CSS</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>JavaScript</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>Bootstrap</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>PHP</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>MySQL</span>
            </div>
          </Card>
        </motion.div>
        <motion.div className='col-span-4' initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} >
          <Card className='bg-slate-900 shadow-slate-500 h-full'>
            <h4 className='subtitle text-center mb-5'>DIF (Servicio social)</h4>
            <p className='text'>
              Mi servicio social consistió en apoyar al DIF en colaboración con un amigo para crear un sistema de digitalización de citas diarias con las personas. El objetivo era registrar datos de los beneficiarios, dar seguimiento a sus casos y mantener expedientes actualizados. Implementamos cinco roles distintos: administrador, psicología, área médica, área jurídica y trabajo social, cada uno con menús y formularios específicos para completar.
              <br /><br />
              Además, añadimos la funcionalidad de generar un PDF de las citas registradas, con el fin de optimizar y digitalizar los procesos de trabajo. Es importante mencionar que el personal quedó satisfecho con este proyecto.
            </p>
            <h4 className='text-gray-200 font-medium mt-4'>Tecnologias utilizadas</h4>
            <div className='mt-4 flex items-center gap-3 flex-wrap'>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>HTML</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>CSS</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>JavaScript</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>Bootstrap</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>PHP</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>MySQL</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>DomPDF</span>
            </div>
          </Card>
        </motion.div>
        <motion.div className='col-span-4' initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} >
          <Card className='bg-slate-900 shadow-slate-500 h-full'>
            <h4 className='subtitle text-center mb-5'>CAPDAM (Practicas profesionales)</h4>
            <p className='text'>
              Mis prácticas profesionales las realicé en CAPDAM. Se me asignó un proyecto desde cero, el cual consistía en desarrollar un sistema con 3 roles para solicitar el servicio de agua. A través de un formulario, el cliente debía completar sus datos de dirección y subir archivos relevantes.
              <br /><br />
              Después de que el cliente enviaba los datos, se le enviaba un correo electrónico de notificación. Luego, un rol se encargaba de verificar y revisar los datos para decidir si admitir o rechazar la solicitud. Posteriormente, la solicitud pasaba a otro rol encargado de validar los datos y tomar la decisión final de aceptar o rechazar la solicitud del cliente.
              <br /><br />
              Una vez tomada la decisión, se enviaba un correo electrónico al cliente para notificar si su solicitud había sido aceptada o rechazada. Por último, el administrador tenía la capacidad de visualizar el estado de todas las solicitudes recibidas.
            </p>
            <h4 className='text-gray-200 font-medium mt-4'>Tecnologias utilizadas</h4>
            <div className='mt-4 flex items-center gap-3 flex-wrap'>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>HTML</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>CSS</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>JavaScript</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>Bootstrap</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>PHP</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>MySQL</span>
            </div>
          </Card>
        </motion.div>
        <motion.div className='col-span-4' initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} >
          <Card className='bg-slate-900 shadow-slate-500 h-full'>
            <h4 className='subtitle text-center mb-1'>Desarrollador web en Logistica Multimodal Especializada</h4>
            <h6 className='mb-5 text-center text-gray-200'>2021-2023</h6>
            <p className='text'>
              Estuve trabajando en el área de sistemas como desarrollador web en esta agencia aduanal. Mis responsabilidades incluían desarrollar nuevos módulos para el sistema, migrar módulos o mejorar los existentes. Utilizaba Trello para la asignación de tareas y trabajaba con Angular, Laravel, MySQL y SQL Server para llevar a cabo mis actividades.
              <br /><br />
              Además, brindaba soporte a los usuarios cuando surgían problemas, ya sea para identificar errores de usuario o de código. Utilicé Git para realizar commits de todas las modificaciones que realizaba, manteniendo así el proyecto actualizado en colaboración con mis compañeros de trabajo.
            </p>
            <h4 className='text-gray-200 font-medium mt-4'>Tecnologias utilizadas</h4>
            <div className='mt-4 flex items-center gap-3 flex-wrap'>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>HTML</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>CSS</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>JavaScript</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>TypeScript</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>Angular</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>Bootstrap</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>Angular Material</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>Laravel</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>PHP</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>SQL Server</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>MySQL</span>
            </div>
          </Card>
        </motion.div>
        <motion.div className='col-span-4' initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} >
          <Card className='col-span-4 bg-slate-900 shadow-slate-500 h-full'>
            <h4 className='subtitle text-center mb-1'>Desarrollador Front-End</h4>
            <h6 className='mb-5 text-center text-gray-200'>Trabajo actual</h6>
            <p className='text'>
              Actualmente trabajo como desarrollador Front-End, específicamente en proyectos con Angular, siguiendo la metodología SCRUM. Mis actividades incluyen proporcionar actualizaciones sobre el progreso de mis tareas y desarrollar secciones para los proyectos asignados, basándome en las tareas asignadas y los prototipos proporcionados.
              <br /><br />
              Mi trabajo consiste en maquetar los diseños, agregar funcionalidades y consumir APIs para dar forma a los proyectos de los clientes.
            </p>
            <h4 className='text-gray-200 font-medium mt-4'>Tecnologias utilizadas</h4>
            <div className='mt-4 flex items-center gap-3 flex-wrap'>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>HTML</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>CSS</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>TypeScript</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>Angular</span>
              <span className='border py-1 px-6 text-gray-200 font-medium border-gray-200 rounded-full'>Bootstrap</span>
            </div>
          </Card>
        </motion.div>
        <motion.h4 initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className='col-span-12 text-center title my-5'>Mis proyectos</motion.h4>
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className='col-span-12'>
          <Card className='bg-slate-900 shadow-slate-500'>
            <h4 className='subtitle text-center mb-1'>Muy pronto!</h4>
          </Card>
        </motion.div>
      </div>

      <motion.div className='px-4 flex justify-end' initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <a href='#header' className='floatingButton flex items-center justify-center cursor-pointer'>
          <FontAwesomeIcon icon={faCaretUp} />
        </a>
      </motion.div>

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
          <h5 className='text-slate-200 text-lg font-medium'>
            Copyright &copy; {new Date().getFullYear()} Todos los derechos reservados.
          </h5>
        </div>
      </footer>
    </div>
  )
}

export default HomePage