export  interface Letter
{
    _id : string;
    empresaName : string;
    aboutField? : string;
    phoneNumber : string;
    done? : boolean;
    createdAt? : Date;
    updatedAt? : Date;
}

export type CreateLetter = Omit<Letter, '_id' | 'createdAt' | 'updatedAt'>
export type UpdateLetter = Partial<CreateLetter>;