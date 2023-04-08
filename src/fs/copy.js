import { cp } from "node:fs/promises";

import { checkIsFileExist, createFilePath } from "../utils/index.js";
import { ERROR_MESSAGE } from "../constants/index.js";

const copy = async () => {
  const src = createFilePath("files");
  const dest = createFilePath("files_copy");

  const isSrcExist = await checkIsFileExist(src);
  const isDestExist = await checkIsFileExist(dest);

  if (!isSrcExist || isDestExist) {
    throw new Error(ERROR_MESSAGE);
  }
  
  await cp(src, dest, { recursive: true });
};

await copy();
