import Coupon from '#models/coupon'
// import { createCouponValidator, updateCouponValidator } from '#validators/coupon'
import { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'
import { PinataSDK } from "pinata-web3"
import path from 'path';
import fs from 'fs';


export default class CouponController {
  private pinata = new PinataSDK({
    pinataJwt: `${process.env.PINATA_JWT}`,
    pinataGateway: `${process.env.PINATA_GATEWAY_URL}`,
    pinataGatewayKey: `${process.env.PINATA_GATEWAY_KEY}`,
  });

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

  public async update({ request, response, auth }: HttpContext) {
    const id = request.input('id')
    const coupon = await Coupon.findOrFail(id)

    if (coupon.created_by != auth.user?.id) {
      return response.unauthorized({ error: 'You are not authorized to perform this action.' })
    }

    const data = request.only([
      'code', 'name', 'description', 'availFrom', 'availTo',
      'seller', 'minNumOfTickets', 'maxNumOfTickets', 'numOfWinners'
    ])

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

  public async delete({ request, response, auth }: HttpContext) {
    const id = request.input('id')
    const coupon = await Coupon.findOrFail(id)

    if (coupon.created_by != auth.user?.id) {
      return response.unauthorized({ error: 'You are not authorized to perform this action.' })
    }

    try {
      await coupon.delete()

      return response.redirect().back()

    } catch (error) {
      console.error('Error deleting coupon:', error)
    }
  }

  public async uploadImage({ request, response, auth }: HttpContext) {
    const id = request.input('id')
    const coupon = await Coupon.findOrFail(id)

    if (coupon.created_by != auth.user?.id) {
      return response.unauthorized({ error: 'You are not authorized to perform this action.' })
    }

    const promoImage = request.file('promoImage')

    const fileName = `${id}-${promoImage.clientName}`
    await promoImage.move(app.tmpPath('uploads'), {name: fileName})

    try {
      const fileBuffer = fs.readFileSync(path.join(app.tmpPath('uploads'), fileName));
		  const blob = new Blob([fileBuffer], { type: promoImage.type });
      const imageFile = new File([blob], fileName, {
        type: promoImage.type,
        lastModified: new Date().getTime(),
      });

      const { IpfsHash: cid } = await this.pinata.upload.file(imageFile)

      coupon.imageCid = cid
      await coupon.save()
    }
    catch(e) {
      console.log(e);
    }

    return response.redirect().back()
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

    return inertia.render('admin/coupons/list', { coupons, search })
  }
}
