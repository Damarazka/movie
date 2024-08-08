export interface UserModel {
    id: string;
    username: string;
    email?: string;
    token: string;
    avatar?: string;
    phone?: string;
}