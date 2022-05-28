import { ObjectId } from "mongoose";
import { Column, Entity, ObjectIdColumn } from "typeorm";
import { DateCommonModel, IDateCommonModel } from "./common/date.common.entity";

export class ClassifyChildren {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column({
    type: "string",
    nullable: false,
  })
  name: string;

  @Column({
    type: "number",
    default: 0,
    nullable: false,
  })
  quantity: number;

  @Column({
    type: "number",
    nullable: false,
  })
  price: number;

  @Column({
    type: "string",
    nullable: false,
  })
  displayName: string;

  constructor(
    _id: ObjectId,
    name: string,
    quantity: number,
    price: number,
    displayName: string
  ) {
    this._id = _id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.displayName = displayName;
  }
}

export interface IClassifyModel extends IDateCommonModel {
  _id: ObjectId;
  name: string;
  description: string;
  photos: string[];
  quantity?: number;
  price?: string;
  displayName: string;
  children: ClassifyChildren[];
}

@Entity("classify")
export class ClassifyModel extends DateCommonModel implements IClassifyModel {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column("string")
  name: string;

  @Column("string")
  description: string;

  @Column({
    array: true,
  })
  photos: string[];

  @Column({
    type: "number",
    nullable: true,
  })
  quantity?: number;

  @Column({
    type: "string",
    nullable: true,
  })
  price?: string;

  @Column({
    type: "string",
    nullable: true,
  })
  displayName: string;

  @Column({
    array: true,
    default: [],
  })
  children: ClassifyChildren[];

  constructor(
    _id: ObjectId,
    name: string,
    description: string,
    photos: string[],
    displayName: string,
    children: ClassifyChildren[],
    quantity?: number,
    price?: string,
    createDate: Date = new Date(),
    updatedDate?: Date,
    deletedDate?: Date
  ) {
    super(createDate, updatedDate, deletedDate);
    this._id = _id;
    this.name = name;
    this.description = description;
    this.photos = photos;
    this.displayName = displayName;
    this.children = children;
    this.quantity = quantity;
    this.price = price;
  }
}
