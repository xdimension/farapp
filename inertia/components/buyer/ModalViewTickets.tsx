import { LoadingButtonComponent } from '../LoadingButton'
import { toast } from 'react-toastify'
import { useEffect, useRef, useState } from 'react'
import { type BaseError, useReadContract, useAccount } from 'wagmi'
import { abi } from '~/contract/abi'
import { envConfig } from '~/web3config'
import Coupon from '../types/CouponType'


type Props = {
  close: () => void,
  coupon: Coupon
}


function ModalViewTickets({ close, coupon }: Props) {

  const modalRef = useRef(null)

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      close();
    }
  };
  const userAddress = useAccount().address

  let tickets: any = []
  if (userAddress) {
    const { data } = useReadContract({
      address: envConfig.contractAddr,
      abi: abi,
      functionName: 'getBuyerTickets',
      args: [coupon!.id, userAddress],
    })
    tickets = data
  }
  // console.log(tickets)

  return (
    <div onClick={handleClickOutside} className="bg-modal-bg overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full">
      <div className="relative p-4 w-full max-w-lg md:max-w-2xl max-h-full">
        {/* Modal content */}
        <div ref={modalRef} className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Tickets List
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
          {!tickets?.length ? (
            <div className="text-center text-gray-500 dark:text-gray-400">
              <p>No tickets found.</p>
            </div>
          ) : (
            <div className="p-4 md:p-5">
              <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 shadow-md sm:rounded-lg">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Ticket Number
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Time of Entry
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Is Winning?
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Coupon Code
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item.ticketNum}
                        </th>
                        <th
                          scope="row"
                          className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {(new Date(Number(item.timeOfEntry) * 1000)).toLocaleDateString()}
                        </th>
                        <th
                          scope="row"
                          className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item.isWinning? 'Yes':'No'}
                        </th>
                        <th
                          scope="row"
                          className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item.isWinning? coupon.code : ''}
                        </th>
                      </tr>
                  )
                  })}
                </tbody>
              </table>

              <div className="flex justify-end *:ml-2">
                <LoadingButtonComponent
                type="button"
                text="Close"
                onClick={close}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ModalViewTickets
