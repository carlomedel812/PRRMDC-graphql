import { ObjectType, Field, Directive } from "type-graphql";
import { getModelForClass, prop } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { BaseModel } from "./base-model";
import { UserRole } from "../core/enums/user-role.enum";
import { deprecate } from "util";

@ObjectType()
export class User extends BaseModel {
  @Field()
  readonly _id!: ObjectId;

  @prop({ default: new Date()})
  @Field(() => Date)
  createdAt!: Date;

  @prop()
  @Field(() => Date)
  updatedAt!: Date;

  @prop({ default: ""})
  @Field()
  firstName: string;

  @prop({ default: ""})
  @Field()
  lastName: string;

  @prop({ default: ""})
  @Field()
  phoneNumber!: string;

  @prop({ default: "" })
  @Field()
  email!: string;

  @prop({ default: UserRole.AGENT })
  @Field((type) => UserRole)
  role!: UserRole;

  @prop({ default: true })
  @Field()
  activated: Boolean
}

export const UserModel = getModelForClass(User);
