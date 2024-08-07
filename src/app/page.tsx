import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Brando</h2>
        <p>quarta-feira 07 de agosto</p>
        <div className="flex gap-2 items-center mt-6">
          <Input placeholder="faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="relative w-full h-[150px] mt-6">
          <Image
            src="/banner-01.png"
            alt=""
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
