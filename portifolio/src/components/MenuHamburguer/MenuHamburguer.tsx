import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";

const links = [
  {
    id: 0,
    url: "#start",
    name: "Início",
  },
  {
    id: 1,
    url: "#about",
    name: "Sobre",
  },
  {
    id: 2,
    url: "#projects",
    name: "Projetos",
  },
  {
    id: 3,
    url: "#skills",
    name: "Habilidades",
  },
  {
    id: 4,
    url: "#contacts",
    name: "Contatos",
  },
];

const MenuHambuguer = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="cursor-pointer hover:bg-[#434237] rounded-sm bg-[#BC8A3C]">
          <RxHamburgerMenu color="white"/>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[200px]">
        <SheetHeader>
          <div className="flex items-center justify-center pt-10">
            <ul className="flex flex-col gap-8">
              {links.map((link) => (
                <SheetTitle key={link.id}>
                  <li className="hover:text-gray-400">
                    <a href={link.url}>{link.name}</a>
                  </li>
                </SheetTitle>
              ))}
            </ul>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MenuHambuguer;
