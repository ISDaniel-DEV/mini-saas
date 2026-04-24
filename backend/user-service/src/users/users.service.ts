import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    const { email, name, password } = createUserDto;
    return this.prisma.user.create({
      data: {
        ...createUserDto
      }
    });
  }

  async findById(id: number) {
    return this.prisma.user.findUnique({
      where: {id},
    });
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {email},
    });
  }

  constructor(private prisma: PrismaService) { }

}
