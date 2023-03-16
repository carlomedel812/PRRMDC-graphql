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

  @Field()
  age: number;

  @Field()
  isCovidVaccinated: boolean;

  @Field()
  covidVaccineName: string;

  @Field((type) => Gender)
  gender: Gender;

  @Field((type) => PatientStatus)
  status: PatientStatus;

  @Field()
  bloodPressure: string;

  @Field()
  respiratoryRate: string;

  @Field()
  pulseRate: number;

  @Field()
  temperature: number;

  @Field()
  spo2: string;

  @Field()
  glasgowComaScale: string;
}

@InputType()
export class CallerInfoInput {
  @Field()
  name: string;

  @Field()
  address: string;

  @Field()
  relationToPatient: string;

  @Field()
  age: number;

  @Field()
  contact: number;

  @Field((type) => Gender)
  gender: Gender;
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

  @Field()
  natureOfCallOthers: string;

  @Field((type) => IncidentType)
  incidentType!: IncidentType;

  @Field((type) => AreaType)
  areaType!: AreaType;

  @Field()
  areaTypeOthers: string;

  @Field((type) => CallerInfoInput)
  callerInfo!: CallerInfoInput;

  @Field((type) => [PatientInfoInput])
  patients!: PatientInfoInput[];

  @Field()
  massCasualty!: string;

  @Field()
  patientAddress: string;

  @Field()
  locationOfIncident: string;

  @Field()
  otherDetail: string;

  @Field()
  actionTaken: string;

  @Field()
  seniorResponder: string;

  @Field()
  juniorResponder: string;

  @Field()
  dirver: string;

  @Field()
  callTaker: string;

  @Field()
  dispatcher: string;

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
