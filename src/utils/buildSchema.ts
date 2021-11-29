import Container from "typedi";
import { ObjectId } from "mongodb";
import {
  AuthChecker,
  buildSchema as typeGraphqlBuildSchema,
} from "type-graphql";

import { resolvers } from "../modules";

import { ObjectIdScalar } from "./";
import { User } from "../entities";

interface IUserJwt {
  user: {
    userId: string;
    role: string;
    iat: number;
    exp: number;
  };
}

export const customAuthChecker: AuthChecker<IUserJwt> = (
  { root, args, context, info },
  roles
) => {
  let hasAccess = false;

  if (context.user != null) {
    hasAccess = true;
    if (roles.length > 0) {
      hasAccess = roles.includes(context.user.role);
    }
  }

  return hasAccess;
};

// Here goes your schema building bit, doing it this way allows us to use it in the tests as well!
export const buildSchema = () =>
  typeGraphqlBuildSchema({
    resolvers,
    container: Container,
    scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
    authChecker: customAuthChecker,
  });
