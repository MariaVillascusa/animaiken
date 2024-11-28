'use client'
import { Menu } from '@/components/icons'
import { Button } from '@/components/ui'
import useUIStore from '@/components/ui/useUIStore'
import s from '../UserNav.module.css'
import clsx from 'clsx'

const MenuMobile = () => {
  const { setSidebarView, openSidebar } = useUIStore()

  return (
    <li className={clsx([s.item, s.mobile])}>
      <Button
        className={s.item}
        aria-label='Menu'
        variant='naked'
        onClick={() => {
          setSidebarView('MOBILE_MENU_VIEW')
          openSidebar()
        }}
      >
        <Menu />
      </Button>
    </li>
  )
}

export default MenuMobile
