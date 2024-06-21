import Divider from "@/components/divider";
import SimilarSlider from "./slider";
import SimilarProduct from "@/types/similar-product";

export default function SimilarProducts({ products }: { products: SimilarProduct[] }) {
  return (
    <div className="container">
      <Divider title="Customers Also Bought" />
      <SimilarSlider products={products} />
    </div>
  );
}