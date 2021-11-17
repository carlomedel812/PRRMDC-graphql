import { Resolver, Arg, Query, Mutation, ID } from "type-graphql";
import { Service } from "typedi";
import { ObjectId } from "mongodb";

import { User } from "../../entities";
import UserService from "./service";
import { NewUserInput } from "./input";

/*
  IMPORTANT: Your business logic must be in the service!
*/

@Service() // Dependencies injection
@Resolver((of) => User)
export default class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => User)
  async getUser(@Arg("id") id: ObjectId) {
    const user = await this.userService.getById(id);

    return user;
  }

  @Mutation((returns) => User)
  async createUser(
    @Arg("newUserData") newUserData: NewUserInput
  ): Promise<User> {
    const user = await this.userService.addUser(newUserData);
    return user;
  }
}
