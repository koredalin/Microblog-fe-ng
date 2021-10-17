import { UserLoginInterface } from "./user-login.interface";

export interface UserRegisterInterface extends UserLoginInterface {
    firstName: string,
    lastName: string
}