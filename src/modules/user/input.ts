import { Field, InputType, ID } from "type-graphql";
import { MaxLength, MinLength } from "class-validator";

@InputType()
export class NewUserInput {
  @Field()
  @MaxLength(50)
  @MinLength(1)
  firstName: string;

  @Field()
  @MaxLength(50)
  @MinLength(1)
  lastName: string;
}
