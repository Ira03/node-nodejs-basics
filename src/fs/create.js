import { writeFile } from "node:fs/promises";

import { createFilePath } from "../utils/index.js";
import { CONTENT, ERROR_MESSAGE } from "../constants/index.js";

const create = async () => {
  const filePath = createFilePath("files", "fresh.txt");

  try {
    await writeFile(filePath, CONTENT, { encoding: "utf8", flag: "wx" });
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await create();
