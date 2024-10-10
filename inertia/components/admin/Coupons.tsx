import { router, usePage } from '@inertiajs/react'
import _ from 'lodash'
import { useState } from 'react'
import useModal from '~/hooks/useModal'
import ModalUpdateCoupon from './ModalUpdateCoupon'
import PaginationComponent from '../Pagination'
import SearchCoupon from './SearchComponent'


type Coupon = {
  id: number
  code: string
  name: string
  description: string
  createdAt: string
  updatedAt: string
}

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
  const modalUpdateCoupon = useModal()
  const [coupon, setCoupon] = useState<Coupon>()
  const { coupons, search } = usePage<{
    coupons: { data: Coupon[]; meta: MetaData }
    search: any
  }>().props
  console.log('coupons:', coupons);

  const [query, setQuery] = useState(search)
  console.log('search:', search);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.get('/admin/coupons/search', { search: query, page: 1 }, { preserveState: true })
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
                  Coupon Code
                </th>

                <th scope="col" className="px-4 py-3">
                  Coupon Name
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
                      {item.code}
                    </th>
                    <th
                      scope="row"
                      className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.name}
                    </th>
                    <td className="px-4 py-4">
                      <button
                        onClick={() => {
                          modalUpdateCoupon.openModal()
                          setCoupon(item)
                        }}
                        className={`font-medium text-blue-600 dark:text-blue-500 hover:underline`}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          {_.isEmpty(query) ? (
            <PaginationComponent
              url="/admin/coupons"
              currentPage={coupons?.meta?.currentPage}
              previousPageUrl={coupons?.meta?.previousPageUrl}
              nextPageUrl={coupons?.meta?.nextPageUrl}
              lastPage={coupons?.meta?.lastPage}
            />
          ) : (
            <PaginationComponent
              url={`/admin/coupons/search`}
              currentPage={coupons?.meta?.currentPage}
              previousPageUrl={coupons?.meta?.previousPageUrl}
              nextPageUrl={coupons?.meta?.nextPageUrl}
              lastPage={coupons?.meta?.lastPage}
              query={query}
            />
          )}
        </div>
      )}
      {modalUpdateCoupon.isOpen && (
        <ModalUpdateCoupon coupon={coupon} close={modalUpdateCoupon.closeModal} />
      )}
    </>
  )
}

export default Coupons
