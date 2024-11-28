'use client'
import ThemeIcon from '@/components/ui/ThemeSwitcher/ThemeIcon'
import { useToggleTheme } from '@/lib/hooks/useToggleTheme'
import cn from 'clsx'
import s from './CustomerMenuContent.module.css'
import {
  DropdownContent,
  DropdownMenuItem,
} from '@/components/ui/Dropdown/Dropdown'
import { usePathname, useRouter } from 'next/navigation'
import {
  DropdownMenuContent,
  // DropdownMenuItem,
} from '@/components/ui/dropdown-menu'

const LINKS = [
  {
    name: 'My Orders',
    href: '/orders',
  },
  {
    name: 'My Profile',
    href: '/profile',
  },
  {
    name: 'My Cart',
    href: '/cart',
  },
]

const THEMES_SWITCHER = {
  dark: 'light',
  light: 'dark',
}

export default function CustomerMenuContent() {
  const router = useRouter()
  const pathname = usePathname()

  const { theme, setTheme } = useToggleTheme()

  function handleClick(_: React.MouseEvent<HTMLAnchorElement>, href: string) {
    router.push(href)
  }

  return (
    <DropdownMenuContent sideOffset={10} id='CustomerMenuContent'>
      {LINKS.map(({ name, href }) => (
        <DropdownMenuItem key={href}>
          <a
            className={cn(s.link, {
              [s.active]: pathname === href,
            })}
            onClick={(e) => handleClick(e, href)}
          >
            {name}
          </a>
        </DropdownMenuItem>
      ))}
      <DropdownMenuItem>
        <a
          className={cn(s.link, 'justify-between')}
          onClick={() => {
            setTheme(THEMES_SWITCHER[theme as 'dark' | 'light'] || 'dark')
          }}
        >
          <ThemeIcon width={20} height={20} theme={theme} />
        </a>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <a
          className={cn(s.link, 'border-t border-accent-2 mt-4')}
          // onClick={() => logout()}
        >
          Logout
        </a>
      </DropdownMenuItem>
    </DropdownMenuContent>
  )
}
