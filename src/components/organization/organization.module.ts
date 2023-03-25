import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrganizationConttroller } from "./controllers/organization.controller";
import { OrganizationEntity } from "./database/entities/organization.entity";
import { OrganizationsRepositoryService } from "./database/providers/organization.repository.service";
import { OrganizationService } from "./services/organization.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([OrganizationEntity])
  ],
  controllers: [
    OrganizationConttroller
  ],
  providers: [
    OrganizationService,
    OrganizationsRepositoryService
  ]
})
export class OrganizationModule {}