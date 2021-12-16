import { Injectable } from '@nestjs/common';
import { IUser } from '@hynari_bike/user';
import { k } from '@hynari_bike/knex-lib';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {

  private readonly users = [
    {
      userId: 1,
      username: 'john@mail.com',
      first_name: 'john',
      last_name: 'cena',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'johnetta@mail.com',
      first_name: 'johnetta',
      last_name: 'cenatta',
      password: 'guess',
    },
  ];

  // async findOne(username: string): Promise<User | undefined> {
  //   return this.users.find(user => user.username === username);
  // }

  getAll() {
    return k.getUsers();
  }

  async addNew(user: any) {
    k.registerUser(user)
    return ;
  }

  async findOne(username: string): Promise<User | undefined> {
    const user = await k.findUser(username)
    return user;
  }

  async findAll() {
    return await k.findAll();
  }

  async register(user: any) {
    k.registerUser(user)
    return ;
  }

  async profile(user: any) {
    return user;
  }

  delete(userId: number) {
    return k.deleteUserDb(userId);
  }

  getUserById(id: string) {
    return k.getUserByIdDb(id);
  }

  editUser(user: IUser) {
    return k.editUserDb(user);
  }
}
