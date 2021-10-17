import { UserDbInterface } from "./user-db.interface";

export class UserEmptyModels {
    public static DB_INTERFACE: UserDbInterface = {
        id: null,
        first_name: '',
        last_name: '',
        email: '',
        created_at: '',
        updated_at: ''
    };
}