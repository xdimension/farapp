import { LoadingButtonComponent } from '../LoadingButton'
import { toast } from 'react-toastify'
import { useEffect, useRef } from 'react'
import Coupon from '../types/CouponType'
import { envConfig } from '../../web3config'

type Props = {
  close: () => void,
  coupon?: Coupon
}


function ModalCreateCoupon({ close, coupon }: Props) {

  const modalRef = useRef(null)

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      close();
    }
  };

  const castCoupon = (e: React.FormEvent) => {
    e.preventDefault()
    window.open(`https://warpcast.com/~/compose?text=I found a good deal!&embeds[]=${envConfig.appUrl}/cast/${coupon!.id}`, '_blank')
  }

  return (
    <div onClick={handleClickOutside} className="bg-modal-bg overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full">
      <div className="relative p-4 w-full max-w-lg md:max-w-2xl max-h-full">
        {/* Modal content */}
        <div ref={modalRef} className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Promote Coupon
            </h3>
            <button
              onClick={close}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="crud-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label
                  htmlFor="code"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Code
                </label>
                <p>{coupon?.code}</p>
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <p>{coupon?.name}</p>
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <p>{coupon?.description}</p>
              </div>
              <div>
                <label htmlFor="availFrom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Available From
                </label>
                <p>{(new Date(coupon!.availFrom).toLocaleDateString())}</p>
              </div>

              <div>
                <label htmlFor="availTo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Available To
                </label>
                <p>{(new Date(coupon!.availTo).toLocaleDateString())}</p>
              </div>
              <div className="col-span-2">
                <label htmlFor="seller" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Seller
                </label>
                <p>{coupon?.seller}</p>
              </div>
              <div>
                <label htmlFor="minNumOfTickets" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Min Tickets
                </label>
                <p>{coupon?.minNumOfTickets}</p>
              </div>

              <div>
                <label htmlFor="maxNumOfTickets" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Max Tickets
                </label>
                <p>{coupon?.maxNumOfTickets}</p>
              </div>

              <div>
                <label htmlFor="numOfWinners" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Num of Winners
                </label>
                <p>{coupon?.numOfWinners}</p>
              </div>
            </div>
            <div className="flex justify-end">
              <LoadingButtonComponent
                type="button"
                text="Cast Promotion"
                onClick={castCoupon}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalCreateCoupon
