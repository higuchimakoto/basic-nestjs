import { ItemStatus } from 'src/items/item-status.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() //Enitityとして動作させるために使用
export class Item {
  @PrimaryGeneratedColumn('uuid') //主キーとして自動採番とするため。
  id: string;

  @Column() // 通常のカラム
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  status: ItemStatus;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}
