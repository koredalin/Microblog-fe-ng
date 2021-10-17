import { UserDbInterface } from "./user-db.interface";

export interface ResponseInterface {
    "response": {
        message?: string,
        user_id?: number,
        jwt?: string,
        resultOne?: UserDbInterface,
        resultAll?: UserDbInterface[]
    },
    "arguments": {
        "id?": number
    }
}