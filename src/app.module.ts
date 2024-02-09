import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EntityModule} from "./entity/entity.module";
import {TokenModule} from "./tokens/token.module";

@Module({
  imports: [
      EntityModule,
      TokenModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
