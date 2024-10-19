import Coupons from '~/components/admin/Coupons'
import ModalCreateCoupon from '~/components/admin/ModalCreateCoupon'
import useModal from '~/hooks/useModal'
import LayoutAdmin from '~/layouts/LayoutAdmin'

function List() {
  const modalCreateCoupon = useModal()

  return (
    <LayoutAdmin>

      <div className="text-end">
        <button
          onClick={modalCreateCoupon.openModal}
          className="bg-blue-500 px-3 py-2 rounded-md text-white"
        >
          Create
        </button>
      </div>
      {modalCreateCoupon.isOpen && <ModalCreateCoupon close={modalCreateCoupon.closeModal} />}
      <Coupons />

    </LayoutAdmin>
  )
}

export default List
