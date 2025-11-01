import { Knex } from "knex";
import { tableNames } from '../../src/database/database.constants'


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable(tableNames.rooms, function(table: Knex.CreateTableBuilder) {
        table.increments('id').primary()
        table.integer('playersCount')
        table.integer('bet')
        table.integer('userId').unsigned()
        table.foreign('userId').references('users.id').onDelete('cascade')
        table.boolean('private')
        table.string('password')
        table.timestamp('createdAt').defaultTo(knex.fn.now())
    })

    await knex.schema.createTable(tableNames.room_users, function(table: Knex.CreateTableBuilder) {
        table.increments('id').primary()
        table.integer('userId').unsigned()
        table.foreign('userId').references('users.id').onDelete('cascade')
        table.integer('roomId').unsigned()
        table.foreign('roomId').references('rooms.id').onDelete('cascade')
        table.timestamp('joinedAt').defaultTo(knex.fn.now())
    })

    await knex.schema.createTable(tableNames.chats, function(table: Knex.CreateTableBuilder) {
        table.increments('id').primary()
        table.integer('roomId').unsigned()
        table.foreign('roomId').references('rooms.id').onDelete('cascade')
        table.timestamp('createdAt').defaultTo(knex.fn.now())
    })

    await knex.schema.createTable(tableNames.messages, function(table: Knex.CreateTableBuilder) {
        table.increments('id').primary()
        table.integer('chatId').unsigned()
        table.foreign('chatId').references('chats.id').onDelete('cascade')
        table.integer('userId').unsigned()
        table.foreign('userId').references('users.id').onDelete('cascade')
        table.text('message')
        table.timestamp('createdAt').defaultTo(knex.fn.now())
    })

}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable(tableNames.messages)
    await knex.schema.dropTable(tableNames.chats)
    await knex.schema.dropTable(tableNames.room_users)
    await knex.schema.dropTable(tableNames.rooms)
}

