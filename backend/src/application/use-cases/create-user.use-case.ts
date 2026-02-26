import { Inject, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { User } from '../../domain/entities/user.entity';
import type { UserRepository } from '../../domain/repositories/user.repository.interface';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepository,
  ) {}

  async execute(dto: CreateUserDto): Promise<User> {
    const user: User = {
      id: randomUUID(),
      name: dto.name,
      email: dto.email,
      createdAt: new Date().toISOString(),
    };

    await this.userRepository.create(user);

    return user;
  }
}