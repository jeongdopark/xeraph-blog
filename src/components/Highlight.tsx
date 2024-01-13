export default function Highlight({ text }: { text: string }) {
  return <div className="bg-gray-100 pl-1 pr-1 rounded-md inline-block font-medium dark:bg-gray-500">{text}</div>;
}
