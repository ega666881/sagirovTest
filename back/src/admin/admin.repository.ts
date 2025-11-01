import { Inject, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { KNEX_INSTANCE, tableNames } from 'src/database/database.constants';
import { IMaxIndexResult, INavButton, IText } from './admin.interface';

@Injectable()
export class AdminRepository {
    constructor(
        @Inject(KNEX_INSTANCE) private readonly knex: Knex
    ) {}

    async getTexts() {
        return this.knex(tableNames.texts).select('*').orderBy('id', 'asc')
    }

    async updateText(id: number, newText: string) {
        console.log(id, newText)
        const [updatedRow] = await this.knex<IText>(tableNames.texts)
                            .update({
                                title: newText
                            })
                            .where({id: id})
                            .returning('*')
                            
        return updatedRow
    }

    async deleteButton(id: number) {
        return this.knex(tableNames.navButtons).delete().where({id: id})
    }

    async updateNavButton(id: number, updateData: INavButton) {
        const [updatedRow] = await this.knex<IText>(tableNames.navButtons)
                            .update(updateData)
                            .where({id: id})
                            .returning('*')

        return updatedRow

    }

    async getNavButtons() {
        return this.knex(tableNames.navButtons)
                    .select('*')
                    .orderBy(`${tableNames.navButtons}.index`, 'asc')
    }

    async getNavMaxIndex() {
        const { maxIndex } = await this.knex(tableNames.navButtons)
                                .max('index as maxIndex')
                                .first<IMaxIndexResult>()

        return maxIndex
    }

    async createNavButton(title: string, index: number) {
        const [insertedRow] = await this.knex<INavButton>(tableNames.navButtons)
                                .insert({
                                    title: title,
                                    index: index,
                                })
                                .returning('*')

        return insertedRow
    }
}
