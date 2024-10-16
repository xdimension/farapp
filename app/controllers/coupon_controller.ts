import Coupon from '#models/coupon'
// import { createCouponValidator, updateCouponValidator } from '#validators/coupon'
import { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'
import { PinataSDK } from "pinata"


export default class CouponController {
  public async index({ inertia, auth, request }: HttpContext) {
    // const coupons = await Coupon.all()
    const page = request.input('page', 1)
    const limit = 10
    const coupons = await Coupon.query().paginate(page, limit)

    return inertia.render('admin/coupons/list', { user: auth.user, coupons })
  }

  public async create({ request, response }: HttpContext) {
    // const data = await request.validateUsing(createCouponValidator)
    const data = request.only([
      'code', 'name', 'description', 'availFrom', 'availTo',
      'seller', 'minNumOfTickets', 'maxNumOfTickets', 'numOfWinners'
    ])

    try {
      await Coupon.create({
        code: data.code,
        name: data.name,
        description: data.description,
        availFrom: data.availFrom,
        availTo: data.availTo,
        seller: data.seller,
        minNumOfTickets: data.minNumOfTickets,
        maxNumOfTickets: data.maxNumOfTickets,
        numOfWinners: data.numOfWinners,
      })

      return response.redirect().back()

    } catch (error) {
      console.error('Error creating coupon:', error)
    }
  }

  public async update({ request, response }: HttpContext) {
    const id = request.input('id')

    const data = request.only([
      'code', 'name', 'description', 'availFrom', 'availTo',
      'seller', 'minNumOfTickets', 'maxNumOfTickets', 'numOfWinners'
    ])

    const coupon = await Coupon.findOrFail(id)

    try {
      coupon.name = data.name
      coupon.description = data.description || ''
      coupon.availFrom = data.availFrom,
      coupon.availTo = data.availTo,
      coupon.seller = data.seller,
      coupon.minNumOfTickets = data.minNumOfTickets,
      coupon.maxNumOfTickets = data.maxNumOfTickets,
      coupon.numOfWinners = data.numOfWinners,

      await coupon.save()

      return response.redirect().back()

    } catch (error) {
      console.error('Error updating coupon:', error)
    }
  }

  public async delete({ request, response }: HttpContext) {
    const id = request.input('id')
    const coupon = await Coupon.findOrFail(id)

    try {
      await coupon.delete()

      return response.redirect().back()

    } catch (error) {
      console.error('Error deleting coupon:', error)
    }
  }

  public async uploadImage({ request, response }: HttpContext) {
    const id = request.input('id')
    const imageFile = request.file('promoImage')
    const coupon = await Coupon.findOrFail(id)

export const pinata = new PinataSDK({
  pinataJwt: `${process.env.PINATA_JWT}`,
  pinataGateway: `${process.env.NEXT_PUBLIC_GATEWAY_URL}`
})
    const fileName = `${id}-${imageFile.clientName}`
    await imageFile.move(app.tmpPath('uploads'), {
      name: fileName,
      overwrite: true,
    })

    coupon.promoImage = fileName
    coupon.save()

    return response.redirect().back()
  }

  public searchCoupon = async ({ request, inertia }: HttpContext) => {
    const search = request.input('search', '')
    const page = request.input('page', 1)
    const limit = 10
    const coupons = await Coupon.query()
      .where('code', 'like', `%${search}%`)
      .paginate(page, limit)

    return inertia.render('admin/coupons/list', { coupons, search })
  }
}
