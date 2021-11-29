import { registerEnumType } from "type-graphql";

export enum UserRole {
    CUSTOMER = 'Customer',
    PROVIDER = 'Provider',
    ADMIN = 'Admin',
    SUPER_ADMIN = 'Super Admin'
}

registerEnumType(UserRole, {
  name: "UserRole"
});