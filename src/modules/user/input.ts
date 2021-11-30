import { Field, InputType, ID } from "type-graphql";
import { MaxLength, MinLength } from "class-validator";
import { UserRole } from "../../core/enums/user-role.enum";
import { User } from "../../entities";
import { SortDirection } from "../../core/enums/sort-direction.enum";

@InputType()
export class UpdateUserInput {
  @Field()
  @MaxLength(50)
  @MinLength(1)
  firstName: string;

  @Field()
  @MaxLength(50)
  @MinLength(1)
  lastName: string;

  @Field()
  phoneNumber: string;

  @Field(() => Date)
  updatedAt: Date;
}

@InputType()
export class UserPaginationRequest {
  @Field({ nullable: true })
  before?: string;

  @Field({ nullable: true })
  after?: string;

  @Field(() => SortDirection)
  sortDirection: SortDirection;

  @Field({ nullable: true })
  limit?: number
}
