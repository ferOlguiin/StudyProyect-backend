import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT;
export const SECRET_PASS = process.env.SECRET_PASS;
export const URI_MONGODB = process.env.URI_MONGODB;