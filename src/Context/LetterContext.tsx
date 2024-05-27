import React, { createContext, useEffect, useState } from "react";
import { createLetterRequest, getLetterrRequest, deleteLetterRequest, updateLetterRequest } from "../api/letter";
import { CreateLetter, Letter, UpdateLetter } from "../Interfaces/letter.interface";

interface LetterContextValue
{
    letters : Letter[];
    createLetter : (letter:CreateLetter) => Promise<void>;
    deleteLetter : (id : string) => Promise<void>;
    updateLetter : (id: string, letter: UpdateLetter) => Promise<void>;
}

export const LetterContext = createContext<LetterContextValue>(
{
    letters:[],
    createLetter: async () => {},
    deleteLetter: async () => {},
    updateLetter: async () => {},
})

interface Props
{
    children: React.ReactNode;
}

export const LetterProvider : React.FC<Props> = ({children}) => 
{
    const [letters, setLetters] = useState<Letter[]>([]);

    useEffect(() => 
        {
            getLetterrRequest()
                .then((response) => response.json())
                .then((data) => setLetters(data));
        }, [])

    const createLetter = async (letter:CreateLetter) =>
    {
        const res = await createLetterRequest(letter)
        const data = await res.json()
        setLetters([...letters, data])
    }

    const deleteLetter = async (id:string) =>
    {
        const res = await deleteLetterRequest(id);
        if (res.status === 204) 
        {
            setLetters(letters.filter((letter) => letter._id !== id))
        }
    };

    const updateLetter = async (id: string, letter: UpdateLetter) =>
    {
        const res = await updateLetterRequest(id, letter);
        const data = await res.json();

        setLetters(
            letters.map((letter) => (letter._id === id ? {...letter, ...data} : letter) )
        );
    };

    return (
        <LetterContext.Provider
            value={
                {
                    letters,
                    createLetter,
                    deleteLetter,
                    updateLetter,
                }}
        >
            {children}
        </LetterContext.Provider>
    )
};