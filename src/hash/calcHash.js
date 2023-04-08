import { readFile } from "node:fs/promises";
import { createHash } from "crypto";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "path";

const calculateHash = async () => {
  const hash = createHash("sha256");

  const filePath = path.resolve("src/hash/files", "fileToCalculateHashFor.txt");

  try {
    const content = await readFile(filePath);
    const hashHex = hash.update(content).digest("hex");
    console.log(hashHex);
  } catch (e) {
    console.error(e);
  }
};

await calculateHash();
