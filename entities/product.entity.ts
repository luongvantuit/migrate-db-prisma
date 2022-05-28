import { ObjectId } from "mongoose";
import { Column, Entity, ObjectIdColumn } from "typeorm";
import { ClassifyModel } from "./classify.entity";
import { DateCommonModel, IDateCommonModel } from "./common/date.common.entity";

export interface IProductModel extends IDateCommonModel {
  _id: ObjectId;
  name: string;
  description: string;
  category: string;
  brand: string;
  tags: string[];
  madeIn: string;
  thumbnail: string;
  // Enum<string>[]
  exportTo: string;
  // Enum<string>[]
  exportFrom: string;
  promotion?: number;
  classifies: ClassifyModel[];
  uid: ObjectId;
}

@Entity("product")
export class ProductModel extends DateCommonModel implements IProductModel {
  @ObjectIdColumn()
  _id: ObjectId;
  @Column({ type: "string" })
  name: string;

  @Column({
    type: "string",
  })
  description: string;

  @Column({
    type: "string",
  })
  category: string;
  @Column({
    type: "string",
  })
  brand: string;
  @Column({
    array: true,
  })
  tags: string[];
  @Column({
    type: "string",
  })
  madeIn: string;

  @Column({
    type: "string",
  })
  thumbnail: string;
  // Enum<string>[]

  @Column({
    type: "string",
  })
  exportTo: string;
  // Enum<string>[]

  @Column({
    type: "string",
  })
  exportFrom: string;

  @Column({
    type: "number",
    nullable: true,
  })
  promotion?: number;

  @Column()
  classifies: ClassifyModel[];

  @Column()
  uid: ObjectId;

  constructor(
    _id: ObjectId,
    name: string,
    description: string,
    category: string,
    brand: string,
    tags: string[],
    madeIn: string,
    thumbnail: string,
    exportTo: string,
    exportFrom: string,
    classifies: ClassifyModel[],
    uid: ObjectId,
    promotion?: number,
    createdDate: Date = new Date(),
    updatedDate?: Date,
    deletedDate?: Date
  ) {
    super(createdDate, updatedDate, deletedDate);
    this._id = _id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.brand = brand;
    this.tags = tags;
    this.madeIn = madeIn;
    this.thumbnail = thumbnail;
    this.exportTo = exportTo;
    this.exportFrom = exportFrom;
    this.promotion = promotion;
    this.classifies = classifies;
    this.uid = uid;
  }
}
