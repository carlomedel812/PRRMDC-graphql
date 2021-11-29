import AuthResolver from "./auth/resolver";
import UserResolver from "./user/resolver";

// Important: Add all your module's resolver in this
export const resolvers: [Function, ...Function[]] = [
  AuthResolver,
  UserResolver
];
