import { Injectable } from '@nestjs/common';
import { AdminRepository } from './admin.repository';
import { CreateNavButtonDto, DeleteNavButtonDto, UpdateNavButtonDto, UpdateTextDto } from './admin.dto';

@Injectable()
export class AdminService {
    constructor(
        private readonly adminRepository: AdminRepository
    ) {}

    async getTexts() {
        return this.adminRepository.getTexts()
    }

    async updateText(dto: UpdateTextDto) {
        return this.adminRepository.updateText(
            dto.textId,
            dto.newText
        )
    }

    async getNavButtons() {
        return this.adminRepository.getNavButtons()
    }
    
    async updateNavButton(dto: UpdateNavButtonDto) {
        const {buttonId, ...updateData} = dto
        return this.adminRepository.updateNavButton(buttonId, updateData)
    }

    async deleteButton(dto: DeleteNavButtonDto) {
        return this.adminRepository.deleteButton(dto.buttonId)
    }

    async createNavButton(dto: CreateNavButtonDto) {
        let index = dto.index
        if (!index) {
            const maxIndex = await this.adminRepository.getNavMaxIndex()
            if (!maxIndex) {
                index = 0

            } else {
                index = maxIndex + 1
            }
        }
        return this.adminRepository.createNavButton(dto.title, index)
    }
}
