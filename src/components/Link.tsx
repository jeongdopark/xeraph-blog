export default function Link({ link, replace }: { link: string; replace: string }) {
  return (
    <a href={link} target="_blank" className="text-blue-400 underline text-[16px]">
      {replace}
    </a>
  );
}
