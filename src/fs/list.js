import { readdir } from "node:fs/promises";
import path from "path";

import { ERROR_MESSAGE, NO_SUCH_FILE_ERROR_CODE } from "../constants/index.js";

const list = async () => {
  const filePath = path.resolve("src/fs/files");

  try {
    const filesNamesList = await readdir(filePath);
    console.log(filesNamesList);
  } catch (e) {
    if (e.code === NO_SUCH_FILE_ERROR_CODE) {
      throw new Error(ERROR_MESSAGE);
    }
  }
};

await list();
