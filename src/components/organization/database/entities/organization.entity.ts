import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../../../common/database/base.entity";

@Entity("organization")
export class OrganizationEntity extends BaseEntity{
  @Column({
    type: "varchar",
    nullable: false,
    length: 100
  })
  name: string;

  @Column({
    type: "varchar",
    nullable: false,
    length: 30
  })
  shortName: string;

  @Column({
    type: "datetime",
    nullable: false
  })
  foundationDate: Date;

  @Column({
    type: "varchar",
    nullable: true,
    length: 50
  })
  website: string;

  @Column({
    type: "varchar",
    nullable: false,
    length: 50
  })
  chairman: string;

  constructor(name: string, shortName: string, foundationDate: Date, website: string, chairman: string) {
    super();
    this.name = name;
    this.shortName = shortName;
    this.foundationDate = foundationDate;
    this.website = website;
    this.chairman = chairman;
  }
}