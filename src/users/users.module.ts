import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AdminModule } from './admin/admin.module';
import { OrganizationModule } from './organization/organization.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [AdminModule, OrganizationModule, CustomerModule]
})
export class UsersModule {}
