import { Service } from "typedi";
import { ObjectId } from "mongodb";

// import UserModel from "./model";

import { User, UserModel } from "../../entities";
import { NewUserInput, UserPaginationRequest } from "./input";
import { UserRole } from "../../core/enums/user-role.enum";
import { SortDirection } from "../../core/enums/sort-direction.enum";

@Service() // Dependencies injection
export default class UserService {
  constructor() {}

  public async getById(_id: ObjectId): Promise<User | null> {
    return UserModel.findById(_id);
  }

  public async addUser(data: NewUserInput) {
    const form = new UserModel(data);
    const currentDate = new Date();
    form.createdAt = currentDate;
    form.updatedAt = currentDate;
    return form.save();
  }

  public async getPaginated(request: UserPaginationRequest) {
    let result = UserModel.cursorPaginate<User>({
      next: request.after,
      previous: request.before,
      paginatedField: 'firstName',
      sortAscending: request.sortDirection === SortDirection.ASC  ? true : false,
      limit: request.limit ?? 10,
    })

    return result;
  }
}
