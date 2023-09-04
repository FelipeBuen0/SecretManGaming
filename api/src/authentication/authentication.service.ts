import { Injectable } from '@nestjs/common';
import { CreateAuthenticationDto } from './dto/create-authentication.dto';
import {
  Authentication,
  AuthenticationDocument,
} from './entities/authentication.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectModel(Authentication.name)
    private readonly _data: Model<AuthenticationDocument>,
  ) {}

  async authenticate(createAuthenticationDto: CreateAuthenticationDto) {
    const request = new this._data(createAuthenticationDto);
    // Use findOne to find a single document by email
    return await this._data.findOne({ request });

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
