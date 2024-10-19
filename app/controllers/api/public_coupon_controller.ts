import type { HttpContext } from '@adonisjs/core/http'
import Coupon from '#models/coupon'

export default class PublicCouponController {

  public async get({ params, request, response }: HttpContext) {
    const { id } = params

    const coupon = await Coupon.findOrFail(id)

    const couponData = {
      ...coupon.toJSON(),
       imageUrl: `https://${process.env.PINATA_GATEWAY_URL}/ipfs/${coupon.imageCid}?pinataGatewayToken=${process.env.PINATA_GATEWAY_KEY}`,
    }

    return response.status(200).json(couponData)
  }
}