import Description from "./description";

export default function ProductRightPaneTabs({ description }: { description: string }) {
  return (
    <div className="flex flex-col gap-4">
      <ul>
        <li className="text-rose-500 font-bold border-b-2 border-b-rose-500 w-fit cursor-pointer">Description</li>
      </ul>
      <Description description={description} />
    </div>
  );
}