import { Get, Controller, UseGuards } from '@nestjs/common'
import { AppService } from './app.service'
import { AuthGuard } from '@nestjs/passport'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    return this.appService.root()
  }

  @Get('users')
  @UseGuards(AuthGuard('bearer'))
  findAll() {
    console.log('in')
    return []
  }
}
