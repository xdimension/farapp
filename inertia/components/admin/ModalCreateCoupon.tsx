import { useForm } from '@inertiajs/react'
import { LoadingButtonComponent } from '../LoadingButton'
import { toast } from 'react-toastify'
import { useEffect, useRef } from 'react'


type Props = {
  close: () => void
}

function ModalCreateCoupon({ close }: Props) {

  const modalRef = useRef(null)

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      close();
    }
  };

  const { processing, errors, data, setData, recentlySuccessful, post } = useForm({
    code: '',
    name: '',
    description: '',
    availFrom: '',
    availTo: '',
    seller: '',
    minNumOfTickets: 0,
    maxNumOfTickets: 0,
    numOfWinners: 0,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    post('/admin/coupons/create')
  }

  useEffect(() => {
    if (recentlySuccessful) {
      toast.success('Coupon created successfully')
      close()
    }
  }, [recentlySuccessful])

  return (
    <div onClick={handleClickOutside} className="bg-modal-bg overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full">
      <div className="relative p-4 w-full max-w-lg md:max-w-2xl max-h-full">
        {/* Modal content */}
        <div ref={modalRef} className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Create New Coupon
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
          <form className="p-4 md:p-5" onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label
                  htmlFor="code"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Code
                </label>
                <input
                  type="text"
                  name="code"
                  id="code"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Coupon Code"
                  value={data.code}
                  onChange={(e) => setData('code', e.target.value)}
                />
                {errors.code && <p className="text-red-500 text-sm mt-1">{errors.code}</p>}
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Coupon Name"
                  value={data.name}
                  onChange={(e) => setData('name', e.target.value)}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write coupon description here"
                  value={data.description}
                  onChange={(e) => setData('description', e.target.value)}
                />
                {errors.description && (
                  <p className="text-red-500 text-sm mt-1">{errors.description}</p>
                )}
              </div>

              <div>
                <label htmlFor="availFrom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Available From
                </label>
                <input
                  type="date"
                  name="availFrom"
                  id="availFrom"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={data.availFrom}
                  onChange={(e) => setData('availFrom', e.target.value)}
                />
                {errors.availFrom && <p className="text-red-500 text-sm mt-1">{errors.availFrom}</p>}
              </div>

              <div>
                <label htmlFor="availTo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Available To
                </label>
                <input
                  type="date"
                  name="availTo"
                  id="availTo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={data.availTo}
                  onChange={(e) => setData('availTo', e.target.value)}
                />
                {errors.availTo && <p className="text-red-500 text-sm mt-1">{errors.availTo}</p>}
              </div>

              <div className="col-span-2">
                <label htmlFor="seller" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Seller
                </label>
                <input
                  type="text"
                  name="seller"
                  id="seller"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Seller address"
                  value={data.seller}
                  onChange={(e) => setData('seller', e.target.value)}
                />
                {errors.seller && <p className="text-red-500 text-sm mt-1">{errors.seller}</p>}
              </div>

              <div>
                <label htmlFor="minNumOfTickets" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Min Tickets
                </label>
                <input
                  type="number"
                  name="minNumOfTickets"
                  id="minNumOfTickets"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={data.minNumOfTickets}
                  onChange={(e) => setData('minNumOfTickets', parseInt(e.target.value))}
                />
                {errors.minNumOfTickets && <p className="text-red-500 text-sm mt-1">{errors.minNumOfTickets}</p>}
              </div>

              <div>
                <label htmlFor="maxNumOfTickets" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Max Tickets
                </label>
                <input
                  type="number"
                  name="maxNumOfTickets"
                  id="maxNumOfTickets"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={data.maxNumOfTickets}
                  onChange={(e) => setData('maxNumOfTickets', parseInt(e.target.value))}
                />
                {errors.maxNumOfTickets && <p className="text-red-500 text-sm mt-1">{errors.maxNumOfTickets}</p>}
              </div>

              <div>
                <label htmlFor="numOfWinners" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Num of Winners
                </label>
                <input
                  type="number"
                  name="numOfWinners"
                  id="numOfWinners"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={data.numOfWinners}
                  onChange={(e) => setData('numOfWinners', parseInt(e.target.value))}
                />
                {errors.numOfWinners && <p className="text-red-500 text-sm mt-1">{errors.numOfWinners}</p>}
              </div>
            </div>
            <div className="flex justify-end">
              <LoadingButtonComponent
                type="submit"
                text="Add New"
                loading={processing}
                disabled={processing}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ModalCreateCoupon
