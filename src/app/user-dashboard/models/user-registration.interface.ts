import { UserLoginInterface } from "./user-login.interface";

export interface UserRegistrationInterface extends UserLoginInterface {
    firstName: string,
    lastName: string
}