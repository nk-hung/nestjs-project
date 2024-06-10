import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/product/product.module';
import { UploadModule } from './modules/upload/upload.module';

@Module({
  imports: [ProductModule, UploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
