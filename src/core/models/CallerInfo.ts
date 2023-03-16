import { prop } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";
import { Gender } from "../enums/gender.enum";

@ObjectType()
export class CallerInfo {
  @prop()
  @Field()
  name: string;

  @prop({ default: null })
  @Field({ nullable: true })
  address: string;

  @prop({ default: null })
  @Field({ nullable: true })
  relationToPatient: string;

  @prop({ default: null })
  @Field({ nullable: true })
  age: number;

  @prop({ default: null })
  @Field({ nullable: true })
  contact: number;

  @prop({ default: null })
  @Field((type) => Gender, { nullable: true })
  gender: Gender;
}
