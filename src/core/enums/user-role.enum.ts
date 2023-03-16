import { registerEnumType } from "type-graphql";

export enum UserRole {
    AGENT = "Agent",
    ADMIN = 'Admin',
    SUPER_ADMIN = 'Super Admin'
}

registerEnumType(UserRole, {
  name: "UserRole"
});