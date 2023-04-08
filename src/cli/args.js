const parseArgs = () => {
  const args = process.argv.slice(2);

  const result = args
    .reduce((acc, item, i, array) => {
      if (item.startsWith("--")) {
        const key = item.replace("--", "");
        const value = array[i + 1];
        acc.push(`${key} is ${value}`);
      }
      return acc;
    }, [])
    .join(", ");

  console.log(result);
};

parseArgs();
