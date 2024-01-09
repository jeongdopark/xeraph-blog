export default function Blockquote({ text }: any) {
  return (
    <div className="flex h-[50px] text-sm font-medium mt-7 mb-2">
      <div className="w-[5px] h-full bg-gray-500"></div>
      <div className="flex items-center pl-3 pr-3 bg-gray-100 justify-center">{text[1].props.children}</div>
    </div>
  );
}
