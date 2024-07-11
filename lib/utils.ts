import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"
import { cache } from 'react'


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const authFormSchema = (type: string) => z.object({
  // sign up
  name: type === 'sign-in' ? z.string().optional() : z.string().min(3, { message: "First Name should be at least 3 characters long" }),
  // both
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password should be at least 8 characters long" }),
})


// export async function getProducts() {
//   const response = await fetch('/api/products');
//   if (!response.ok) {
//     throw new Error('Failed to fetch products');
//   }
//   return response.json();
// }


export const getProducts = cache(async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/products`, {
    next: {
      revalidate: 60 // Revalidate every 60 seconds
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  return response.json();
});

export const getBestSellingProducts = cache(async () => {
  const productDataArray = await getProducts();

  if (!Array.isArray(productDataArray) || productDataArray.length === 0) {
    console.log('No product data');
    return [];
  }

  const productData = productDataArray[0];

  if (!productData || !productData.specialCollections) {
    console.log('No special collections');
    return [];
  }

  const bestSellingCollection = productData.specialCollections.find(
    (collection: { name: string }) => collection.name === 'bestSelling'
  );

  if (!bestSellingCollection) {
    console.log('Best selling collection not found');
    return [];
  }


  const bestSellingProducts = productData.products.filter((product: { id: string }) =>
    bestSellingCollection.productIds.includes(product.id)
  );

  return bestSellingProducts;
});

export const getExploreOurProducts = cache(async () => {
  const productDataArray = await getProducts();

  if (!Array.isArray(productDataArray) || productDataArray.length === 0) {
    console.log('No product data');
    return [];
  }

  const productData = productDataArray[0];

  if (!productData || !productData.specialCollections) {
    console.log('No special collections');
    return [];
  }

  const exploreOurProductsCollection = productData.specialCollections.find(
    (collection: { name: string }) => collection.name === 'exploreOurProducts'
  );

  if (!exploreOurProductsCollection) {
    console.log('Explore Our Products collection not found');
    return [];
  }

  const exploreOurProducts = productData.products.filter((product: { id: string }) =>
    exploreOurProductsCollection.productIds.includes(product.id)
  );

  return exploreOurProducts;
});

export const getJustForYouProducts = cache(async () => {
  const productDataArray = await getProducts();

  if (!Array.isArray(productDataArray) || productDataArray.length === 0) {
    console.log('No product data');
    return [];
  }

  const productData = productDataArray[0];

  if (!productData || !productData.specialCollections) {
    console.log('No special collections');
    return [];
  }

  const justForYouProductsCollection = productData.specialCollections.find(
    (collection: { name: string }) => collection.name === 'justForYou'
  );

  if (!justForYouProductsCollection) {
    console.log('Explore Our Products collection not found');
    return [];
  }

  const justForYouProducts = productData.products.filter((product: { id: string }) =>
    justForYouProductsCollection.productIds.includes(product.id)
  );

  return justForYouProducts;
});
