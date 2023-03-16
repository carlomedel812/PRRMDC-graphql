import { registerEnumType } from "type-graphql";

export enum NatureOfCall {
  EMERGENCY = "Emergency",
  FIRE = "Fire",
  TRANSPORT = "Transport",
  NONEMERGENCY = "Non-Emergency",
  POLICE_MATTERS = "Police matters",
  OTHERS = "Others"
}

registerEnumType(NatureOfCall, {
  name: "NatureOfCall",
});
