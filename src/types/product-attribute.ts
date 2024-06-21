export default interface ProductAttribute {
  _id: string,
  showName: string,
  values: { _id: string, name: string }[],
}