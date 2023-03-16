import { SortDirection } from "../../core/enums/sort-direction.enum";
import { InputType, Field } from "type-graphql";

@InputType()
export class GenericPaginationRequest {
  @Field({ nullable: true })
  before?: string;

  @Field({ nullable: true })
  after?: string;

  @Field(() => SortDirection)
  sortDirection: SortDirection;

  @Field({ nullable: true })
  limit?: number
}
