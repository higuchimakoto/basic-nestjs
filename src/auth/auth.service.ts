import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  // constructorでDIする
  constructor(private readonly userRepository: UserRepository) {}

  async signUp(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.createUser(createUserDto);
  }
}
