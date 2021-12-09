import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    console.log("authService:validateUser:user")
    console.log(user)
    console.log("authService:validateUser:password&pass")
    console.log(user.password + " - " + pass)
    if (user && user.password === pass) {
      const { password, ...result } = user;
      console.log("authService:validateUser:result")
      console.log(result)
      return result;
    }
    return null;
  }

  async login(user: any) {
    console.log("authService:login:user")
    console.log(user);
    const payload = {
      username: user.email,
      first_name: user.firstname,
      last_name: user.lastname,
      role: user.role,
      //sub: user.userId,
    };
    const access_token = this.jwtService.sign(payload);

    console.log("authService:login:access_token")
    console.log(access_token);
    console.log("authService:login:payload")
    console.log(payload);
    console.log("authService:login:user")
    console.log(user);

    return {
      access_token,
      user: user
    };
  }
}
