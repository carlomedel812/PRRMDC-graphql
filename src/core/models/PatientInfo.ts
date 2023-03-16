import { prop } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";
import { Gender } from "../enums/gender.enum";
import { PatientStatus } from "../enums/patient-status.enum";

@ObjectType()
export class PatientInfo {
  @prop()
  @Field({ nullable: true })
  name?: string;

  @prop({ default: null })
  @Field({ nullable: true })
  age: number;

  @prop({ default: null })
  @Field({ nullable: true })
  isCovidVaccinated: boolean;

  @prop({ default: null })
  @Field({ nullable: true })
  covidVaccineName: string;

  @prop({ default: null })
  @Field((type) => Gender, { nullable: true })
  gender: Gender;

  @prop({ default: null })
  @Field((type) => PatientStatus, { nullable: true })
  status: PatientStatus;

  @prop({ default: null })
  @Field({ nullable: true })
  bloodPressure: string;

  @prop({ default: null })
  @Field({ nullable: true })
  respiratoryRate: string;

  @prop({ default: null })
  @Field({ nullable: true })
  pulseRate: number;

  @prop({ default: null })
  @Field({ nullable: true })
  temperature: number;

  @prop({ default: null })
  @Field({ nullable: true })
  spo2: string;

  @prop({ default: null })
  @Field({ nullable: true })
  glasgowComaScale: string;
}
