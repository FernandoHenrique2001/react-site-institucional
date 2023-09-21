"use client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="flex justify-end items-center w-full h-12 bg-[#160b30] sticky top-0 z-10">
      <div className="flex justify-end items-center gap-8 py-0 px-8">
        <a
          className="text-white no-underline transition-transform duration-2000 hover:transform hover:scale-110 cursor-pointer"
          onClick={() => router.push("/")}
        >
          HOME
        </a>
        <a
          className="text-white no-underline transition-transform duration-2000 hover:transform hover:scale-110 cursor-pointer"
          onClick={() => router.push("/#services")}
        >
          SERVIÇOS
        </a>
        <a
          className="text-white no-underline transition-transform duration-2000 hover:transform hover:scale-110 cursor-pointer"
          onClick={() => router.push("/#portfolio")}
        >
          PORTIFÓLIO
        </a>
        <a
          className="text-white no-underline transition-transform duration-2000 hover:transform hover:scale-110 cursor-pointer"
          onClick={() => router.push("/#about")}
        >
          QUEM SOU
        </a>
        <a
          className="text-white no-underline transition-transform duration-2000 hover:transform hover:scale-110 cursor-pointer"
          onClick={() => router.push("/contact")}
        >
          CONTATO
        </a>
      </div>
    </div>
  );
}
