export interface User {
    email: string;
    balance: number;
    dateOfBirth: Date;
    gender: 'male' | 'female';
    continent: 'northAmerica' | 'europe' | 'southAmerica' | 'asia' | 'oceania' | 'antarctica';
}

export interface UserForm {
    ageQuestion: number;
    email: string;
    balance: number;
    dateOfBirth: Date;
    gender: 'male' | 'female';
    continent: 'northAmerica' | 'europe' | 'southAmerica' | 'asia' | 'oceania' | 'antarctica';
}