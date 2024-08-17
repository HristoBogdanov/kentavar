"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
  onClickFunction: () => void;
}

export default function NavbarItem({ path, text, onClickFunction }: Props) {
  const pathname = usePathname();

  const isTabActive = (path: string): boolean => {
    return path === pathname;
  };

  return (
    <div>
      <li
        style={{
          borderColor: isTabActive("/" + (path == "/" ? "" : path))
            ? "#991B1B"
            : "",
        }}
        className="border-l-[10px] pl-4 border-softBlack hover:border-red-800 transition-all duration-500"
        onClick={onClickFunction}
      >
        <Link href={path}>{text}</Link>
      </li>
    </div>
  );
}
