import { Resolver, Arg, Query, Mutation, ID, Authorized } from "type-graphql";
import { Service } from "typedi";
import { ObjectId } from "mongodb";
import AuthService from "./service";
import { LoginResponse } from "./output";

@Service()
@Resolver()
export default class AuthResolver {
  constructor(private readonly authService: AuthService) {}


  @Mutation(() => LoginResponse)
  async login(@Arg("token") token: string) {
    const generatedToken = await this.authService.validateFirebaseToken(token);
    const response: LoginResponse = {
      accessToken: generatedToken
    };

    return response;
  }
}



