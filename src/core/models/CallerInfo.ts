import { prop } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";
import { Gender } from "../enums/gender.enum";

@ObjectType()
export class CallerInfo {
  @prop()
  @Field()
  name: string;

  @prop()
  @Field()
  address: string;

  @prop()
  @Field()
  relationToPatient: string;

  @prop()
  @Field()
  age: number;

  @prop()
  @Field()
  contact: number;

  @prop()
  @Field((type) => Gender)
  gender: Gender;
}
