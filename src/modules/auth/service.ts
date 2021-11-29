import { config } from "../../config";
import { jwtUtil } from "../../utils/jwt.util";
import jwt from "jsonwebtoken";
import { IJwtPayload } from "../../core/interfaces/IJwtPayload";
import { Service } from "typedi";
import { UserRole } from "../../core/enums/user-role.enum";

@Service()
export default class AuthService {
  constructor() {}

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
      return this.createAccessToken({
          userId: 'j13h131g3g1g32k3h1u',
          role: UserRole.CUSTOMER
      })
  }
}
