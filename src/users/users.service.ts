import { Injectable } from '@nestjs/common'

@Injectable()
export class UsersService {
  async findOneByToken(token: string) {
    console.log('token', token)
    return null
  }
}
