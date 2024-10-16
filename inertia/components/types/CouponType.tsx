type Coupon = {
  id: number
  code: string
  name: string
  description: string
  availFrom: string
  availTo: string
  seller: `0x${string}`
  minNumOfTickets: number
  maxNumOfTickets: number
  numOfWinners: number
  imageCid: string
}

export default Coupon;