import { createGzip } from "zlib";
import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "fs";
import path from "path";

const compress = async () => {
  const filePath = path.resolve("src/zip/files", "fileToCompress.txt");
  const archivePath = path.resolve("src/zip/files", "archive.gz");

  const readStream = createReadStream(filePath);
  const writeStream = createWriteStream(archivePath);

  await pipeline(readStream, createGzip(), writeStream);
};

await compress();
