import { IsDateString, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";
import { OrganizationEntity } from "../database/entities/organization.entity";

export class NewOrganizationDTO {
  @MaxLength(100)
  @IsNotEmpty()
  @IsString()
  name: string;

  @MaxLength(30)
  @IsNotEmpty()
  @IsString()
  shortName: string;

  @IsNotEmpty()
  @IsDateString()
  foundationDate: Date;

  @MaxLength(50)
  @IsOptional()
  @IsString()
  website: string;

  @MaxLength(50)
  @IsNotEmpty()
  @IsString()
  chairman: string;
}

export class OrganizationCoreResponseDTO {
  id: string;
  createdAt: Date;
  modifiedAt: Date;
  name: string;
  shortName: string;
  foundationDate: Date;
  website: string;
  chairman: string;

  constructor(organization: OrganizationEntity) {
    this.id = organization.id;
    this.createdAt = organization.createdAt;
    this.modifiedAt = organization.modifiedAt;
    this.name = organization.name;
    this.shortName = organization.shortName;
    this.foundationDate = organization.foundationDate;
    this.website = organization.website;
    this.chairman = organization.chairman;
  }
}