import AddToCartButton from "./add-to-cart";
import ActionCounter from "./counter";

export default function ProductRightPaneActions() {
  return (
    <>
      <input type="text" className="border rounded-md w-full p-3" placeholder="Notes" />
      <div className="flex flex-row gap-2">
        <ActionCounter />
        <AddToCartButton />
      </div>
    </>
  );
}