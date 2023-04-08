import { access } from "node:fs/promises";
import path from "path";

export const checkIsFileExist = async (file) => {
  try {
    await access(file);
    return true;
  } catch (error) {
    return false;
  }
};

export const createFilePath = (folder, fileName = "") => {
  return path.resolve("src", "fs", folder, fileName);
};
