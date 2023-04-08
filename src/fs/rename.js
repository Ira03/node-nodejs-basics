import { rename as renameFile } from "node:fs/promises";

import { checkIsFileExist, createFilePath } from "../utils/index.js";

import { ERROR_MESSAGE } from "../constants/index.js";

const rename = async () => {
  const oldPath = createFilePath("files", "wrongFilename.txt");
  const newPath = createFilePath("files", "properFilename.md");

  const isOldPathExist = await checkIsFileExist(oldPath);
  const isNewPathExist = await checkIsFileExist(newPath);

  if (!isOldPathExist || isNewPathExist) {
    throw new Error(ERROR_MESSAGE);
  }

  await renameFile(oldPath, newPath);
};

await rename();
