import { registerEnumType } from "type-graphql";

export enum PatientStatus {
    CONSCIOUS = "Conscious",
    UNCONSCIOUS = "Unconscious"
}

registerEnumType(PatientStatus, {
  name: "PatientStatus",
});
