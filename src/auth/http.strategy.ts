import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-http-bearer'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthService } from './auth.service'

@Injectable()
export class HttpStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super()
  }

  async validate(token: any, done: (err, payload) => void) {
    const user = await this.authService.validateUser(token)
    if (!user) {
      return done(new UnauthorizedException(), false)
    }
    done(null, user)
  }
}
