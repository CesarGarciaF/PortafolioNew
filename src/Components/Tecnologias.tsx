import { RiReactjsLine } from "react-icons/ri";
import { RiAngularjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { RiHtml5Fill } from "react-icons/ri";
import { RiCss3Fill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { motion } from "framer-motion"
import { Variants } from 'framer-motion';

export const iconVariants = (duracion: number): Variants => ({
    initial: { y: -10 }, 
    animate: {
        y: [10, -10],
        transition: {
            duration: duracion,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});


export const Tecnologias = () => {
return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{opacity: 1, y : 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">Tecnologías</motion.h1>        
        <motion.div 
        whileInView={{opacity : 1, x : 0}}
        initial={{opacity: 0, x : -100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiAngularjsFill className="text-7xl text-red-600"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiHtml5Fill className="text-7xl text-orange-700"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiCss3Fill className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className="text-7xl text-cyan-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiMongodb className="text-7xl text-green-800"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiExpress className="text-7xl text-green-800"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNode className="text-7xl text-green-800"/>
            </motion.div>

        </motion.div>
    </div>
)
}
export default Tecnologias;
