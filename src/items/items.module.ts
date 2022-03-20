import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { ItemRepository } from './item.repository';

@Module({
  // １つの機能に閉じた設定なのでforFeatureを使用する
  imports: [TypeOrmModule.forFeature([ItemRepository])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
