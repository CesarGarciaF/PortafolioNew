import { Letter } from "../Interfaces/letter.interface"
import { useLetter } from "../Context/useLetter";
import { IoRocket } from "react-icons/io5";

interface Props
{
    letter : Letter;
}
export default function LetterItem({letter} : Props) {

const {deleteLetter, updateLetter} = useLetter();

return (
    <div key = {letter._id}
        className="bg-gray-900 
        p-2 my-2 flex justify-between hover:bg-gray-800 
        hover:cursor-pointer"
    >
    <div>
        <h1>{letter.empresaName}</h1>   
        <h1>{letter.phoneNumber}</h1>
        <p>{letter.aboutField}</p>
    </div>
    <div className="flex gap-x-2">
        {/* <button
        onClick={() =>
            {
                updateLetter(letter._id,
                    {
                        done: !letter.done,
                    }
                );
            }
        }
        >
        <IoRocket />
        </button> */}
        <IoRocket 
        className=""
        onClick={async () =>
            {
                if (!window.confirm("Estas seguro de que quieres eliminar?")) return;
                await deleteLetter(letter._id)
            }
        }
        >
        </IoRocket>
    </div>
    </div>
)
}
