import BarberShopItem from "@/components/BarberShopItem";
import BookingItem from "@/components/BookItem";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { db } from "@/lib/prisma";
import { SearchIcon } from "lucide-react";
import Image from "next/image";

interface QuickSearchOptions {
  imageURl: string;
  title: string;
}

const quickSearchOptions: QuickSearchOptions[] = [
  { imageURl: "/cabelo.svg", title: "Cabelo" },
  { imageURl: "/barba.svg", title: "barba" },
  { imageURl: "/acabamento.svg", title: "acabamento." },
  { imageURl: "/massagem.svg", title: "massagem" },
  { imageURl: "/sobrancelha.svg", title: "sobrancelha" },
  { imageURl: "/hidratacao.svg", title: "hidratacao" },
];

export default async function Home() {
  const barbershops = await db.barbershop.findMany();
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

        <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button className="gap-2" variant="secondary" key={option.title}>
              <Image
                src={option.imageURl}
                width={16}
                height={16}
                alt={option.title}
              />
              {option.title}
            </Button>
          ))}
        </div>

        <div className="relative w-full h-[150px] mt-6">
          <Image
            src="/banner-01.png"
            alt=""
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <BookingItem />

        <h2 className="mt-6 mb-3 uppercase font-bold text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
        <h2 className="mt-6 mb-3 uppercase font-bold text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              © 2023 Copyright <span className="font-bold">FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
}
