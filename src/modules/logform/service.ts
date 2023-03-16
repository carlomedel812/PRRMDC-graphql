import { Service } from "typedi";
import { ObjectId } from "mongodb";
import { GenericPaginationRequest } from "../shared/GenericPaginationRequest";
import { LogForm, LogFormModel } from "../../entities/logform";
import { SortDirection } from "../../core/enums/sort-direction.enum";
import { FiltersInput, NewLogFormInput } from "./input";

// import UserModel from "./model";

@Service() // Dependencies injection
export default class LogFormService {
  constructor() {}

  public async createNewLogForm(input: NewLogFormInput) {
    const form = new LogFormModel(input);
    return form.save();
  }

  public async getPaginated(
    request: GenericPaginationRequest,
    filters?: FiltersInput
  ) {
    let query: Record<string, any> = {};

    if (filters?.generalSearch) {
      query = {
        $or: [
          {
            "callerInfo.name": { $regex: filters.generalSearch, $options: "i" },
          },
          {
            patients: {
              $all: [
                { name: { $regex: filters.generalSearch, $options: "i" } },
              ],
            },
          },
        ],
      };
    }

    if (filters?.natureOfCall) {
      query.natureOfCall = filters?.natureOfCall;
    }

    if (filters?.areaType) {
      query.areaType = filters?.areaType;
    }

    if (filters?.incidentType) {
      query.incidentType = filters?.incidentType;
    }

    if (filters?.gender) {
      query.gender = filters?.gender;
    }

    if (filters?.patientStatus) {
      query.patientStatus = filters?.patientStatus;
    }

    if (filters?.yearStart) {
      let yearEnd =
        filters?.yearEnd && filters.yearEnd >= filters.yearStart
          ? filters.yearEnd
          : filters.yearStart;
      let start = new Date(filters.yearStart, 1, 1);
      let end = new Date(yearEnd, 12, 31);

      query.date = { $gte: start, $lt: end };
    }

    let result = LogFormModel.cursorPaginate<LogForm>({
      next: request.after,
      previous: request.before,
      paginatedField: "date",
      sortAscending: request.sortDirection === SortDirection.ASC ? true : false,
      limit: request.limit ?? 10,
      query: query,
    });

    return result;
  }
}
