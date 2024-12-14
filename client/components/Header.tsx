import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-50 flex items-center justify-between py-4 px-8">
      <Image
        src="/assets/logo.svg"
        alt="Logo"
        width={40}
        height={40}
        className=""
        priority
      />
      <div className="">
        <Button variant={"link"}>Sign In</Button>
        <Button className="border rounded-full bg-transparent hover:bg-transparent hover:border-purple-400 text-white border-white ml-4">
          Sign Up <ArrowRight />
        </Button>
      </div>
    </header>
  );
};

export default Header;
