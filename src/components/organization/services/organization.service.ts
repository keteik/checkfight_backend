import { Injectable } from "@nestjs/common/decorators";
import { ConflictException, HttpException, InternalServerErrorException } from "@nestjs/common/exceptions";
//import { InsertResult } from "typeorm";
import { OrganizationEntity } from "../database/entities/organization.entity";
import { OrganizationsRepositoryService } from "../database/providers/organization.repository.service";
import { NewOrganizationDTO, OrganizationCoreResponseDTO } from "../models/organization.dto";

@Injectable()
export class OrganizationService {
  constructor(
    private readonly organizationRepositoryService: OrganizationsRepositoryService,
  ) {}

  async createOrganization(
    data: NewOrganizationDTO
  ): Promise<OrganizationCoreResponseDTO | HttpException> {
    const existingOrganization = await this.organizationRepositoryService.findOneByName(data.name);
    if (existingOrganization) throw new ConflictException("Organization already exists");

    const newOrganization = new OrganizationEntity(data.name, data.shortName, data.foundationDate, data.website, data.chairman);
    try {
      const saveResult = await this.organizationRepositoryService.save(newOrganization);
      return new OrganizationCoreResponseDTO(saveResult);
    } catch(err) {
      console.error(err);
      return new InternalServerErrorException();
    }
  }
}