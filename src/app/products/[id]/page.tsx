import { fetchProduct, fetchSimilarProduct } from "@/api/product"
import ProductFeature from "@/views/products/features"
import RightPane from "@/views/products/right-pane"
import SimilarProducts from "@/views/products/similar"
import ProductSlider from "@/views/products/slider"

export default async function Page({ params }: { params: { id: string } }) {
  const { data: product } = await fetchProduct(params.id)
  const { data: simliarProducts } = await fetchSimilarProduct(params.id);

  return (
    <main>
      <div className="flex flex-col gap-4 p-12">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <ProductSlider data={product.productItems[0].images} />
          </div>

          <RightPane
            shopName={product.shop.shopName}
            name={product.name}
            sellingPrice={product.productItems[0].sellingPrice}
            preparationTimeValue={product.preparationTimeValue}
            preparationTimeUnit={product.preparationTimeUnit}
            description={product.description}
          />
        </div>
        <ProductFeature />
        <SimilarProducts products={simliarProducts} />
      </div>
    </main>
  );
}