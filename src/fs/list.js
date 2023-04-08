import { readdir } from "node:fs/promises";

import { createFilePath } from "../utils/index.js";

import { ERROR_MESSAGE, NO_SUCH_FILE_ERROR_CODE } from "../constants/index.js";

const list = async () => {
  const path = createFilePath("files");

  try {
    const filesNamesList = await readdir(path);
    console.log(filesNamesList);
  } catch (e) {
    if (e.code === NO_SUCH_FILE_ERROR_CODE) {
      throw new Error(ERROR_MESSAGE);
    }
  }
};

await list();
