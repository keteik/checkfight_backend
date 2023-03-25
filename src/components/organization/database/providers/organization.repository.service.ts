import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateResult } from "typeorm";
import { OrganizationEntity } from "../entities/organization.entity";

export class OrganizationsRepositoryService {
  constructor (
    @InjectRepository(OrganizationEntity)
    private readonly organizationRepositoryService: Repository<OrganizationEntity>
  ) {}

  save(
    organization: OrganizationEntity
  ): Promise<OrganizationEntity> {
    return this.organizationRepositoryService.save(organization);
  }
  
  update(
    id: string,
    organization: Partial<OrganizationEntity>
  ): Promise<UpdateResult> {
    return this.organizationRepositoryService.update(id, organization);
  }

  findAll(): Promise<OrganizationEntity []> {
    const query = this.organizationRepositoryService
      .createQueryBuilder("organization");
    return query.getMany();
  }

  findOne(
    id: string
  ): Promise<OrganizationEntity | null> {
    const query = this.organizationRepositoryService
      .createQueryBuilder("organization")
      .where("organization.id = :id", {
        id
      });
    return query.getOne();
  }

  findOneByName(
    name: string
  ): Promise<OrganizationEntity | null> {
    const query = this.organizationRepositoryService
      .createQueryBuilder("organization")
      .where("organization.name = :name", {
        name
      });
    return query.getOne();
  }
}