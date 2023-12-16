import { AiOutlineCloseSquare } from "react-icons/ai";
import Conffeti from 'react-confetti'
import { motion, AnimatePresence } from 'framer-motion'

export function Modal({ children, closeModal, winner=null }) {
  return (
    <motion.div
    initial={{opacity:0,scale:0.5}}
    animate = {{opacity:1,scale:1}}
    exit={{opacity:0,scale:0.5}}
    transition={{duration:0.4}}
    className={`absolute opacity-0 bg-yellow-50 overflow-hidden flex flex-col justify-center items-center text-center text-4xl font-bold h-1/2 w-1/2`}>
     {
      winner != null && (<Conffeti width={800} height={400} initialVelocityY={4} ></Conffeti>)
     }
      <button
        className=" absolute top-0 right-0 bg-blue-600 cursor-pointer w-6 h-6"
        onClick={closeModal}
      >
        <AiOutlineCloseSquare className="w-full h-full text-white"></AiOutlineCloseSquare>
      </button>
      {children}
    </motion.div>
  );
}
