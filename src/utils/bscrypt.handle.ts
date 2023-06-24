const bcryptjs = require("bcryptjs");

const encrypt = async (pass: string) => {
  const passwordHash = await bcryptjs.hash(pass, 8);
  return passwordHash;
};

const verified = async (pass: string, passHash: string) => {
  const isCorrect = await bcryptjs.compare(pass, passHash);
  return isCorrect;
};

export { verified, encrypt };
