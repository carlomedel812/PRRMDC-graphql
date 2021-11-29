import { Resolver, Arg, Query, Mutation, ID, Authorized } from "type-graphql";
import { Service } from "typedi";
import { ObjectId } from "mongodb";

import { User } from "../../entities";
import UserService from "./service";
import { NewUserInput, UserPaginationRequest } from "./input";
import { UserConnection } from "./output";

@Service()
@Resolver()
export default class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Authorized(['Customer'])
  @Query((returns) => User)
  async getUserById(@Arg("id") id: ObjectId) {
    const user = await this.userService.getById(id);
    return user;
  }

  @Authorized()
  @Mutation((returns) => User)
  async createUser(@Arg("newUserData") newUserData: NewUserInput) {
    return await this.userService.addUser(newUserData);
  }

  @Query(() => UserConnection)
  async getAllUsers(@Arg("request") request: UserPaginationRequest) {
    return await this.userService.getPaginated(request)
  }
}



