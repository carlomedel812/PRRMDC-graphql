import { Service } from "typedi";
import { ObjectId } from "mongodb";

import UserModel from "./model";
import { User } from "../../entities";
import { NewUserInput } from "./input";

@Service() // Dependencies injection
export default class UserService {
  constructor(private readonly userModel: UserModel) {}

  public async getById(_id: ObjectId): Promise<User | null> {
    return this.userModel.getById(_id);
  }

  public async addUser(data: NewUserInput): Promise<User> {
    const newUser = await this.userModel.create(data);
    return newUser;
  }
}
