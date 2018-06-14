export interface Wallet {
    name: string,
    ownerId: string,
    amount: number,
    securityHash?: string
}

export interface UserInterface {
    uid: string;
    email: any;
    emailVerified: boolean;
    phoneNumber?: string;
}