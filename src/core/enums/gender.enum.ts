import { registerEnumType } from "type-graphql";

export enum Gender {
    MALE = "Male",
    FEMALE = "FEMALE"
}

registerEnumType(Gender, {
  name: "Gender",
});
