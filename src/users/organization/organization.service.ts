import { Injectable } from '@nestjs/common';

@Injectable()
export class OrganizationService {
  constructor() {}
  getOrganization():string {
    return "Organization Name";
  }
}
