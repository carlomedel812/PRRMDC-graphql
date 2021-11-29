import Container from "typedi";
import { ApolloServer } from "apollo-server-express";

import { config } from "../../config";
import { buildSchema } from "../../utils";
import { jwtUtil } from "../../utils/jwt.util";
import { IJwtPayload } from "../../core/interfaces/IJwtPayload";

export default async () => {
  const schema = await buildSchema();

  const server = new ApolloServer({
    schema,
    playground: config.isDev,
    context: ({ req }) => {
      // Note: This example uses the `req` argument to access headers,
      // but the arguments received by `context` vary by integration.
      // This means they vary for Express, Koa, Lambda, etc.
      //
      // To find out the correct arguments for a specific integration,
      // see https://www.apollographql.com/docs/apollo-server/api/apollo-server/#middleware-specific-context-fields
   
      // Get the user token from the headers.
      const token = req.headers.authorization || null;
      let user = null

      if (token) {
       const secretKey = config.jwt.secretKey;
       user = jwtUtil.validateToken<IJwtPayload>(token, secretKey);
      }
   
      // Try to retrieve a user with the token
      // const user = getUser(token);
   
      // Add the user to the context
      return { user };
    },
  });

  return server;
};
