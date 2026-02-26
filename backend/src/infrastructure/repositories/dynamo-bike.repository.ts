import {
  PutCommand,
  GetCommand,
  QueryCommand,
  DeleteCommand,
} from '@aws-sdk/lib-dynamodb';

import { Bike } from '../../domain/entities/bike.entity';
import { BikeRepository } from '../../domain/repositories/bike.repository.interface';
import { dynamoClient } from '../database/dynamo.client';

export class DynamoBikeRepository implements BikeRepository {
  private readonly tableName = 'UrbanBikeTable';

  async create(bike: Bike): Promise<void> {
    await dynamoClient.send(
      new PutCommand({
        TableName: this.tableName,
        Item: {
          PK: 'BIKE',
          SK: `BIKE#${bike.id}`,

          GSI1PK: `STATION#${bike.stationId}`,
          GSI1SK: `BIKE#${bike.id}`,

          ...bike,
        },
      }),
    );
  }

  async findById(id: string): Promise<Bike | null> {
    const result = await dynamoClient.send(
      new GetCommand({
        TableName: this.tableName,
        Key: {
          PK: 'BIKE',
          SK: `BIKE#${id}`,
        },
      }),
    );

    return (result.Item as Bike) || null;
  }

  async findAll(): Promise<Bike[]> {
    const result = await dynamoClient.send(
      new QueryCommand({
        TableName: this.tableName,
        KeyConditionExpression: 'PK = :pk',
        ExpressionAttributeValues: {
          ':pk': 'BIKE',
        },
      }),
    );

    return (result.Items as Bike[]) || [];
  }

  async findAvailableByStation(stationId: string): Promise<Bike[]> {
    const result = await dynamoClient.send(
      new QueryCommand({
        TableName: this.tableName,
        IndexName: 'GSI1',
        KeyConditionExpression: 'GSI1PK = :gsi1pk',
        ExpressionAttributeValues: {
          ':gsi1pk': `STATION#${stationId}`,
        },
      }),
    );

    const bikes = (result.Items as Bike[]) || [];

    return bikes.filter((bike) => bike.status === 'AVAILABLE');
  }

  async update(bike: Bike): Promise<void> {
    await this.create(bike);
  }

  async delete(id: string): Promise<void> {
    await dynamoClient.send(
      new DeleteCommand({
        TableName: this.tableName,
        Key: {
          PK: 'BIKE',
          SK: `BIKE#${id}`,
        },
      }),
    );
  }
}