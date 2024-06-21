export default function Divider({ title = "" }) {

  if (!title) return <div className="border-t border-gray-200"></div>

  return (
    <div className="relative flex py-5 items-center">
      <span className="flex-shrink mx-4 text-gray-800 font-semibold text-2xl">{title}</span>
      <div className="flex-grow border-t border-gray-400"></div>
    </div>
  );
}