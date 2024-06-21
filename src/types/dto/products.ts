import Product from "../product";

export default interface ProductResponse {
  data: Product,
  status: 200 | 500
}