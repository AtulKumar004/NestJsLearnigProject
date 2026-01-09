import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'Shanna@melissa.tv',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      email: 'Nathan@yesenia.net',
      role: 'ENGINEER',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      role: 'ADMIN',
    },
  ];

  getAllUsers(role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    if (role) {
      return this.users.filter((user) => user?.role === role);
    }
    return this.users;
  }

  getUserDetails(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(user: {
    name: string;
    email: string;
    role: 'INTERN' | 'ADMIN' | 'ENGINEER';
  }) {
    const usersByHeightId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHeightId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    users: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ADMIN' | 'ENGINEER';
    },
  ) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return null;
    }
    const updatedUser = {
      ...this.users[userIndex],
      ...users,
    };
    this.users[userIndex] = updatedUser;
    return updatedUser;
  }

  delete(id: number) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return null;
    }
    const deletedUser = this.users[userIndex];
    this.users.splice(userIndex, 1);
    return deletedUser;
  }
}
