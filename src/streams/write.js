import { createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import path from "path";

const write = async () => {
  const filePath = path.resolve("src/streams/files", "fileToWrite.txt");

  await pipeline(process.stdin, createWriteStream(filePath, { flags: "a" }));
};

await write();
