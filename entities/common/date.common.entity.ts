import { Column } from "typeorm";

export interface IDateCommonModel {
  createdDate: Date;
  updatedDate?: Date;
  deletedDate?: Date;
}

export class DateCommonModel implements IDateCommonModel {
  @Column({
    type: Date,
    default: Date.now(),
  })
  createdDate: Date;
  @Column({
    type: Date,
    nullable: true,
  })
  updatedDate?: Date;
  @Column({
    type: Date,
  })
  deletedDate?: Date;

  constructor(
    createDate: Date = new Date(),
    updatedDate?: Date,
    deletedDate?: Date
  ) {
    this.createdDate = createDate;
    this.updatedDate = updatedDate;
    this.deletedDate = deletedDate;
  }
}
