import LetterItem from "./LetterItem"
import { useLetter } from "../Context/useLetter"

export default function LetterList() {
    const {letters} = useLetter()
    return (
        <div>
            {
                letters.map(letter =>(
                    <LetterItem letter = {letter} key={letter._id} />    
                ))
            }
        </div>
    )
}
