import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @MessagePattern('create_user')
  create(@Payload() data: CreateUserDto) {
    return this.usersService.create(data);
  }

  @MessagePattern('find_user_by_id')
  findById(@Payload() id: number) {
    return this.usersService.findById(id);
  }

  @MessagePattern('find_user_by_email')
  findByEmail(@Param('email') email: string) {
    return this.usersService.findByEmail(email);
  }

}
