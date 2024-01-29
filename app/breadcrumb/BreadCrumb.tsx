"use client";
import { usePathname, useRouter } from "next/navigation";

const BreadCrumb = () => {
  const pathname = usePathname();
  const router = useRouter();
  const arr = pathname.split("/").filter((item) => item !== "");
  const lastItem = arr[arr.length - 1];

  const handleClick = (item: string) => {
    const index = arr.findIndex((elem) => elem === item);
    const link = arr.slice(0, index + 1).join("/");
    router.push(`/${link}`);
  };


  return (
    <div className="bg-slate-200 p-2 flex gap-4 w-fit rounded-sm">
      {arr.map((item) => (
        <span
          onClick={() => handleClick(item)}
          className="hover:underline cursor-pointer"
          key={item}
        >
          {item}
          {item !== lastItem && " /"}
        </span>
      ))}
    </div>
  );
};

export default BreadCrumb;
