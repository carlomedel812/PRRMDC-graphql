import { LogForm } from "../../entities/logform";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { UserRole } from "../../core/enums/user-role.enum";
import { GenericPaginationRequest } from "../shared/GenericPaginationRequest";
import { FiltersInput, NewLogFormInput } from "./input";
import { LogFormConnection } from "./output";
import LogFormService from "./service";
import { ObjectId } from "mongodb";
import { NatureOfCall } from "../../core/enums/nature-of-call.enum";


@Service()
@Resolver()
export default class LogFormResolver {
  constructor(private readonly logFormService: LogFormService) {}

  @Query(() => LogFormConnection)
  async getAllLogs(@Arg("request") request: GenericPaginationRequest,  @Arg("filters", { nullable: true }) filters?: FiltersInput) {
    return await this.logFormService.getPaginated(request, filters);
  }

  @Query(() => LogForm)
  async getLog(@Arg("id") id: ObjectId) {
    return await this.logFormService.getLogForm(id);
  }


  @Mutation(() => LogForm)
  async addLogForm(@Arg("request") request: NewLogFormInput) {
    return await this.logFormService.createNewLogForm(request);
  }
}
