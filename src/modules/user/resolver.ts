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
}
