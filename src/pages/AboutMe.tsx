import { CiLocationOn,CiMobile1,CiMail,CiLinkedin,CiYoutube } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'


const loadPageWithAnimation={
  initial:{opacity:0},
  animate:{opacity:1,transition:{duration:2}}
}
const listinProrityShowVariant={
  initial:{
    x:'100vw',
    opacity:0,
  },
  animate:{
    x:'0vw',
    opacity:1,
    transition:{duration:1, delayChildren: 0.4,staggerChildren: 0.3,when: "beforeChildren"}
  }
}
const listItem = {
  initial: { 
    opacity: 0,
    x:'-100vw',
  },
  animate: { 
    opacity: 1,
    x:'0vw',
    transition:{duration:1}
  }
};
const imageSectionVariant={
  initial: { 
    x:'-100vw',
  },
  animate: { 
    x:'0vw',
    transition:{duration:1}
  }
}
const textSectionVariant={
  initial: { 
    x:'100vw',
  },
  animate: { 

    x:'0vw',
    transition:{duration:1}
  }
}
function AboutMe() {
  return (
    <motion.div variants={loadPageWithAnimation} initial="initial" animate="animate" className="container max-w-xl mx-auto flex flex-col gap-6 mb-8 shadow-sm drop-shadow-sm">
        <div className="flex flex-col w-full bg-color-secondary rounded-md overflow-hidden md:flex-row">
        <motion.div variants={imageSectionVariant} initial="initial" animate="animate" className="flex-1" >
        <img className=' w-full h-full object-cover' src={'/images/profile.jpg'} alt="Arman Abasian" />
      </motion.div>
      <motion.div variants={textSectionVariant} initial="initial" animate="animate" className="p-2 flex-1">
        <h1 className="text-lg font-bold mb-3">About me</h1>
        <p>Junior MERN stack Developer with two years of experience in developing and implementing userfriendly websites and applications. Proficient in HTML, CSS, JavaScript, Reactjs, Nextjs, Nodejs,
Mongodb, Expressjs and various front-end and back-end libraries, packages and frameworks. Strong
understanding of user experience (UX) and user interface (UI) design principles. Excellent problemsolving skills and ability to work collaboratively in a team environment.</p>
      </motion.div>
        </div>
        <motion.div variants={listinProrityShowVariant} initial="initial" animate="animate"  className="flex flex-col gap-2 mb-2 bg-color-secondary rounded-md p-2">
            <motion.p variants={listItem} className="flex  flex-wrap items-center gap-1"> <BsPerson className="mobileIcon" />Arman Abasian</motion.p>
            <motion.p variants={listItem} className="flex flex-wrap  items-center gap-1"> <CiLocationOn className="mobileIcon" /> Thren - Iran</motion.p>
            <motion.p variants={listItem} className="flex flex-wrap  items-center gap-1"> <CiMobile1 className="mobileIcon" /> +989904407613</motion.p>
            <motion.p variants={listItem} className="flex flex-wrap  items-center gap-1"> <CiMail className="mobileIcon" />abasian.arman@gmail.com</motion.p>
            <motion.p variants={listItem} className="flex flex-wrap  items-center gap-1"> <CiLinkedin className="mobileIcon" /><Link to="https://www.linkedin.com/in/armanabasian">my Linkedin</Link></motion.p>
            <motion.p variants={listItem} className="flex flex-wrap  items-center gap-1"> <FaGithub className="mobileIcon" /> <Link to="https://github.com/Arman-Abbasian">my Github</Link></motion.p>
            <motion.p variants={listItem} className="flex flex-wrap  items-center gap-1"> <CiYoutube className="mobileIcon" /> <Link to="https://www.youtube.com/channel/UCxIWc1N4joNrUk1rZjCkIA">my Youtube channel</Link></motion.p>
        </motion.div>
    </motion.div>
  )
}

export default AboutMe