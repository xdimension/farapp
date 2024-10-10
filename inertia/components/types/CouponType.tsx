type Coupon = {
  id: number
  code: string
  name: string
  description: string
  availFrom: string
  availTo: string
  seller: string
  minNumOfTickets: number
  maxNumOfTickets: number
  numOfWinners: number
}

export default Coupon;