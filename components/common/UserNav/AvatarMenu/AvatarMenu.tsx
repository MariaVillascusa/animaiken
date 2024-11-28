'use client'
import useUIStore from '@/components/ui/useUIStore'
import Avatar from '../../Avatar'
import s from '../UserNav.module.css'

const AvatarMenu = () => {
  const { openModal } = useUIStore()
  const isCustomerLoggedIn = false
  //   const { data } = useCart()
  //   const { data: isCustomerLoggedIn } = useCustomer()
  //   const { closeSidebarIfPresent, openModal, setSidebarView, openSidebar } =
  //     useUI()

  //   const itemsCount = data?.lineItems?.reduce(countItem, 0) ?? 0
  //   const DropdownTrigger = isCustomerLoggedIn
  //     ? DropdownTriggerInst
  //     : React.Fragment
  return (
    <div
      aria-label='Menu'
      className={s.avatarButton}
      onClick={() => (isCustomerLoggedIn ? null : openModal())}
    >
      <Avatar />
    </div>
  )
}

export default AvatarMenu
