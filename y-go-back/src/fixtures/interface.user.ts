import {Column, PrimaryGeneratedColumn} from "typeorm";
import {Exclude} from "class-transformer";

export interface InterfaceUser {
  id: string;
  name: string;
  email: string;
  password: string;
}
