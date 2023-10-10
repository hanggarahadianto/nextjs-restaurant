"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      className="hiddden md:block cursor-pointer"
      src="/images/avika.png"
      height="100"
      width="100"
      alt="Logo"
    />
  );
};

export default Logo;