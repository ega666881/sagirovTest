import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AdminService } from './admin.service';
import { AdminRepository } from './admin.repository';
import { AdminController } from './admin.controller';

@Module({
    imports: [
        DatabaseModule,
    ],
    providers: [
        AdminService,
        AdminRepository
    ],
    controllers: [
        AdminController
    ]
})
export class AdminModule {}
