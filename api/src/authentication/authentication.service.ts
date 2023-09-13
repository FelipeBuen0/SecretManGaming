import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service'

@Injectable()
export class AuthenticationService {
  constructor(private _usersService: UsersService) {}

  async signIn(email: string, password: string) {
    const user = await this._usersService.findByEmail( email );
    console.log(user);
    if (!user || user === null) {
      throw new UnauthorizedException();
    }
    if (user.password !== password) {
        throw new UnauthorizedException();
    }
    return user;
    // // if (!authentication) {
    //   // Handle the case where no matching authentication record was found
    //   return null;
    // }

    // You can now compare the password or perform any other authentication logic
    // Be sure to handle password hashing and validation securely

    // For example, assuming you have a passwordHash field in your Authentication model
    // const isPasswordValid = comparePasswords(password, authentication.passwordHash);

    // if (isPasswordValid) {
    //   // Authentication successful
    //   return authentication;
    // } else {
    //   // Authentication failed
    //   return null;
    // }
  }
}
