import { createReadStream } from "node:fs";
import path from "path";

const read = async () => {
  const filePath = path.resolve("src/streams/files", "fileToRead.txt");

  createReadStream(filePath).pipe(process.stdout);
};

await read();
