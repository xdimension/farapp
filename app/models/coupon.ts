import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Coupon extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare code: string

  @column()
  declare name: string

  @column()
  declare description: string

  @column.dateTime()
  declare availFrom: DateTime

  @column.dateTime()
  declare availTo: DateTime

  @column()
  declare seller: string

  @column()
  declare minNumOfTickets: number

  @column()
  declare maxNumOfTickets: number

  @column()
  declare numOfWinners: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // @hasMany(() => Ticket)
  // declare tickets: HasMany<typeof Ticket>
}
