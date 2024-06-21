import Image from "next/image";

export default function SimilarSliderCard({ name, sellingPrice, image }: { name: string, sellingPrice: number, image: string }) {
  return (
    <div className="border-0 rounded-xl shadow-lg overflow-hidden my-6">
      <Image alt={name} src={image} width={300} height={300} className="w-full h-[300px]" />
      <div className="flex flex-col p-4">
        <span className=" overflow-hidden text-nowrap text-ellipsis">{name}</span>
        <strong>{sellingPrice}</strong>
      </div>
    </div>
  )
}
