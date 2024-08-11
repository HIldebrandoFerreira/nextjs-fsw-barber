import Image from "next/image";
import { Button } from "../ui/button";
import { CalendarIcon, HomeIcon } from "lucide-react";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { quickSearchOptions } from "@/app/constants/search";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "../ui/avatar";
import Link from "next/link";

const SidebarSheet = () => {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="py-5 border-b border-solid flex items-center">
        <Avatar>
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/12777871?v=4"
            alt="imagem"
          />
        </Avatar>
        <div>
          <p className="font-bold">Hilderando Nascimento</p>
          <p className="text-sm">hildebrandoweb@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Inivio
            </Link>
          </Button>
        </SheetClose>
        <Button className="justify-start gap-2" variant="ghost">
          <CalendarIcon size={18} />
          Agendar
        </Button>
      </div>
      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map((option) => (
          <Button
            className="justify-start gap-2"
            variant="ghost"
            key={option.title}
          >
            <Image
              src={option.imageUrl}
              height={16}
              width={18}
              alt={option.title}
            />

            {option.title}
          </Button>
        ))}
      </div>
      <div className="flex flex-col gap-2 py-5">
        <Button className="justify-start" variant="ghost">
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  );
};

export default SidebarSheet;
