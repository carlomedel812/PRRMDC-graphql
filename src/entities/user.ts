import { ObjectType, Field } from "type-graphql";
import { getModelForClass, prop } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { BaseModel } from "./base-model";
import { UserRole } from "../core/enums/user-role.enum";

@ObjectType()
export class User extends BaseModel {
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

  @prop()
  @Field()
  phoneNumber!: string;

  @prop()
  @Field(type => UserRole)
  role!: UserRole
}

export const UserModel = getModelForClass(User);