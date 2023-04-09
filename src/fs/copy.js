import { cp } from "node:fs/promises";
import path from "path";

import { ERROR_MESSAGE } from "../constants/index.js";

const copy = async () => {
  const src = path.resolve("src/fs/files");
  const dest = path.resolve("src/fs/files_copy");

  try {
    await cp(src, dest, { recursive: true, force: false, errorOnExist: true });
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await copy();
