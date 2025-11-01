import type { Knex } from "knex";
import { tableNames } from '../../src/database/database.constants'


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable(tableNames.texts, function(table: Knex.CreateTableBuilder) {
        table.increments('id').primary()
        table.string('name')
        table.text('title')
        table.unique('name', {
            indexName: 'useridx_unique_texts'
        })
    })
    await knex.schema.createTable(tableNames.navButtons, function(table: Knex.CreateTableBuilder) {
        table.increments('id').primary()
        table.text('title')
        table.integer('index')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable(tableNames.navButtons)
    await knex.schema.dropTable(tableNames.texts)
}

