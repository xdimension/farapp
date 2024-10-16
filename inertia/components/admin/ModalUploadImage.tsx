import { useForm, usePage } from '@inertiajs/react'
import { LoadingButtonComponent } from '../LoadingButton'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import Coupon from '../types/CouponType';

type Props = {
  close: () => void
  coupon?: Coupon
}

function ModalUploadImage({ close, coupon }: Props) {

  const { processing, errors, data, setData, recentlySuccessful, post } = useForm({
    id: coupon!.id,
    promoImage: null as File | null,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    post('/admin/api/coupons/uploadimage')
  }

  useEffect(() => {
    if (recentlySuccessful) {
      toast.success('Image uploaded successfully')
      // close()
    }
  }, [recentlySuccessful])

  return (
    <div className="bg-modal-bg overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full">
      <div className="relative p-4 w-full max-w-md max-h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Upload Promo Image
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
          <form  onSubmit={handleSubmit} className="p-4 md:p-5">
            <input type="hidden" name="id" value={coupon!.id} />

            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className='col-span-2'>
                <input type="file" onChange={e => setData('promoImage', e.target.files[0])} />
              </div>
            </div>

            <div className="flex justify-end">
              <LoadingButtonComponent
                type="submit"
                text="Upload"
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

export default ModalUploadImage
