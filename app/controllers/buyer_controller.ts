import Coupon from '#models/coupon'
import { HttpContext } from '@adonisjs/core/http'
import { createPublicClient, http } from 'viem'
import { base, baseSepolia } from 'viem/chains'
import { abi } from '../../contract/abi'
import { config } from 'dotenv'
config()


export default class BuyerController {

  public async index({ inertia, auth, request, params }: HttpContext) {

    const page = request.input('page', 1)
    const limit = 10

    const buyerAddr = params.userAddr

    const publicClient = createPublicClient({
      chain: baseSepolia,
      transport: http()
    })

    const contractAddress = process.env.CONTRACT_ADDR as `0x${string}`

    const buyerCoupons = await publicClient.readContract({
      address: contractAddress,
       abi,
       functionName: 'getBuyerCoupons',
       args: [buyerAddr]
    })

    const buyerCouponIDs = buyerCoupons.map(coupon => coupon.couponID)

    const coupons = await Coupon.query().whereIn('id', buyerCouponIDs).paginate(page, limit)

    return inertia.render('buyer/coupons/list', { user: auth.user, coupons })
  }

  public searchCoupon = async ({ request, inertia }: HttpContext) => {
    const search = request.input('search', '')
    const page = request.input('page', 1)
    const limit = 10
    const coupons = await Coupon.query()
      .where('code', 'like', `%${search}%`)
      .paginate(page, limit)

    return inertia.render('buyer/coupons/list', { coupons, search })
  }
}
