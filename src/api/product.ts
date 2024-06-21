import ProductResponse from "@/types/dto/products"
import SimilarProductsResponse from "@/types/dto/similar-product"

const fetchProduct = async (id: string) => {
  const res = await fetch(`https://api.wowvir.com/store/products/${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return (res.json() as Promise<ProductResponse>)
}

const fetchSimilarProduct = async (id: string) => {
  const res = await fetch(`https://api.wowvir.com/store/products/${id}/similar`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return (res.json() as Promise<SimilarProductsResponse>)
}

export { fetchProduct, fetchSimilarProduct }