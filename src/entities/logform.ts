import { ObjectType, Field, Directive } from "type-graphql";
import { getModelForClass, mongoose, plugin, prop } from "@typegoose/typegoose";
import { BaseModel } from "./base-model";
import { ObjectId } from "mongodb";
import { NatureOfCall } from "../core/enums/nature-of-call.enum";
import { IncidentType } from "../core/enums/incident-type.enum";
import { AreaType } from "../core/enums/area-type.enum";
import { CallerInfo } from "../core/models/CallerInfo";
import { PatientInfo } from "../core/models/PatientInfo";
import { TimeStamp } from "../core/models/TimeStamp";
import AutoIncrementFactory from 'mongoose-sequence';


// AutoIncrement now is the instance
const AutoIncrement = AutoIncrementFactory(mongoose);

@plugin(AutoIncrement, { inc_field: 'caseNo', start_seq: 0 })
@ObjectType()
export class LogForm extends BaseModel {
  @Field()
  readonly _id!: ObjectId;

  @prop()
  @Field()
  caseNo: number;

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

  @prop({ default: null })
  @Field({ nullable: true })
  massCasualty?: string;

  @prop({ default: null })
  @Field({ nullable: true })
  patientAddress: string;

  @prop({ default: null })
  @Field({ nullable: true })
  locationOfIncident: string;

  @prop({ default: null })
  @Field({ nullable: true })
  otherDetail: string;

  @prop({ default: null })
  @Field({ nullable: true })
  actionTaken: string;

  @prop({ default: null })
  @Field({ nullable: true })
  seniorResponder: string;

  @prop({ default: null })
  @Field({ nullable: true })
  juniorResponder: string;

  @prop({ default: null })
  @Field({ nullable: true })
  dirver: string;

  @prop({ default: null })
  @Field({ nullable: true })
  callTaker: string;

  @prop({ default: null })
  @Field({ nullable: true })
  dispatcher: string;

  @prop()
  @Field()
  posted: boolean;
}

export const LogFormModel = getModelForClass(LogForm);

