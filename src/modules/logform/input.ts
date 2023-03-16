import { AreaType } from "../../core/enums/area-type.enum";
import { Gender } from "../../core/enums/gender.enum";
import { IncidentType } from "../../core/enums/incident-type.enum";
import { NatureOfCall } from "../../core/enums/nature-of-call.enum";
import { PatientStatus } from "../../core/enums/patient-status.enum";
import { SortDirection } from "../../core/enums/sort-direction.enum";
import { InputType, Field } from "type-graphql";

@InputType()
export class PatientInfoInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  age?: number;

  @Field({ nullable: true })
  isCovidVaccinated?: boolean;

  @Field({ nullable: true })
  covidVaccineName?: string;

  @Field((type) => Gender, { nullable: true })
  gender?: Gender;

  @Field((type) => PatientStatus, { nullable: true })
  status?: PatientStatus;

  @Field({ nullable: true })
  bloodPressure?: string;

  @Field({ nullable: true })
  respiratoryRate?: string;

  @Field({ nullable: true })
  pulseRate?: number;

  @Field({ nullable: true })
  temperature?: number;

  @Field({ nullable: true })
  spo2?: string;

  @Field({ nullable: true })
  glasgowComaScale?: string;
}

@InputType()
export class CallerInfoInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  relationToPatient?: string;

  @Field({ nullable: true })
  age?: number;

  @Field({ nullable: true })
  contact?: number;

  @Field((type) => Gender, { nullable: true })
  gender?: Gender;
}

@InputType()
export class TimeStampInput {
  @Field(() => Date, { nullable: true })
  callTaken!: Date;

  @Field(() => Date, { nullable: true })
  dispatch!: Date;

  @Field(() => Date, { nullable: true })
  toTheScene!: Date;

  @Field(() => Date, { nullable: true })
  atScene!: Date;

  @Field(() => Date, { nullable: true })
  leftScene!: Date;

  @Field(() => Date, { nullable: true })
  destination!: Date;

  @Field(() => Date, { nullable: true })
  atStation!: Date;
}

@InputType()
export class NewLogFormInput {
  @Field(() => Date)
  date!: Date;

  @Field((type) => TimeStampInput)
  timeStamp!: TimeStampInput;

  @Field((type) => NatureOfCall)
  natureOfCall!: NatureOfCall;

  @Field({ nullable: true })
  natureOfCallOthers?: string;

  @Field((type) => IncidentType)
  incidentType!: IncidentType;

  @Field((type) => AreaType)
  areaType!: AreaType;

  @Field({ nullable: true })
  areaTypeOthers?: string;

  @Field((type) => CallerInfoInput)
  callerInfo!: CallerInfoInput;

  @Field((type) => [PatientInfoInput])
  patients!: PatientInfoInput[];

  @Field({ nullable: true })
  massCasualty?: string;

  @Field({ nullable: true })
  patientAddress?: string;

  @Field({ nullable: true })
  locationOfIncident?: string;

  @Field({ nullable: true })
  otherDetail?: string;

  @Field({ nullable: true })
  actionTaken?: string;

  @Field({ nullable: true })
  seniorResponder?: string;

  @Field({ nullable: true })
  juniorResponder?: string;

  @Field({ nullable: true })
  dirver?: string;

  @Field({ nullable: true })
  callTaker?: string;

  @Field({ nullable: true })
  dispatcher?: string;

  @Field()
  posted: boolean;
}

@InputType()
export class FiltersInput {
  @Field((type) => NatureOfCall, { nullable: true })
  natureOfCall?: NatureOfCall;

  @Field((type) => IncidentType, { nullable: true })
  incidentType?: IncidentType;

  @Field((type) => AreaType, { nullable: true })
  areaType?: AreaType;

  @Field((type) => PatientStatus, { nullable: true })
  patientStatus?: PatientStatus;

  @Field((type) => Gender, { nullable: true })
  gender?: Gender;

  @Field({ nullable: true })
  yearStart?: number;

  @Field({ nullable: true })
  yearEnd?: number;

  @Field({ nullable: true })
  generalSearch?: string
}
