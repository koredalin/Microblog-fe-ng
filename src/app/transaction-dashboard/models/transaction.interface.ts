export interface TransactionInterface {
    id: number | null,
    email: string,
    phoneNumber: string,
    password?: string,
    confirmed: false,
    confirmedAt?: number
}