import { Icon } from "@iconify/react/dist/iconify.js";

export default function AddToCartButton() {
  return (
    <div className="bg-gradient-to-r from-rose-400 to-rose-600 text-white w-full rounded-md flex justify-center items-center">
      Add to cart <Icon className="ms-2" icon="bi:cart" />
    </div>
  )
}