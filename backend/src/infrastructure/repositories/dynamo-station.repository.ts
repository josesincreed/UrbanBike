import {
  PutCommand,
  GetCommand,
  QueryCommand,
} from '@aws-sdk/lib-dynamodb';

import { Station } from '../../domain/entities/station.entity';
import { StationRepository } from '../../domain/repositories/station.repository.interface';
import { dynamoClient } from '../database/dynamo.client';

export class DynamoStationRepository implements StationRepository {
  private readonly tableName = 'UrbanBikeTable';

  async create(station: Station): Promise<void> {
    await dynamoClient.send(
      new PutCommand({
        TableName: this.tableName,
        Item: {
          PK: 'STATION',
          SK: `STATION#${station.id}`,
          ...station,
        },
      }),
    );
  }

  async findById(id: string): Promise<Station | null> {
    const result = await dynamoClient.send(
      new GetCommand({
        TableName: this.tableName,
        Key: {
          PK: 'STATION',
          SK: `STATION#${id}`,
        },
      }),
    );

    return (result.Item as Station) || null;
  }

  async findAll(): Promise<Station[]> {
    const result = await dynamoClient.send(
      new QueryCommand({
        TableName: this.tableName,
        KeyConditionExpression: 'PK = :pk',
        ExpressionAttributeValues: {
          ':pk': 'STATION',
        },
      }),
    );

    return (result.Items as Station[]) || [];
  }
}