export default function Blockquote({ text }: any) {
  return (
    <div className="flex text-sm h-auto font-medium mt-7 mb-2">
      <div className="w-[5px] h-auto bg-gray-500"></div>
      <div className="flex items-center p-4 bg-gray-100 justify-center dark:text-gray-200 dark:bg-blockquote-color">
        {text[1].props.children}
      </div>
    </div>
  );
}
