import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "token.1010101";

const generateToken = async (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "1h",
  });
  return jwt;
};
const verifyToken = (jwt: string) => {
  const isOK = verify(jwt, JWT_SECRET);
  return isOK;
};

export { generateToken, verifyToken };
