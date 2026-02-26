import {
  PutCommand,
  GetCommand,
} from '@aws-sdk/lib-dynamodb';

import { User } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository.interface';
import { dynamoClient } from '../database/dynamo.client';

export class DynamoUserRepository implements UserRepository {
  private readonly tableName = 'UrbanBikeTable';

  async create(user: User): Promise<void> {
    await dynamoClient.send(
      new PutCommand({
        TableName: this.tableName,
        Item: {
          PK: 'USER',
          SK: `USER#${user.id}`,
          ...user,
        },
      }),
    );
  }

  async findById(id: string): Promise<User | null> {
    const result = await dynamoClient.send(
      new GetCommand({
        TableName: this.tableName,
        Key: {
          PK: 'USER',
          SK: `USER#${id}`,
        },
      }),
    );

    return (result.Item as User) || null;
  }
}