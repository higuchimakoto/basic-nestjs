import { Item } from 'src/entities/item.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemStatus } from './item-status.enum';

@EntityRepository(Item) //Itemのimport先がモデルではなくEntityであることに注意する。
// ジェネリクスでEntityのタイプを使用する必要がある。
export class ItemRepository extends Repository<Item> {
  async createItem(createItemDto: CreateItemDto): Promise<Item> {
    // 必要なデータを分割代入する。
    const { name, price, description } = createItemDto;
    // Repositoryから継承しているので、様々なメソッドが使える。
    const item = this.create({
      name,
      price,
      description,
      status: ItemStatus.ON_SALE,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    });
    // データベースに保存するためにsaveメソッドを使用する。
    await this.save(item);
    return item;
  }
}
