import { registerEnumType } from "type-graphql";

export enum AreaType {
    RESIDENTIAL = "Residential",
    RECREATIONAL = "Recreational",
    COMMERCIAL = "Commercial",
    ROADSTREET = "Road/Street",
    OTHERS = "Others"
}

registerEnumType(AreaType, {
  name: "AreaType",
});
