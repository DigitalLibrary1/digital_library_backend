import { Controller, Post, Body, Get } from '@nestjs/common';
import { OrganizationService } from './organization.service';

@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}
  @Post("/sign-up")
  async registerOrganization(@Body() body) {
    console.log(body);
    return {body};
  } 
  @Get("/hi") 
  print() {
    return "Penis";
  }

}
