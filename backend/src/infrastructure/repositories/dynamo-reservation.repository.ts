import {
  PutCommand,
  GetCommand,
  QueryCommand,
} from '@aws-sdk/lib-dynamodb';

import { Reservation } from '../../domain/entities/reservation.entity';
import { ReservationRepository } from '../../domain/repositories/reservation.repository.interface';
import { dynamoClient } from '../database/dynamo.client';

export class DynamoReservationRepository implements ReservationRepository {
  private readonly tableName = 'UrbanBikeTable';

  async create(reservation: Reservation): Promise<void> {
    await dynamoClient.send(
      new PutCommand({
        TableName: this.tableName,
        Item: {
          PK: 'RESERVATION',
          SK: `RESERVATION#${reservation.id}`,

          GSI2PK: `USER#${reservation.userId}`,
          GSI2SK: `RESERVATION#${reservation.startTime}`,

          ...reservation,
        },
      }),
    );
  }

  async findById(id: string): Promise<Reservation | null> {
    const result = await dynamoClient.send(
      new GetCommand({
        TableName: this.tableName,
        Key: {
          PK: 'RESERVATION',
          SK: `RESERVATION#${id}`,
        },
      }),
    );

    return (result.Item as Reservation) || null;
  }

  async findActiveByUser(userId: string): Promise<Reservation[]> {
    const result = await dynamoClient.send(
      new QueryCommand({
        TableName: this.tableName,
        IndexName: 'GSI2',
        KeyConditionExpression: 'GSI2PK = :gsi2pk',
        ExpressionAttributeValues: {
          ':gsi2pk': `USER#${userId}`,
        },
      }),
    );

    const reservations = (result.Items as Reservation[]) || [];

    return reservations.filter(
      (reservation) => reservation.status === 'ACTIVE',
    );
  }

  async update(reservation: Reservation): Promise<void> {
    await this.create(reservation);
  }
}