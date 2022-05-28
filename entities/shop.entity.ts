import { ObjectId } from "mongoose";
import { Column, Entity, ObjectIdColumn } from "typeorm";
import { DateCommonModel, IDateCommonModel } from "./common/date.common.entity";

export interface IShopModel extends IDateCommonModel {
  _id: ObjectId;
  name: string;
  description: string;
  sellingCategories: string[];
  // Enum<string>[]
  exportTo?: string;
}

@Entity("shop")
export class ShopModel extends DateCommonModel implements IShopModel {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column({
    type: "string",
  })
  name: string;
  @Column({
    type: "string",
  })
  description: string;
  @Column({
    array: true,
  })
  sellingCategories: string[];
  // Enum<string>[]
  @Column({
    type: "string",
    nullable: true,
  })
  exportTo?: string;
  constructor(
    _id: ObjectId,
    name: string,
    description: string,
    sellingCategories: string[],
    exportTo?: string,
    createdDate: Date = new Date(),
    updatedDate?: Date,
    deletedDate?: Date
  ) {
    super(createdDate, updatedDate, deletedDate);
    this._id = _id;
    this.name = name;
    this.description = description;
    this.sellingCategories = sellingCategories;
    this.exportTo = exportTo;
  }
}
