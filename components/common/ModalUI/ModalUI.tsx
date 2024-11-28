'use client'
import { LoadingDots } from '@/components/ui'
import useUIStore from '@/components/ui/useUIStore'
import dynamic from 'next/dynamic'

const Loading = () => (
  <div className='w-80 h-80 flex items-center text-center justify-center p-3'>
    <LoadingDots />
  </div>
)

const dynamicProps = {
  loading: Loading,
}

const Modal = dynamic(() => import('@/components/ui/Modal'), {
  ...dynamicProps,
  ssr: false,
})

const ModalView: React.FC<{ modalView: string; closeModal(): any }> = ({
  modalView,
  closeModal,
}) => {
  return (
    <Modal onClose={closeModal}>
      MODAL
      {/* {modalView === 'LOGIN_VIEW' && <LoginView />}
        {modalView === 'SIGNUP_VIEW' && <SignUpView />}
        {modalView === 'FORGOT_VIEW' && <ForgotPassword />} */}
    </Modal>
  )
}

const ModalUI: React.FC = () => {
  const { displayModal, closeModal, modalView } = useUIStore()
  return displayModal ? (
    <ModalView modalView={modalView} closeModal={closeModal} />
  ) : null
}

export default ModalUI
