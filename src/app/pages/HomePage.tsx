import React from 'react'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import image from './../../assets/img/developer.png';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <div className='bg-slate-900 overflow-x-hidden'>
      <Header />
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
        <motion.div className='col-span-12 sm:col-span-6 md:col-span-4' initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} >
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
        <motion.div className='col-span-12 sm:col-span-6 md:col-span-4' initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} >
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
        <motion.div className='col-span-12 sm:col-span-6 md:col-span-4' initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} >
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
        <motion.div className='col-span-12 sm:col-span-6 md:col-span-4' initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} >
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
        <motion.div className='col-span-12 sm:col-span-6 md:col-span-4' initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} >
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
        <motion.div className='col-span-12 sm:col-span-6 md:col-span-4' initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} >
          <Card className='col-span-4 bg-slate-900 shadow-slate-500 h-full flex flex-col justify-between'>
            <h4 className='subtitle text-center mb-5'>Pokedex React Native</h4>
            <p className='text'>
              Tomé un curso en Platzi para aprender los fundamentos de React Native. El proyecto consistió en desarrollar una aplicación que consume la API de Pokémon para mostrar una lista de Pokémon, detalles de cada uno, una lista de favoritos y una simulación de inicio de sesión. Utilicé BottomNavigation y colores en la tarjeta de cada Pokémon basados en sus atributos. Para este proyecto, utilicé Expo.
            </p>
            <h4 className='link mt-5'><a target='_blank' href="https://github.com/BeMora11/Pokedex_react_native.git" rel="noreferrer">Haz click para ver el epositorio</a></h4>
          </Card>
        </motion.div>
        <motion.div className='col-span-12 sm:col-span-6 md:col-span-4' initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} >
          <Card className='col-span-4 bg-slate-900 shadow-slate-500 h-full flex flex-col justify-between'>
            <h4 className='subtitle text-center mb-5'>CRUD Vue + PHP</h4>
            <p className='text'>
              Para este proyecto, seguí los fundamentos de un tutorial básico de Vue y adapté un proyecto personal para poner en práctica lo aprendido. El proyecto consiste en un CRUD básico para agregar artículos, mostrarlos en una tabla y poder editar o eliminarlos. Además, construí una API en PHP para que Vue pudiera consumirla.
            </p>
            <h4 className='link mt-5'><a target='_blank' href="https://github.com/BeMora11/Vue.js_Articulos/tree/main" rel="noreferrer">Haz click para ver el epositorio</a></h4>
          </Card>
        </motion.div>
        <motion.div className='col-span-12 sm:col-span-6 md:col-span-4' initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} >
          <Card className='col-span-4 bg-slate-900 shadow-slate-500 h-full flex flex-col justify-between'>
            <h4 className='subtitle text-center mb-5'>CRUD React</h4>
            <p className='text'>
              En este proyecto, creé un pequeño CRUD de usuarios con información básica. Utilicé el localStorage para simular la base de datos. El proyecto permite editar, consultar y dar de alta a un usuario.
            </p>
            <h4 className='link mt-5'><a target='_blank' href="https://github.com/BeMora11/App_usuarios_React.git" rel="noreferrer">Haz click para ver el epositorio</a></h4>
          </Card>
        </motion.div>
      </div>

      <motion.div className='px-4 flex justify-end' initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <a href='#header' className='floatingButton flex items-center justify-center cursor-pointer'>
          <FontAwesomeIcon icon={faCaretUp} />
        </a>
      </motion.div>
      <Footer />
    </div>
  )
}

export default HomePage