import { ObjectId } from "mongoose";
import { Column, Entity } from "typeorm";
import { AddressModel } from "./address.entity";
import { IDateCommonModel } from "./common/date.common.entity";
import { PERMISSIONS_ENUM } from "./enums/permissions.enum";
import { ROLES_ENUM } from "./enums/roles.enum";
import { IPersonModel, PersonModel } from "./person.entity";
import { ShopModel } from "./shop.entity";

export interface IUserModel extends IPersonModel, IDateCommonModel {
  avatar?: string;
  roles: ROLES_ENUM[];
  permissions: PERMISSIONS_ENUM[];
  shop: ShopModel;
  shippingAddress?: ObjectId;
  billingAddress?: ObjectId;
  // Firebase
  validateEmail: boolean;
}

@Entity("user")
export class UserModel extends PersonModel implements IUserModel {
  @Column({
    type: "string",
    nullable: true,
  })
  avatar?: string;

  @Column("array", {
    default: [ROLES_ENUM.USER],
  })
  roles: ROLES_ENUM[];
  @Column("array", {
    default: [],
  })
  permissions: PERMISSIONS_ENUM[];

  @Column()
  shop: ShopModel;

  @Column({
    nullable: true,
  })
  shippingAddress?: ObjectId;

  @Column({
    nullable: true,
  })
  billingAddress?: ObjectId;
  // Firebase

  @Column("boolean", {
    default: false,
  })
  validateEmail: boolean;
  @Column({
    type: Date,
  })
  createdDate: Date = new Date();
  @Column({
    type: Date,
    nullable: true,
  })
  updatedDate?: Date;
  @Column({
    type: Date,
    nullable: true,
  })
  deletedDate?: Date;
  constructor(
    roles: ROLES_ENUM[],
    permissions: PERMISSIONS_ENUM[],
    shop: ShopModel,

    // Firebase
    validateEmail: boolean,
    _id: ObjectId,
    name: string,
    email: string,
    phone: string,
    address: AddressModel,
    createdDate: Date,
    updatedDate?: Date,
    deletedDate?: Date,
    shippingAddress?: ObjectId,
    billingAddress?: ObjectId,
    dob?: string,
    avatar?: string
  ) {
    super(_id, name, email, phone, address, dob);
    this.avatar = avatar;
    this.roles = roles;
    this.permissions = permissions;
    this.shop = shop;
    this.shippingAddress = shippingAddress;
    this.billingAddress = billingAddress;
    this.validateEmail = validateEmail;
    this.createdDate = createdDate;
    this.updatedDate = updatedDate;
    this.deletedDate = deletedDate;
  }
}
