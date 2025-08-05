export default function Blockquote({ text }: any) {
  return (
    <div className="flex text-sm h-auto font-medium mt-2 mb-4">
      <div className="w-[5px] h-auto bg-gray-500"></div>
      <div className="flex items-center pt-4 pb-4 pl-6 pr-6 w-full bg-gray-100 dark:text-gray-200 dark:bg-blockquote-color">
        {text[1].props.children}
      </div>
    </div>
  );
}
