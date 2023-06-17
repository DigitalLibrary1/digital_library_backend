import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { OrganizationModule } from './organization/organization.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [OrganizationModule, CustomerModule]
})
export class UsersModule {}
