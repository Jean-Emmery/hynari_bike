import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { KnexModule } from 'nestjs-knex';

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: "sqlite3",
        useNullAsDefault: true,
        connection: ':memory:',
      },
    }),
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
