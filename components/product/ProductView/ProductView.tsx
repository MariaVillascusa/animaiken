import cn from 'clsx'
import Image from 'next/image'
import s from './ProductView.module.css'
import { FC } from 'react'
// import usePrice from '@framework/product/use-price'
// import { WishlistButton } from '@components/wishlist'
import { ProductSlider, ProductCard } from '@/components/product'
import { Container, Text } from '@/components/ui'
// import { SEO } from '@/components/common'
import ProductSidebar from '../ProductSidebar'
import ProductTag from '../ProductTag'
import { Product } from '@/types'
interface ProductViewProps {
  product: Product
  relatedProducts: Product[]
}

const ProductView: FC<ProductViewProps> = ({ product, relatedProducts }) => {
  // const { price } = usePrice({
  //   amount: product.price.value,
  //   baseAmount: product.price.retailPrice,
  //   currencyCode: product.price.currencyCode!,
  // })
  return (
    <>
      <Container className='max-w-none w-full' clean>
        <div className={cn(s.root, 'fit')}>
          <div className={cn(s.main, 'fit')}>
            <ProductTag
              name={product.name}
              price={`${product.price}`}
              fontSize={32}
            />
            <div className={s.sliderContainer}>
              <ProductSlider key={product.id}>
                {product.images.map((image, i) => {
                  const imageSrc = `${process.env.STRAPI_API_URL}${image.url}`
                  return (
                    <div key={image.url} className={s.imageContainer}>
                      <Image
                        className={s.img}
                        src={imageSrc}
                        alt={'Product Image'}
                        width={300}
                        height={300}
                        priority={i === 0}
                        quality='85'
                      />
                    </div>
                  )
                })}
              </ProductSlider>
            </div>
            {/* {process.env.COMMERCE_WISHLIST_ENABLED && (
              <WishlistButton
                className={s.wishlistButton}
                productId={product.id}
                variant={product.variants[0]}
              />
            )} */}
          </div>

          <ProductSidebar
            key={product.id}
            product={product}
            className={s.sidebar}
          />
        </div>
        {relatedProducts.length && (
          <>
            <hr className='mt-7 border-accent-2' />
            <section className='py-12 px-6 mb-10'>
              <Text variant='sectionHeading'>Related Products</Text>
              <div className={s.relatedProductsGrid}>
                {relatedProducts.map((p) => (
                  <div
                    key={p.slug}
                    className='bg-accent-0 border border-accent-2'
                  >
                    <ProductCard
                      noNameTag
                      product={p}
                      key={p.slug}
                      variant='simple'
                      className='animated fadeIn'
                      imgProps={{
                        alt: p.name,
                        className: 'w-full h-full object-cover',
                      }}
                    />
                  </div>
                ))}
              </div>
            </section>
          </>
        ) || null}
      </Container>
      {/* <SEO
        title={product.name}
        description={product.description}
        openGraph={{
          type: 'website',
          title: product.name,
          description: product.description,
          images: [
            {
              url: `${process.env.STRAPI_API_URL}${product.images[0].url}`,
              width: '400',
              height: '400',
              alt: product.name,
            },
          ],
        }}
      /> */}
    </>
  )
}

export default ProductView
