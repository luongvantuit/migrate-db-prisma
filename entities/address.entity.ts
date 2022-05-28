import { ObjectId } from "mongoose";
import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";
import { ADDRESS_TYPE_ENUM } from "./enums/address-type.enum";

export interface IAddressModel {
  _id: ObjectId;
  uid: ObjectId;
  street: string;
  city: string;
  state: string;
  postCode: string;
  country: string;
  def: boolean;
  type: ADDRESS_TYPE_ENUM;
}

@Entity("address")
export class AddressModel implements IAddressModel {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  uid: ObjectId;

  @Column({
    type: "string",
    nullable: false,
  })
  street: string;

  @Column({
    type: "string",
    nullable: false,
  })
  city: string;
  @Column({
    type: "string",
    nullable: false,
  })
  state: string;
  @Column({
    type: "string",
    nullable: false,
  })
  postCode: string;
  @Column({
    type: "string",
    nullable: false,
  })
  country: string;
  @Column({
    type: "boolean",
    nullable: false,
  })
  @Column({
    type: "boolean",
    nullable: false,
    default: false,
  })
  def: boolean;

  @Column("enum", { enum: ADDRESS_TYPE_ENUM })
  type: ADDRESS_TYPE_ENUM;
  constructor(
    _id: ObjectId,
    uid: ObjectId,
    street: string,
    city: string,
    state: string,
    postCode: string,
    country: string,
    def: boolean,
    type: ADDRESS_TYPE_ENUM
  ) {
    this._id = _id;
    this.uid = uid;
    this.street = street;
    this.city = city;
    this.state = state;
    this.postCode = postCode;
    this.country = country;
    this.def = def;
    this.type = type;
  }
}
