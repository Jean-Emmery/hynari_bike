import { Controller, Get, Request, Post, UseGuards, Body, Delete, Param } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';
import { IUser } from '@hynari_bike/user';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  getData(): { message: string } {
    throw new Error('Method not implemented.');
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    console.log("req.user");
    console.log(req.user);
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard) // Si l'utilisateur est connecté et a son token
  @Get('profile')
  getProfile(@Request() req) {
    console.log("app.controller:profile:req.user");
    console.log(req.user);
    return this.usersService.profile(req.user);
  }

  @Post('user/register')
  async register(@Request() req) {
    console.log("app.controller:register()")
    console.log("req.body");
    console.log(req.body);
    return this.usersService.register(req.body);
  }

  @Get('user/getAll')
  async getAll() {
    console.log("app.controller:getAll()")
    return this.usersService.getAll();
  }

  @Post('user/new')
  async addNew(@Body() user) {
    console.log("app.controller:addNew()")
    return this.usersService.addNew(user);
  }

  @Delete('/user/:id')
  deleteUser(@Param() data) {
    console.log("app.controller:DeleteUser()")
    console.log(data)
    return this.usersService.delete(data.id);
  }

  @Get('/user/show/:id')
  getUSerById(@Param() data) {
    console.log('app.controller:getUSerById')
    console.log(data)
    return this.usersService.getUserById(data.id)
  }

  @Post('/user/editUser')
  editUser(@Body() user: IUser) {
    console.log("app.controller:editUser:user")
    console.log(user)
    return this.usersService.editUser(user)
  }
}
