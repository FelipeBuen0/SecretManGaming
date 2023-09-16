import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthenticationDto } from './create-jwt.authentication.dto';

export class UpdateAuthenticationDto extends PartialType(
  CreateAuthenticationDto,
) {}
