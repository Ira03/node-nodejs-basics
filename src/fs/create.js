import { writeFile } from "node:fs/promises";

import { createFilePath } from "../utils/index.js";

import {
  CONTENT,
  ERROR_MESSAGE,
  FILE_EXISTS_ERROR_CODE,
} from "../constants/index.js";

const create = async () => {
  const filePath = createFilePath("fresh.txt");

  try {
    await writeFile(filePath, CONTENT, { encoding: "utf8", flag: "wx" });
  } catch (e) {
    if (e.code === FILE_EXISTS_ERROR_CODE) {
      throw new Error(ERROR_MESSAGE);
    }
  }
};

await create();
