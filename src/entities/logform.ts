import { ObjectType, Field, Directive } from "type-graphql";
import { getModelForClass, prop } from "@typegoose/typegoose";
import { BaseModel } from "./base-model";
import { ObjectId } from "mongodb";
import { NatureOfCall } from "../core/enums/nature-of-call.enum";
import { IncidentType } from "../core/enums/incident-type.enum";
import { AreaType } from "../core/enums/area-type.enum";
import { CallerInfo } from "../core/models/CallerInfo";
import { PatientInfo } from "../core/models/PatientInfo";
import { TimeStamp } from "../core/models/TimeStamp";

@ObjectType()
export class LogForm extends BaseModel {
  @Field()
  readonly _id!: ObjectId;

  @prop({ default: new Date() })
  @Field(() => Date)
  createdDate!: Date;

  @prop({ default: new Date() })
  @Field(() => Date)
  date!: Date;

  @prop()
  @Field((type) => TimeStamp)
  timeStamp!: TimeStamp;

  @prop()
  @Field((type) => NatureOfCall)
  natureOfCall!: NatureOfCall;

  @prop()
  @Field()
  natureOfCallOthers: string;

  @prop()
  @Field((type) => IncidentType)
  incidentType!: IncidentType;

  @prop()
  @Field((type) => AreaType)
  areaType!: AreaType;

  @prop()
  @Field()
  areaTypeOthers: string;

  @prop()
  @Field((type) => CallerInfo)
  callerInfo!: CallerInfo;

  @prop()
  @Field((type) => [PatientInfo])
  patients!: PatientInfo[];

  @prop()
  @Field()
  massCasualty!: string;

  @prop()
  @Field()
  patientAddress: string;

  @prop()
  @Field()
  locationOfIncident: string;

  @prop()
  @Field()
  otherDetail: string;

  @prop()
  @Field()
  actionTaken: string;

  @prop()
  @Field()
  seniorResponder: string;

  @prop()
  @Field()
  juniorResponder: string;

  @prop()
  @Field()
  dirver: string;

  @prop()
  @Field()
  callTaker: string;

  @prop()
  @Field()
  dispatcher: string;

  @prop()
  @Field()
  posted: boolean;
}

export const LogFormModel = getModelForClass(LogForm);
