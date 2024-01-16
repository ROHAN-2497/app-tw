import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            alt="menu"
            src="/assets/icons/menu.svg"
            width={28}
            height={28}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className=" flex flex-col gap-6 bg-white md:hidden ">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
