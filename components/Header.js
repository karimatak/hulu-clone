import React from "react";
import Image from "next/image";
import { HeaderItem } from "./HeaderItem";
import { HEADER_ITEMS } from "../constants/header-items";

export const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        {HEADER_ITEMS.map((item) => (
          <HeaderItem title={item.title} Icon={item.icon} />
        ))}
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
};
