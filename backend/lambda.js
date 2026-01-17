import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  PutCommand,
  ScanCommand,
  UpdateCommand,
  DeleteCommand
} from "@aws-sdk/lib-dynamodb";
import { randomUUID } from "crypto";

const client = new DynamoDBClient({});
const ddb = DynamoDBDocumentClient.from(client);

const TABLE_NAME = "Schedules";

export const handler = async (event) => {
  try {
    const method = event.httpMethod;

    // CREATE
    if (method === "POST") {
      const body = JSON.parse(event.body);

      const item = {
        id: randomUUID(),
        title: body.title,
        date: body.date,
        time: body.time,
        description: body.description ?? "",
        createdAt: new Date().toISOString()
      };

      await ddb.send(
        new PutCommand({
          TableName: TABLE_NAME,
          Item: item
        })
      );

      return response(201, item);
    }

    // READ
    if (method === "GET") {
      const data = await ddb.send(
        new ScanCommand({
          TableName: TABLE_NAME
        })
      );

      return response(200, data.Items ?? []);
    }

    // UPDATE
    if (method === "PUT") {
      const body = JSON.parse(event.body);

      await ddb.send(
        new UpdateCommand({
          TableName: TABLE_NAME,
          Key: { id: body.id },
          UpdateExpression:
            "SET title = :t, #d = :d, #ti = :ti, description = :ds",
          ExpressionAttributeNames: {
            "#d": "date",
            "#ti": "time"
          },
          ExpressionAttributeValues: {
            ":t": body.title,
            ":d": body.date,
            ":ti": body.time,
            ":ds": body.description
          }
        })
      );

      return response(200, { message: "Schedule updated" });
    }

    // DELETE
    if (method === "DELETE") {
      const { id } = JSON.parse(event.body);

      await ddb.send(
        new DeleteCommand({
          TableName: TABLE_NAME,
          Key: { id }
        })
      );

      return response(200, { message: "Schedule deleted" });
    }

    return response(400, { message: "Invalid HTTP method" });

  } catch (error) {
    console.error("Lambda Error:", error);
    return response(500, { error: error.message });
  }
};

const response = (statusCode, body) => ({
  statusCode,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS"
  },
  body: JSON.stringify(body)
});
