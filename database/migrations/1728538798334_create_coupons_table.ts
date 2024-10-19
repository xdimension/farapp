import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'coupons'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('code').notNullable().unique()
      table.string('name').notNullable()
      table.text('description').nullable()
      table.date('avail_from').notNullable() // Available from
      table.date('avail_to').notNullable()   // Available to
      table.string('seller').notNullable()   // Seller wallet address
      table.tinyint('min_num_of_tickets').unsigned().notNullable() // Min number of tickets
      table.tinyint('max_num_of_tickets').unsigned().notNullable() // Max number of tickets
      table.tinyint('num_of_winners').unsigned().notNullable()     // Number of winners
      table.string('image_cid').nullable()   // Promo image CID (from Pinata)

      table.number('created_by')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}