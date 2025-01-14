'use client'
import cn from 'clsx'
import { useRouter, useSearchParams } from 'next/navigation'
import { FC, memo, useEffect } from 'react'
import s from './Searchbar.module.css'

interface Props {
  className?: string
  id?: string
}

const Searchbar: FC<Props> = ({ className, id = 'search' }) => {
  const router = useRouter()
  const params = useSearchParams()
  const query = params.get('query')

  useEffect(() => {
    router.prefetch('/search')
  }, [router])

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.key === 'Enter') {
      const q = e.currentTarget.value
      const search = new URLSearchParams({ query: q })
      router.push(`/search?${search.toString()}`)
    }
  }

  return (
    <div className={cn(s.root, className)}>
      <label className='hidden' htmlFor={id}>
        Search
      </label>
      <input
        id={id}
        className={s.input}
        placeholder='Search for products...'
        defaultValue={query || ''}
        onKeyUp={handleKeyUp}
      />
      <button className={s.iconContainer}>
        <svg className={s.icon} fill='currentColor' viewBox='0 0 20 20'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
          />
        </svg>
      </button>
    </div>
  )
}

export default memo(Searchbar)
