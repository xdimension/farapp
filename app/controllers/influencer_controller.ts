import Coupon from '#models/coupon'
import { HttpContext } from '@adonisjs/core/http'


export default class InfluencerController {

  public async index({ inertia, auth, request }: HttpContext) {
    // const coupons = await Coupon.all()
    const page = request.input('page', 1)
    const limit = 10
    const coupons = await Coupon.query().paginate(page, limit)

    return inertia.render('influencer/coupons/list', { user: auth.user, coupons })
  }

  public async promoImageUrl({ params, request, response} : HttpContext) {
      const {cid} = params  // cid = image's cid from pinata

      const imageUrl = `${process.env.PINATA_GATEWAY_URL}/ipfs/${cid}?pinataGatewayToken=${process.env.PINATA_GATEWAY_KEY}`
      // const imageFile = await this.pinata.gateways.get(cid)
      // console.log(imageFile)

      return response.json({imageUrl})
  }

  public searchCoupon = async ({ request, inertia }: HttpContext) => {
    const search = request.input('search', '')
    const page = request.input('page', 1)
    const limit = 10
    const coupons = await Coupon.query()
      .where('code', 'like', `%${search}%`)
      .paginate(page, limit)

    return inertia.render('influencer/coupons/list', { coupons, search })
  }
}
