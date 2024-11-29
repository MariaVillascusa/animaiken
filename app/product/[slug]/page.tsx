import { ProductView } from "@/components/product";
import { fetchProductsByGQL } from "@/lib/api/api";
// import s from "./Product.module.css";

interface ProductPageProps {
  params: {
    slug: string;
  };
}
export default async function Product({ params }: ProductPageProps) {
  const { slug } = params;
  const { articles = [] } = await fetchProductsByGQL({
    slug: { eq: slug },
  });
  const product = articles[0];
  return (
    <div className="p-8 font-[family-name:var(--font-geist-sans)]">
      <ProductView product={product} relatedProducts={[]} />
    </div>
  );
}
