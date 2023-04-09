import { access } from "node:fs/promises";
import path from "path";

export const checkIsFileExist = async (file) => {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
};

export const createFilePath = (fileName = "") => {
  return path.resolve("src/fs/files", fileName);
};
