import Link from "next/link";

interface Props {
  title: string;
  content: string;
  buttonText: string;
  buttonLink: string;
}

export default function GridTextBox({
  title,
  content,
  buttonText,
  buttonLink,
}: Props) {
  return (
    <div className="h-[500px] w-full bg-red-800 p-6 text-white flex items-end">
      <div className="flex flex-col h-1/2 w-full justify-center gap-6">
        <h2 className="uppercase font-bold text-3xl">{title}</h2>
        <p className="text-xl">{content}</p>
        <Link href={buttonLink} className="text-lg font-black uppercase">
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
