import { v4 as uuidv4 } from "uuid";
import { getAllItems, insertItem, deleteItemById } from "./noticeService.mjs";
import { TABLE_NAME } from "./utils.mjs";

// @ts-ignore
export const createNotice = async (req, res) => {
  const { title, text, author } = req.body;

  if (!title || !text) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid request!" });
  }

  try {
    const item = {
      id: uuidv4(),
      heading: title,
      content: text,
      author: author ?? "Admin",
      createdAt: new Date().toString(),
    };

    await insertItem(item, TABLE_NAME);

    return res
      .status(201)
      .json({ success: true, message: "Notice published!" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
  }
};

// @ts-ignore
export const deleteNotice = async (req, res) => {
  const { noticeId } = req.params;

  if (!noticeId) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid request!" });
  }

  console.log(noticeId);

  try {
    const result = await deleteItemById(noticeId, TABLE_NAME);

    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: "Notice not found!" });
    }

    return res.status(200).json({ success: true, message: "Notice deleted!" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
  }
};

// @ts-ignore
export const getNotices = async (req, res) => {
  try {
    const result = await getAllItems(TABLE_NAME);
    if (result.length < 1) {
      return res.status(200).json({
        success: true,
        message: "Notice not published yet!",
        data: [],
      });
    }

    // @ts-ignore
    const data = result.map((obj) => {
      // @ts-ignore
      const dateObj = new Date(obj.createdAt.S);

      const time = dateObj.toLocaleTimeString("en-IN");
      const date = dateObj.toLocaleDateString("en-IN");

      return {
        noticeId: obj.id.S,
        title: obj.heading.S,
        text: obj.content.S,
        author: obj.author.S,
        date: date,
        time: time,
      };
    });

    return res.status(200).json({
      success: true,
      message: "Notice fetch successful!",
      data,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
  }
};
