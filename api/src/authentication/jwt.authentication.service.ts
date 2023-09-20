/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
  constructor(
    private _usersService: UsersService,
    private _jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string) {
    const user = await this._usersService.findByEmail(email);
    if (user.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = {
      sub: user._id,
      username: user.username,
      credit: user.credit,
      email: user.email,
      name: user.name,
    };
    const access_token = await this._jwtService.signAsync(payload);
    return access_token;
  }
}
