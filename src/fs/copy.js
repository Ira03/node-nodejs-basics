import { cp } from "node:fs/promises";
import path from "path";

import { checkIsFileExist } from "../utils/index.js";
import { ERROR_MESSAGE } from "../constants/index.js";

const copy = async () => {
  const src = path.resolve("src/fs/files");
  const dest = path.resolve("src/fs/files_copy");

  const isSrcExist = await checkIsFileExist(src);
  const isDestExist = await checkIsFileExist(dest);

  if (!isSrcExist || isDestExist) {
    throw new Error(ERROR_MESSAGE);
  }

  await cp(src, dest, { recursive: true });
};

await copy();
