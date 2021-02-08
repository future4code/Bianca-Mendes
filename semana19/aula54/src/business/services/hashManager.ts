import * as bcrypt from 'bcryptjs';

export const generateHash = async (plainText: string): Promise<string> => {
  const rounds = Number(process.env.BCRYPT_COST);
  const salt = await bcrypt.genSalt(rounds);
  return bcrypt.hash(plainText, salt)
}

export const comparePassword = async (plainText: string, cypherText: string): Promise<boolean> => {
  return bcrypt.compare(plainText, cypherText)
}