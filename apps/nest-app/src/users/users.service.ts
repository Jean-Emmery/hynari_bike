import { Injectable } from '@nestjs/common';

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

  async getAll() {
    console.log("usersService:findAll")
    const users = await k.getUsers()
    console.log("usersService:findOne:user")
    console.log(users)
    return users;
  }

  async addNew(user: any) {
    console.log("users.service:user")
    console.log(user)
    k.registerUser(user)
    .then((el) => console.log(el))
    .catch((err) => console.log(err))
    return ;
  }

  async findOne(username: string): Promise<User | undefined> {
    console.log("usersService:findOne:username")
    console.log(username)
    const user = await k.findUser(username)
    console.log("usersService:findOne:user")
    console.log(user)
    return user;
  }

  async findAll() {
    return await k.findAll();
  }

  async register(user: any) {
    console.log("user");
    console.log(user);
    k.registerUser(user)
    .then((el) => console.log(el))
    .catch((err) => console.log(err))
    return ;
  }

  async profile(user: any) {
    console.log("users.services:profile:user");
    console.log(user);
    return user;
  }
}
