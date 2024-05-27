import { ChangeEvent, FormEvent, useState } from "react"
import { createLetterRequest } from "../api/letter";
import { useLetter } from "../Context/useLetter";

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
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="empresaName"
                    className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                    placeholder="Ingrese el nombre de la empresa o el suyo"
                    onChange={handleChange}
                />

                <textarea
                    name="aboutField"
                    rows={3}
                    className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                    placeholder="Digame porque le interesó el CV"
                    onChange={handleChange}
                />

                <input
                    type="string"
                    name="phoneNumber"
                    className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                    placeholder="Ingrese su número telefónico"
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

                <button className=
                "bg-indigo-500 px-3 block py-2 w-full"
                >Guardar</button>
            </form>
        </div>
    )
}
