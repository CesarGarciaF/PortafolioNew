import LetterItem from "./LetterItem"
import { useLetter } from "../Context/useLetter"
import { motion } from "framer-motion"

export default function LetterList() {
    const {letters} = useLetter()
    return (
        <motion.div 
        whileInView={{opacity : 1, x : 0}}
        initial={{opacity : 0, x : -100}}
        transition={{duration : 1}} 
        className="border-b border-neutral-900 pb-4">
            <motion.h1
            whileInView={{opacity : 1, y : 0}}
            initial={{opacity : 0, y : -100}}
            transition={{duration : 0.5}} 
            className="my-20 text-center text-4xl"> Lista de Interesados 
            </motion.h1>
            {
                letters.map(letter =>(
                    <LetterItem letter = {letter} key={letter._id} />    
                ))
            }
        </motion.div>
    )
}
