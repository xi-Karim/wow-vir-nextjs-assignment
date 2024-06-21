import MetaData from "./meta-data"
import ProductAttribute from "./product-attribute"
import ProductItem from "./product-item"
import ProductShop from "./product-shop"

export default interface Product {
  _id: string,
  name: string,
  description: string,
  isCustomizable: boolean,
  COD: boolean,
  preparationTimeUnit: "Minutes",
  preparationTimeValue: number
  attributesList: ProductAttribute[]
  "productItems": ProductItem[],
  shop: ProductShop,
  brand: null,
  isFavorite: boolean,
  isOnlySchedule: boolean,
  subTitle: null | string,
  metaData: MetaData
}