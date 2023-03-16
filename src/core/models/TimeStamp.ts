import { prop } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";
import { Gender } from "../enums/gender.enum";

@ObjectType()
export class TimeStamp {
  @prop({ default: null })
  @Field(() => Date, { nullable: true })
  callTaken!: Date;

  @prop({ default: null })
  @Field(() => Date, { nullable: true })
  dispatch!: Date;

  @prop({ default: null })
  @Field(() => Date, { nullable: true })
  toTheScene!: Date;

  @prop({ default: null })
  @Field(() => Date, { nullable: true })
  atScene!: Date;

  @prop({ default: null })
  @Field(() => Date, { nullable: true })
  leftScene!: Date;

  @prop({ default: null })
  @Field(() => Date, { nullable: true })
  destination!: Date;

  @prop({ default: null })
  @Field(() => Date, { nullable: true })
  atStation!: Date;
}
