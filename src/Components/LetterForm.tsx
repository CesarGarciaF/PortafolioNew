import { ChangeEvent, FormEvent, useState } from "react"
// import { createLetterRequest } from "../api/letter";
import { useLetter } from "../Context/useLetter";
import { motion } from "framer-motion"


export default function LetterForm() {
    const[letter, setLetter] = useState(
        {
            empresaName : "",
            aboutField : "",
            phoneNumber : "",
            done : false,
        }
    );

    const {createLetter} = useLetter()

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    {
        setLetter({...letter, [e.target.name]: e.target.value});
    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>
    {
        e.preventDefault();
        console.log(letter);
        createLetter(letter);
        // console.log(data)
        setLetter({
            empresaName: "",
            aboutField: "",
            phoneNumber: "",
            done: false,
        });
        alert("¡El formulario se ha enviado correctamente!");
    };

    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
            whileInView={{opacity : 1, y : 0}}
            initial={{opacity : 0, y : -100}}
            transition={{duration : 0.5}} 
            className="my-20 text-center text-4xl"> Contactame! 
            </motion.h1>
                <motion.form 
                whileInView={{opacity : 1, x : 0}}
                initial={{opacity : 0, x : -100}}
                transition={{duration : 1}}
                onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="empresaName"
                        className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                        placeholder="Ingrese el nombre de la empresa o el suyo"
                        value={letter.empresaName}
                        onChange={handleChange}
                    />

                    <textarea
                        name="aboutField"
                        rows={3}
                        className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                        placeholder="Digame porque le interesó el portafólio"
                        value={letter.aboutField}
                        onChange={handleChange}
                    />

                    <input
                        type="string"
                        name="phoneNumber"
                        className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                        placeholder="Ingrese su número telefónico"
                        value={letter.phoneNumber}
                        onChange={handleChange}
                    />

                    {/* <label htmlFor="" className="inline-flex items-center gap-x-2">
                        <input 
                            type="checkbox" 
                            className="h-5 w-5 text-indigo-600"
                            onChange={(e) => setLetter({...letter, done: e.target.checked})}
                        />
                        <span>Terminado</span>
                    </label> */}

                    <button
                    type="submit" 
                    className=
                    "bg-purple-900 px-3 block py-2 w-full"
                    >Guardar</button>
                </motion.form>
        </div>
    )
}
