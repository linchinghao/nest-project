import * as jwt from 'jsonwebtoken'
import { Injectable } from '@nestjs/common'
import { UsersService } from 'users/users.service'
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}
  // beartoken
  // async validateUser(token: string): Promise<any> {
  //   return await this.usersService.findOneByToken(token)
  // }

  async createToken() {
    const user: JwtPayload = { email: 'allin@qq.com' }
    const expiresIn = 3600;
    const accessToken = jwt.sign(user, 'secretKey', { expiresIn })
    return {
      expiresIn,
      accessToken,
    }
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return {};
  }
}
