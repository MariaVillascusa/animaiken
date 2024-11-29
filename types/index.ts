export type Category = {
  id: number;
  name: string;
  slug: string;
  brands: Brand[];
  families: Family[];
  subFamilies: SubFamily[];
  products: Product[];
};

export type Brand = {
  id: number;
  name: string;
  slug: string;
  images: string[];
  categories: Category[];
  families: Family[];
  subFamilies: SubFamily[];
  products: Product[];
};

export type Family = {
  id: number;
  name: string;
  slug: string;
  categories: Category[];
  brands: Brand[];
  subFamilies: SubFamily[];
  products: Product[];
};

export type SubFamily = {
  id: number;
  name: string;
  slug: string;
  family: Family;
  categories: Category[];
  brands: Brand[];
  products: Product[];
};

export type Product = {
  id: number;
  name: string;
  slug: string;
  price: number;
  images: { url: string }[];
  brand: Brand;
  category: Category;
  description: string;
};

export type ProductFilters = {
  category?: string;
  brand?: string;
  family?: string;
  subFamily?: string;
};

export type ProductFiltersGQL = {
  category?: { slug: { eq: string } };
  brand?: { slug: { eq: string } };
  family?: { slug: { eq: string } };
  subFamily?: { slug: { eq: string } };
  name?: { contains: string };
  slug?: { eq: string };
};

export type BasicCategory = Omit<
  Category,
  "brands" | "families" | "subFamilies" | "products"
>;
export type BasicBrand = Omit<
  Brand,
  "categories" | "families" | "subFamilies" | "products"
>;
