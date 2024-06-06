// import {CreateLetter, UpdateLetter} from '../Interfaces/letter.interface'

// const API = 'https://backendportafolio-6o0je5xop-cesargarciafs-projects.vercel.app/api'

// export const createLetterRequest = (letter:CreateLetter) =>
//     fetch(`${API}/letters`, {
//             method: 'POST',
//             body: new URLSearchParams(letter as any),
//             headers:{
//                 'Content-Type' : 'application/json'
//             }
//         })

// export const getLetterrRequest = () => fetch(`${API}/letters`)

// export const deleteLetterRequest = (id:string) => 
//     fetch(`${API}/letters/${id}`,
//         {
//             method:"DELETE",
//         }
//     );

// export const updateLetterRequest = (id:string, letter: UpdateLetter) =>
//     fetch(`${API}/letters/${id}`,
//         {
//             method: 'PUT',
//             body: new URLSearchParams(letter as any),
//             headers:{
//                 'Contente-Type' : 'application/json'
//             }
//         }
//     )

import { CreateLetter, UpdateLetter } from '../Interfaces/letter.interface'

const API = 'https://backendportafolio-6o0je5xop-cesargarciafs-projects.vercel.app/api/letters'

export const createLetterRequest = (letter: CreateLetter) =>
    fetch(API, {
        method: 'POST',
        body: JSON.stringify(letter),
        headers: {
            'Content-Type': 'application/json'
        }
    })

export const getLetterRequest = () => fetch(API)

export const deleteLetterRequest = (id: string) =>
    fetch(`${API}/${id}`, {
        method: "DELETE",
    });

export const updateLetterRequest = (id: string, letter: UpdateLetter) =>
    fetch(`${API}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(letter),
        headers: {
            'Content-Type': 'application/json'
        }
    })
