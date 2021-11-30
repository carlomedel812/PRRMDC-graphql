import { config } from "../../config";
import { jwtUtil } from "../../utils/jwt.util";
import jwt from "jsonwebtoken";
import { IJwtPayload } from "../../core/interfaces/IJwtPayload";
import { Service } from "typedi";
import { UserRole } from "../../core/enums/user-role.enum";
import UserService from "../user/service";
import { User } from "../../entities";
import { DocumentType } from "@typegoose/typegoose";

@Service()
export default class AuthService {
  constructor(private readonly userService: UserService) {}

  public async createAccessToken(payload: IJwtPayload) {
    const jwtOptions: jwt.SignOptions = {
      expiresIn: config.jwt.expiresIn,
    };

    return jwtUtil.createToken(payload, config.jwt.secretKey, jwtOptions);
  }

  public async validateAccessToken(token: string) {
    const secretKey = config.jwt.secretKey;
    const payload = jwtUtil.validateToken<IJwtPayload>(token, secretKey);

    return payload;
  }

  public async validateFirebaseToken(token: String) {
    // TODO: integrage firebase admin sdk here.
    const isNewUser = false;
    const phoneNumber = "091234455554";
    let user: any;

    if (isNewUser) {
      user = await this.userService.createNewUser({ phoneNumber });
    } else {
      user = await this.userService.getByPhoneNumber(phoneNumber)
    }

    return this.createAccessToken({
      userId: user._id.toHexString(),
      role: UserRole.CUSTOMER,
    });
  }
}
