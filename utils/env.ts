export const getEnv = (key: string) => {
  const ck = `NEXT_PUBLIC_${key}`;

  const v = process.env[ck];
  if (!v) throw new Error(`Invalid EnvKey:${ck}`);
  return v;
};
