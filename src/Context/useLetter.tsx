import { useContext } from "react"; 
import { LetterContext } from "./LetterContext";

export const useLetter = () =>
{
    const context = useContext(LetterContext)
    if(!context) throw new Error('Las cartas no deberian usarse sin provedor')
    return context;
}