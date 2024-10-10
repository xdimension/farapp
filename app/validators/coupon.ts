import vine from '@vinejs/vine'

export const createCouponValidator = vine.compile(
  vine.object({
    code: vine
      .string()
      .trim()
      .unique(async (db, value) => {
        const coupon = await db.from('categories').where('name', value).first()
        return !coupon
      }),
    description: vine.string().trim().optional(),
  })
)
export const updateCouponValidator = vine.compile(
  vine.object({
    id: vine.number(),
    code: vine
      .string()
      .trim()
      .unique(async (db, value, field) => {
        const coupon = await db
          .from('categories')
          .whereNot('id', field.meta.couponId)
          .where('name', value)
          .first()
        return !coupon
      }),
    description: vine.string().trim().optional(),
  })
)