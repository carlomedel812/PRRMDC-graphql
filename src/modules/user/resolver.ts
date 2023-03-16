import { Resolver, Arg, Query, Mutation, ID, Authorized } from "type-graphql";
import { Service } from "typedi";
import { ObjectId } from "mongodb";

import { User } from "../../entities";
import UserService from "./service";
import { UpdateUserInput, UserPaginationRequest } from "./input";
import { UserConnection } from "./output";
import { UserRole } from "../../core/enums/user-role.enum";

@Service()
@Resolver()
export default class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Authorized([UserRole.AGENT])
  @Query((returns) => User)
  async getUserById(@Arg("id") id: ObjectId) {
    const user = await this.userService.getById(id);
    return user;
  }

  @Authorized()
  @Mutation(() => User)
  async updateUser(
    @Arg("userId") userId: string,
    @Arg("newUserData") newUserData: UpdateUserInput
  ) {
    return await this.userService.updateUser(userId, newUserData);
  }

  @Authorized([UserRole.SUPER_ADMIN])
  @Query(() => UserConnection)
  async getAllUsers(@Arg("request") request: UserPaginationRequest) {
    return await this.userService.getPaginated(request);
  }
}
