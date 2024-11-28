import cn from 'clsx'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import s from './ProductCard.module.css'
// import WishlistButton from '@components/wishlist/WishlistButton'
// import usePrice from '@framework/product/use-price'
import { Product } from '@/types'
import ProductTag from '../ProductTag'

interface Props {
  className?: string
  product: Product
  noNameTag?: boolean
  imgProps?: Omit<ImageProps, 'src' | 'layout' | 'placeholder' | 'blurDataURL'>
  variant?: 'default' | 'slim' | 'simple'
}

const placeholderImg = '/product-img-placeholder.svg'

const ProductCard: FC<Props> = ({
  product,
  imgProps,
  className,
  noNameTag = false,
  variant = 'default',
}) => {
  const srcImage =
    (product.images &&
      `${process.env.STRAPI_API_URL}${product.images[0]?.url}`) ||
    ''
  // const { price } = usePrice({
  //   amount: product.price.value,
  //   baseAmount: product.price.retailPrice,
  //   currencyCode: product.price.currencyCode!,
  // })

  const rootClassName = cn(
    s.root,
    { [s.slim]: variant === 'slim', [s.simple]: variant === 'simple' },
    className
  )

  return (
    <Link
      href={`/product/${product.slug}`}
      className={rootClassName}
      aria-label={product.name}
    >
      {variant === 'slim' && (
        <>
          <div className={s.header}>
            <span>{product.name}</span>
          </div>
          {product?.images && (
            <Image
              quality='85'
              src={srcImage || placeholderImg}
              alt={product.name || 'Product Image'}
              height={320}
              width={320}
              {...imgProps}
            />
          )}
        </>
      )}

      {variant === 'simple' && (
        <>
          {/* {process.env.COMMERCE_WISHLIST_ENABLED && (
            <WishlistButton
              className={s.wishlistButton}
              productId={product.id}
              variant={product.variants[0]}
            />
          )} */}

          <div className={s.imageContainer}>
            {product?.images && (
              <Image
                alt={product.name || 'Product Image'}
                className={s.productImage}
                src={srcImage || placeholderImg}
                height={250}
                width={250}
                quality='85'
                {...imgProps}
              />
            )}
          </div>
          {!noNameTag && (
            <div className={s.header}>
              <h4 className={s.name}>{product.name}</h4>
              <div className={s.price}>{`${product.price}€`}</div>
            </div>
          )}
        </>
      )}

      {variant === 'default' && (
        <>
          {/* {process.env.COMMERCE_WISHLIST_ENABLED && (
            <WishlistButton
              className={s.wishlistButton}
              productId={product.id}
              variant={product.variants[0] as any}
            />
          )} */}
          <ProductTag name={product.name} price={`${product.price}`} />
          <div className={s.imageContainer}>
            {product?.images && (
              <Image
                alt={product.name || 'Product Image'}
                className={s.productImage}
                src={srcImage || placeholderImg}
                height={320}
                width={320}
                quality='85'
                {...imgProps}
              />
            )}
          </div>
        </>
      )}
    </Link>
  )
}

export default ProductCard
