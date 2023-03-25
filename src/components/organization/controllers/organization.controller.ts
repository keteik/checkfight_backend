import { Controller, Post, Body } from "@nestjs/common";
import { NewOrganizationDTO } from "../models/organization.dto";
import { OrganizationService } from "../services/organization.service";

@Controller("api/organizations")
export class OrganizationConttroller {
  constructor(
    private readonly organizationService: OrganizationService
  ) {}

  @Post()
  createOrganization(
    @Body() data: NewOrganizationDTO
  ) {
    return this.organizationService.createOrganization(data);
  }
}