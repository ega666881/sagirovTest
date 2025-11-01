import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { AdminService } from './admin.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateNavButtonDto, DeleteNavButtonDto, UpdateNavButtonDto, UpdateTextDto } from './admin.dto';

@Controller('admin')
export class AdminController {
    constructor (
        private readonly adminService: AdminService
    ) {}

    
    @Get('get-texts')
    async getTexts() {
        return this.adminService.getTexts()
    }

    @Put('update-text')
    async updateText(@Body() dto: UpdateTextDto) {
        return this.adminService.updateText(dto)
    }

    @Post('create-nav-button')
    async createNavButton(@Body() dto: CreateNavButtonDto) {
        return this.adminService.createNavButton(dto)
    }

    @Delete('delete-nav-button')
    async deleteNavButton(@Query() dto: DeleteNavButtonDto) {
        return this.adminService.deleteButton(dto)
    }

    @Put('update-nav-button')
    async updateNavButton(@Body()  dto: UpdateNavButtonDto) {
        return this.adminService.updateNavButton(dto)
    }

    @Get('get-nav-buttons')
    async getNavButtons() {
        return this.adminService.getNavButtons()
    }
}
