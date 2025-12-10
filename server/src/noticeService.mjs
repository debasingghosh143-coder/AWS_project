import { ScanCommand } from "@aws-sdk/client-dynamodb";
import dynamoDB from "./dynamoDB.mjs";
import { DeleteCommand, PutCommand } from "@aws-sdk/lib-dynamodb";

// @ts-ignore
export const insertItem = async (item, tableName) => {
  const params = {
    TableName: tableName,
    Item: item,
  };
  await dynamoDB.send(new PutCommand(params));
  return { message: "Item inserted" };
};

// @ts-ignore
export const deleteItemById = async (id, tableName) => {
  const params = {
    TableName: tableName,
    Key: { id },
  };

  await dynamoDB.send(new DeleteCommand(params));

  return true;
};

// @ts-ignore
export const getAllItems = async (tableName) => {
  const params = {
    TableName: tableName,
  };

  const result = await dynamoDB.send(new ScanCommand(params));

  return result.Items ? result.Items : [];
};
