'use client'
import { Heart } from '@/components/icons'
import useUIStore from '@/components/ui/useUIStore'
import Link from 'next/link'
import s from '../UserNav.module.css'

const WishListMenu = () => {
  const { closeSidebar } = useUIStore()

  return (
    <li className={s.item}>
      <Link href='/wishlist' className={s.item}>
        <button onClick={closeSidebar} aria-label='Wishlist'>
          <Heart />
        </button>
      </Link>
    </li>
  )
}

export default WishListMenu
