'use client'
import { Sidebar } from '@/components/ui'
import useUIStore from '@/components/ui/useUIStore'
import { MenuSidebarView } from '../UserNav'
import { Link } from '../UserNav/MenuSidebarView'

const SidebarView: React.FC<{
  sidebarView: string
  closeSidebar(): any
  links: Link[]
}> = ({ sidebarView, closeSidebar, links }) => {
  return (
    <Sidebar onClose={closeSidebar}>
      {/* {sidebarView === 'CART_VIEW' && <CartSidebarView />}
      {sidebarView === 'SHIPPING_VIEW' && <ShippingView />}
      {sidebarView === 'PAYMENT_VIEW' && <PaymentMethodView />}
      {sidebarView === 'CHECKOUT_VIEW' && <CheckoutSidebarView />} */}
      {sidebarView === 'MOBILE_MENU_VIEW' && <MenuSidebarView links={links} />}
    </Sidebar>
  )
}

const SidebarUI: React.FC<{ links: Link[] }> = ({ links }) => {
  const { displaySidebar, closeSidebar, sidebarView } = useUIStore()
  return displaySidebar ? (
    <SidebarView
      links={links}
      sidebarView={sidebarView}
      closeSidebar={closeSidebar}
    />
  ) : null
}

export default SidebarUI
