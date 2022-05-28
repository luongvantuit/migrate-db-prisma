import { Column, Entity, ObjectIdColumn } from "typeorm";
import { ObjectId } from "mongoose";
import { AddressModel } from "./address.entity";

export interface IPersonModel {
  _id: ObjectId;
  name: string;
  email: string;
  phone: string;
  dob?: string;
  address: AddressModel;
}

@Entity("person")
export class PersonModel implements IPersonModel {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column({
    type: "string",
  })
  name: string;

  @Column({
    type: "string",
  })
  email: string;

  @Column({
    type: "string",
  })
  phone: string;

  @Column({
    type: "string",
    nullable: true,
  })
  dob?: string;

  @Column()
  address: AddressModel;
  constructor(
    _id: ObjectId,
    name: string,
    email: string,
    phone: string,
    address: AddressModel,
    dob?: string
  ) {
    this._id = _id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.dob = dob;
    this.address = address;
  }
}
