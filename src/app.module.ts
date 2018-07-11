import { Module } from '@nestjs/common'
import { AppController } from 'app.controller'
import { AppService } from 'app.service'
import { AuthModule } from 'auth/auth.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PhotoModule } from 'photo/photo.module'

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot(), PhotoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
