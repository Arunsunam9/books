// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";

// const JWT_SECRET = process.env.JWT_SECRET!;

// interface TokenPayload {
//   userId: string;
//   email: string;
//   name : string;
//   role : string;
// }

// export const generateToken = (payload: TokenPayload): string => {
//   return jwt.sign(payload, JWT_SECRET, { expiresIn: "1min" });
// };

// export const verifyToken = (token: string): TokenPayload => {
//   return jwt.verify(token, JWT_SECRET) as TokenPayload;
// };

// export const hashPassword = async (password: string): Promise<string> => {
//   return await bcrypt.hash(password, 10);
// };

// export const comparePassword = async (
//   password: string,
//   hash: string
// ): Promise<boolean> => {
//   return await bcrypt.compare(password, hash);
// };





import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET!;
if (!JWT_SECRET)
  throw new Error("JWT_SECRET is not defined in environment variables");

interface TokenPayload {
  userId: string;
  email: string;
  name: string;
  role: string;
}

// Generate JWT Token with extended expiration time
export const generateToken = (payload: TokenPayload): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" }); // Change to 1 hour
};

// Verify JWT Token with error handling
export const verifyToken = (token: string): TokenPayload | null => {
  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload;
  } catch (error) {
    console.error("Invalid or expired token:", error);
    return null; // Return null instead of throwing an error
  }
};

// Hash password securely
export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 10);
};

// Compare password with hashed value
export const comparePassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};
