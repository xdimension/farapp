import { usePage } from '@inertiajs/react'
import _ from 'lodash'
import Ticket from '../types/TicketType'
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

function Tickets() {
  const { tickets } = usePage<{
    tickets: { data: Ticket[]; meta: MetaData }
  }>().props

  return (
    <>
      {_.isEmpty(tickets?.data) ? (
        <div className="text-center text-gray-500 dark:text-gray-400">
          <p>No tickets found.</p>
        </div>
      ) : (
        <div className="overflow-x-auto ">

          <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 shadow-md sm:rounded-lg">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-4 py-3">
                  Coupon ID
                </th>

                <th scope="col" className="px-4 py-3">
                  Ticket Number
                </th>

                <th scope="col" className="px-4 py-3">
                  Time of Entry
                </th>
              </tr>
            </thead>
            <tbody>
              {tickets?.data.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.couponId}
                    </th>
                    <th
                      scope="row"
                      className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.num}
                    </th>
                    <th
                      scope="row"
                      className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.timeOfEntry}
                    </th>
                  </tr>
              )
              })}
            </tbody>
          </table>
            <PaginationComponent
              url={`/admin/tickets/search`}
              currentPage={tickets?.meta?.currentPage}
              previousPageUrl={tickets?.meta?.previousPageUrl}
              nextPageUrl={tickets?.meta?.nextPageUrl}
              lastPage={tickets?.meta?.lastPage}
            />
        </div>
      )}
    </>
  )
}

export default Tickets
