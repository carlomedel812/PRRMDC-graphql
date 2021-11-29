import { UserRole } from "../enums/user-role.enum";

export interface IJwtPayload {
    userId: String,
    role: UserRole
}