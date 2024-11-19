// user.model.ts
export interface User {
    id: number;
    nom: string;
    email: string;
    password?: string;
    remember_token?: string;
    created_at?: Date;
    updated_at?: Date;


}


export interface UserModel {
    id?: number;
    nom?: string;
    email?: string;
    password?: string;
    photo_profile? : string;
}