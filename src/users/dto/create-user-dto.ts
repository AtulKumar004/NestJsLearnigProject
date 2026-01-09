import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'Name is Required' })
  @IsString()
  @MaxLength(50, {
    message: 'Name is too long. Maximum length is 50 characters.',
  })
  name: string;

  @IsNotEmpty({ message: 'Email is Required' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsEnum(['INTERN', 'ADMIN', 'ENGINEER'], {
    message: 'role must be one of INTERN, ADMIN, ENGINEER',
  })
  role: 'INTERN' | 'ADMIN' | 'ENGINEER';
}
