interface DetailsPropsType {
  shopName: string,
  name: string,
  sellingPrice: number,
  preparationTimeValue: number
  preparationTimeUnit: string
}
export default function Details({ shopName, name, sellingPrice, preparationTimeUnit, preparationTimeValue }: DetailsPropsType) {
  return (
    <div className="flex flex-col gap-2">
      <h5 className="text-blue-500 font-semibold text-xs">{shopName}</h5>
      <h6>{name}</h6>
      <strong className="font-semibold text-xl">AED {sellingPrice}</strong>
      <p className="text-gray-500 text-sm">Preparation Time : <strong className="font-semibold text-black">{preparationTimeValue} {preparationTimeUnit}</strong></p>
    </div>
  );
}