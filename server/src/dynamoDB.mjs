import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { AWS_REGION } from "./utils.mjs";

// @ts-ignore
const client = new DynamoDBClient({
  region: AWS_REGION,
});

const dynamoDB = DynamoDBDocumentClient.from(client);

export default dynamoDB;
