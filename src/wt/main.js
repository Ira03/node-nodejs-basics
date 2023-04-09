import os from "os";
import path from "path";
import { Worker } from "worker_threads";

const performCalculations = async () => {
  const systemCpuCores = os.cpus();

  const filePath = path.resolve("src/wt/worker.js");

  const promises = systemCpuCores.map(
    (_, i) =>
      new Promise((resolve) => {
        const worker = new Worker(filePath, { workerData: 10 + i });

        worker.on("message", (data) => resolve({ status: "resolved", data }));
        worker.on("error", () => resolve({ status: "error", data: null }));
      })
  );

  const result = await Promise.all(promises);
  console.log(result);
};

await performCalculations();
