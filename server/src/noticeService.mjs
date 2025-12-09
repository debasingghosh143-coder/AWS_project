import { ScanCommand } from "@aws-sdk/client-dynamodb";
import dynamoDB from "./dynamoDB.mjs";
import { TABLE_NAME } from "./utils.mjs";
import { DeleteCommand, PutCommand } from "@aws-sdk/lib-dynamodb";

// @ts-ignore
export const insertItem = async (item) => {
  const params = {
    TableName: TABLE_NAME,
    Item: item,
  };
  await dynamoDB.send(new PutCommand(params));
  return { message: "Item inserted" };
};

// @ts-ignore
export const deleteItemById = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: { id },
  };

  await dynamoDB.send(new DeleteCommand(params));

  return true;
};

export const getAllItems = async () => {
  const params = {
    TableName: TABLE_NAME,
  };

  const result = await dynamoDB.send(new ScanCommand(params));

  return result.Items ? result.Items : [];
};
