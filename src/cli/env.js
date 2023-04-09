const parseEnv = () => {
  const variables = process.env;

  const result = Object.entries(variables)
    .filter(([key]) => key.startsWith("RSS_"))
    .map(([key, value]) => `${key}=${value}`)
    .join("; ");

  console.log(result);
};

parseEnv();
