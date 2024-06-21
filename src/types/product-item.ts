export default interface ProductItem {
  pId: string,
  stockStatus: string,
  visibility: string,
  sellingPrice: number,
  mainImage: string,
  images: string[]
  sku?: string,
  slashPrice?: number,
  attributes: Attribute[],
  itemDescription?: string
}

interface Attribute {
  name: string,
  _id: string,
  attribute: {
    _id: string
  },
  attributeId: string
}