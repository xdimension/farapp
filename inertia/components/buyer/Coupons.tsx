import { router, usePage } from '@inertiajs/react'
import _ from 'lodash'
import { useState } from 'react'
import useModal from '~/hooks/useModal'
import ModalViewTickets from './ModalViewTickets'
import Coupon from '../types/CouponType'
import PaginationComponent from '../Pagination'


type MetaData = {
  total: number
  perPage: number
  currentPage: number
  lastPage: number
  firstPage: number
  firstPageUrl: string
  lastPageUrl: string
  nextPageUrl: string | null
  previousPageUrl: string | null
}

function Coupons() {
  const modalViewTickets = useModal()

  const [coupon, setCoupon] = useState<Coupon>()
  const { coupons } = usePage<{
    coupons: { data: Coupon[]; meta: MetaData }
  }>().props

  const wordSeparator = /[ ,.!?;:]+/;

  const wrapLongText = (text: string, maxChars: number) => {
    const regex = new RegExp(`(.{1,${maxChars}})(\\s|$)`, 'g');
    return text?.split(regex) || [''];
  }

  return (
    <>
      {_.isEmpty(coupons?.data) ? (
        <div className="text-center text-gray-500 dark:text-gray-400">
          <p>No coupons found.</p>
        </div>
      ) : (
        <div className="overflow-x-auto ">

          <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 shadow-md sm:rounded-lg">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-4 py-3">
                  Name
                </th>

                <th scope="col" className="px-4 py-3">
                  Description
                </th>

                <th scope="col" className="px-4 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {coupons?.data.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.name}
                    </th>
                    <th
                      scope="row"
                      className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {
                        wrapLongText(_.truncate(item.description, { length: 115, separator: wordSeparator }), 60)
                        .map(line => <p>{line}</p>)
                      }
                    </th>
                    <td className="px-4 py-4">
                      <button
                        onClick={() => {
                          modalViewTickets.openModal()
                          setCoupon(item)
                        }}
                        className={`font-medium text-blue-600 dark:text-blue-500 hover:underline`}
                      >
                        View Tickets
                      </button>
                    </td>
                  </tr>
              )
              })}
            </tbody>
          </table>
            <PaginationComponent
              url={`/admin/coupons/search`}
              currentPage={coupons?.meta?.currentPage}
              previousPageUrl={coupons?.meta?.previousPageUrl}
              nextPageUrl={coupons?.meta?.nextPageUrl}
              lastPage={coupons?.meta?.lastPage}
            />
        </div>
      )}
      {modalViewTickets.isOpen && (
        <ModalViewTickets coupon={coupon} close={modalViewTickets.closeModal} />
      )}
    </>
  )
}

export default Coupons
