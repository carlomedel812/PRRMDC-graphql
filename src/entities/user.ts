import { ObjectType, Field } from "type-graphql";
import { prop } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

@ObjectType()
export class User {
  @Field()
  readonly _id!: ObjectId;

  @prop()
  @Field(() => Date)
  createdAt!: Date;

  @prop()
  @Field(() => Date)
  updatedAt!: Date;

  @prop()
  @Field()
  firstName!: string;

  @prop()
  @Field()
  lastName!: string;

  @prop({ default: true })
  @Field()
  isNewUser!: boolean;
}
