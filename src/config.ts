import dotenv from "dotenv";
import jwt from 'jsonwebtoken';

enum Environment {
  PRODUCTION = "production",
  STAGING = "staging",
  TEST = "test",
  DEVELOPMENT = "development",
}

const CURRENT_ENVIRONMENT = Environment.DEVELOPMENT;

dotenv.config({
  path: `.env.${CURRENT_ENVIRONMENT}`,
});

// Safely get the environment variable in the process
const env = (name: string): string => {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing: process.env['${name}'].`);
  }

  return value;
};

export interface Config {
  port: number;
  graphqlPath: string;
  isDev: boolean;
  mongoDB: {
    uri: string;
  };
  jwt: {
    secretKey: string;
    expiresIn: string;
  };
}

// All your secrets, keys go here
export const config: Config = {
  port: +env("PORT"),
  graphqlPath: env("GRAPHQL_PATH"),
  isDev: env("NODE_ENV") === Environment.DEVELOPMENT,
  mongoDB: {
    uri: env("MONGODB_URI"),
  },
  jwt: {
    secretKey: env("JWT_SECRET_KEY"),
    expiresIn: env("JWT_EXPIRY")
  }
};
