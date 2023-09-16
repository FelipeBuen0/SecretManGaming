import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthenticationService } from './jwt.authentication.service';
import { CreateAuthenticationDto } from './dto/create-jwt.authentication.dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() createAuthenticationDto: CreateAuthenticationDto) {
    return this.authenticationService.signIn(createAuthenticationDto.email, createAuthenticationDto.password);
  }
}
