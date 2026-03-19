import type { User } from '../Features/User/types';

export const createUser = async (user: User) => {
    UserList.push(user);
}

const UserList: User[] = [
    {
        email: 'test@test.com',
        balance: 100,
        dateOfBirth: new Date('1990-01-01'),
        gender: 'male',
        continent: 'northAmerica',
    }
];

export const getUserList = async () => {
    return UserList;
}
