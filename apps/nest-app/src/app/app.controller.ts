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
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard) // Si l'utilisateur est connecté et a son token
  @Get('profile')
  getProfile(@Request() req) {
    return this.usersService.profile(req.user);
  }

  @Post('user/register')
  async register(@Request() req) {
    return this.usersService.register(req.body);
  }

  @Get('user/getAll')
  async getAll() {
    return this.usersService.getAll();
  }

  @Post('user/new')
  async addNew(@Body() user) {
    return this.usersService.addNew(user);
  }

  @Delete('/user/:id')
  deleteUser(@Param() data) {
    return this.usersService.delete(data.id);
  }

  @Get('/user/show/:id')
  getUSerById(@Param() data) {
    return this.usersService.getUserById(data.id)
  }

  @Post('/user/editUser')
  editUser(@Body() user: IUser) {
    return this.usersService.editUser(user)
  }
}
