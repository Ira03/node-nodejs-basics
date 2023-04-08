import { readFile } from "node:fs/promises";

import { createFilePath } from "../utils/index.js";

import { ERROR_MESSAGE } from "../constants/index.js";

const read = async () => {
  const path = createFilePath("fileToRead.txt");

  try {
    const content = await readFile(path, "utf8");
    console.log(content);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await read();
