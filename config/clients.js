import env from "./env.js";
import DBClient from "../utils/db.js";
import RedisClient from "../utils/redis.js";

export const dbClient = new DBClient({
  host: env.DB_HOST,
  port: env.DB_PORT,
  database: env.DB_NAME,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
});

export const redisClient = new RedisClient();
