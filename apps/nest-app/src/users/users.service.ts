import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectKnex() private readonly knex: Knex,
  ) {}

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

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async register(user: any) {
    console.log("user");
    console.log(user);
    await this.knex.table('users').insert({
      email: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      password: user.password
    });
    return ;
  }

  async findAll() {
    const users = await this.knex.table('users');
    return { users };
  }
}
