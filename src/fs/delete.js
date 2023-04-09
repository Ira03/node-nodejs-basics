import { unlink } from "node:fs/promises";

import { createFilePath } from "../utils/index.js";

import { ERROR_MESSAGE, NO_SUCH_FILE_ERROR_CODE } from "../constants/index.js";

const remove = async () => {
  const filePath = createFilePath("fileToRemove.txt");

  try {
    await unlink(filePath);
  } catch (e) {
    if (e.code === NO_SUCH_FILE_ERROR_CODE) {
      throw new Error(ERROR_MESSAGE);
    }
  }
};

await remove();
