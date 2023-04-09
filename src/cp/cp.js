import { fork } from "node:child_process";
import path from "path";

const spawnChildProcess = async (args) => {
  const filePath = path.resolve("src/cp/files/script.js");
  const child = fork(filePath, args, { silent: true });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["hello", "world"]);
