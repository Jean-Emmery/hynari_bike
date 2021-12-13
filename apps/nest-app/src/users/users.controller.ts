import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService ) {}

  @Get('/getAll')
  getAllUsers() {
    console.log("users.controller:getAllUsers")
    return this.usersService.getAll();
  }
}
