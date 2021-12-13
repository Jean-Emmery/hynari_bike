import { Controller, Get, Request, Post, UseGuards, Body } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';

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

  @Get('user/all')
  async findAll() {
    console.log("app.controller:FindAll()")
    return this.usersService.findAll();
  }

  @Post('user/new')
  async addNew(@Body() user) {
    return this.usersService.addNew(user);
  }
}
