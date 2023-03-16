import { prop } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";
import { Gender } from "../enums/gender.enum";
import { PatientStatus } from "../enums/patient-status.enum";

@ObjectType()
export class PatientInfo {
  @prop()
  @Field()
  name: string;

  @prop()
  @Field()
  age: number;

  @prop()
  @Field()
  isCovidVaccinated: boolean;

  @prop()
  @Field()
  covidVaccineName: string;

  @prop()
  @Field((type) => Gender)
  gender: Gender;

  @prop()
  @Field((type) => PatientStatus)
  status: PatientStatus;

  @prop()
  @Field()
  bloodPressure: string;

  @prop()
  @Field()
  respiratoryRate: string;

  @prop()
  @Field()
  pulseRate: number;

  @prop()
  @Field()
  temperature: number;

  @prop()
  @Field()
  spo2: string;

  @prop()
  @Field()
  glasgowComaScale: string;
}
