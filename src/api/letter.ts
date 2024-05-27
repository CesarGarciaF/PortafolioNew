import {CreateLetter, UpdateLetter} from '../Interfaces/letter.interface'

const API = 'http://localhost:5000/api'

export const createLetterRequest = (letter:CreateLetter) =>
    fetch(`${API}/letters`, {
            method: 'POST',
            body: new URLSearchParams(letter as any),
            headers:{
                'Contente-Type' : 'application/json'
            }
        })

export const getLetterrRequest = () => fetch(`${API}/letters`)

export const deleteLetterRequest = (id:string) => 
    fetch(`${API}/letters/${id}`,
        {
            method:"DELETE",
        }
    );

export const updateLetterRequest = (id:string, letter: UpdateLetter) =>
    fetch(`${API}/letters/${id}`,
        {
            method: 'PUT',
            body: new URLSearchParams(letter as any),
            headers:{
                'Contente-Type' : 'application/json'
            }
        }
    )

