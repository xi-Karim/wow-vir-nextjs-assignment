import Divider from "@/components/divider";
import ProductRightPaneActions from "./actions";
import Details from "./details";
import ProductRightPaneTabs from "./tabs";

interface RightPanePropsType {
  shopName: string,
  name: string,
  sellingPrice: number,
  preparationTimeValue: number,
  preparationTimeUnit: string,
  description: string,
}

export default function RightPane(props: RightPanePropsType) {
  return (
    <div className="flex flex-col gap-8">
      <Details {...props} />
      <Divider />
      <ProductRightPaneActions />
      <ProductRightPaneTabs description={props.description} />
    </div>
  );
}