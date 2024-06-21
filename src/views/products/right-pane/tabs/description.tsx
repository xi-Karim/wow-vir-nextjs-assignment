export default function Description({ description }: { description: string }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: description }}></div>
  );
}