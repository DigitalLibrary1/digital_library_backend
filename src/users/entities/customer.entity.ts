import { Entity, Column, ObjectIdColumn } from "typeorm";
import { IsString, IsNotEmpty } from "class-validator";

@Entity("customer")
export class Customer {
  @ObjectIdColumn()
  _id: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  email: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  password: string;

  // Add more properties as needed
}
