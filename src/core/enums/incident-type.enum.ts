import { registerEnumType } from "type-graphql";

export enum IncidentType {
    MEDICAL = "Medical",
    TRAUMA = "Trauma"
}

registerEnumType(IncidentType, {
  name: "IncidentType",
});
