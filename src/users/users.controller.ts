import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user-dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(@Query('role') role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    return this.usersService.getAllUsers(role);
  }

  @Get(':id')
  getUserDetails(@Param('id') id: string) {
    return this.usersService.getUserDetails(Number(id));
  }

  @Post() // Create User
  createUser(
    @Body()
    user: CreateUserDTO,
  ) {
    console.log('Creating user:', user);
    return this.usersService.create(user);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() user: object) {
    return this.usersService.update(Number(id), user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.delete(Number(id));
  }
}
