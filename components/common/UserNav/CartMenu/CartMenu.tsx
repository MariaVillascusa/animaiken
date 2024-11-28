'use client'
import { Bag } from '@/components/icons'
import { Button } from '@/components/ui'
import s from '../UserNav.module.css'
import useUIStore from '@/components/ui/useUIStore'

const CartMenu = () => {
  const { openSidebar, setSidebarView } = useUIStore()
  const itemsCount = 0
  //   const { data } = useCart()
  //   const { data: isCustomerLoggedIn } = useCustomer()
  //   const { closeSidebarIfPresent, openModal, setSidebarView, openSidebar } =
  //     useUI()

  //   const itemsCount = data?.lineItems?.reduce(countItem, 0) ?? 0
  //   const DropdownTrigger = isCustomerLoggedIn
  //     ? DropdownTriggerInst
  //     : React.Fragment
  return (
    <li className={s.item}>
      <Button
        className={s.item}
        variant='naked'
        onClick={() => {
          setSidebarView('CART_VIEW')
          openSidebar()
        }}
        aria-label={`Cart items: ${itemsCount}`}
      >
        <Bag />
        {itemsCount > 0 && <span className={s.bagCount}>{itemsCount}</span>}
      </Button>
    </li>
  )
}

export default CartMenu
