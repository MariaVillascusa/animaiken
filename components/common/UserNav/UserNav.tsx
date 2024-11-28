import { Dropdown, DropdownTrigger } from '@/components/ui'
import cn from 'clsx'
import React from 'react'
import { AvatarMenu } from './AvatarMenu'
import { CartMenu } from './CartMenu'
import CustomerMenuContent from './CustomerMenuContent'
import { MenuMobile } from './MenuMobile'
import s from './UserNav.module.css'
import { WishListMenu } from './WishListMenu'
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const UserNav: React.FC<{
  className?: string
}> = ({ className }) => {
  // const { closeSidebar, setSidebarView, openSidebar } = useUIStore()
  // useUI()
  return (
    <nav className={cn(s.root, className)}>
      <ul className={s.list}>
        {process.env.COMMERCE_CART_ENABLED && <CartMenu />}
        {process.env.COMMERCE_WISHLIST_ENABLED && <WishListMenu />}
        {process.env.COMMERCE_CUSTOMERAUTH_ENABLED && (
          <li className={s.item}>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <AvatarMenu />
              </DropdownMenuTrigger>
              <CustomerMenuContent />
            </DropdownMenu>
          </li>
        )}
        <MenuMobile />
      </ul>
    </nav>
  )
}

export default UserNav
