import { createGunzip } from "zlib";
import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "fs";
import path from "path";

const decompress = async () => {
  const filePath = path.resolve("src/zip/files", "fileToCompress.txt");
  const archivePath = path.resolve("src/zip/files", "archive.gz");

  const readStream = createReadStream(archivePath);
  const writeStream = createWriteStream(filePath);

  await pipeline(readStream, createGunzip(), writeStream);
};

await decompress();
