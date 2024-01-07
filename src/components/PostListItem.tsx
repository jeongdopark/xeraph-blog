import CalendarIcon from "./Icons/CalendarIcon";

export default function PostListItem() {
  return (
    <li className="flex w-full h-[70px]  mt-5 mb-5 justify-between items-center ">
      <div className="flex flex-col gap-1">
        <span className="text-2xl font-normal hover:underline cursor-pointer">브라우저 렌더링 파이프라인</span>
        <span className="text-xs font-thin text-gray-700"> Chrominum Rendering Pipeline</span>
      </div>
      <div className="flex gap-1">
        <CalendarIcon width={14} height={14} />
        <div className="text-xs font-light text-gray-600">2024.01.07</div>
      </div>
    </li>
  );
}
