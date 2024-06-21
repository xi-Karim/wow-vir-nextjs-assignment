import SimilarProduct from "../similar-product";

export default interface SimilarProductsResponse {
  data: SimilarProduct[],
  status: 200 | 500,
}