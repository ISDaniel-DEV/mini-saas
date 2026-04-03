import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findById(id: number) {
    return `This action returns a #${id} user`;
  }

  findByEmail(email: string) {
    return `This action returns a #${email} user`;
  }

  constructor(private prisma: PrismaService){}
  
}
