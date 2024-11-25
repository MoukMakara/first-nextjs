"use client";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
// import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menulist } from "./Menu";

type MenuType = {
  name: string;
  path: string;
  active: boolean;
};

export default function NavbarComponent() {
  // const pathname = usePathname();
  const [menu, setMenu] = useState<MenuType[]>(Menulist); // menu list

  const updateMenu = (path: string) => {
    const newMenu = menu.map((item) => {
      if (path === item.path) {
        return {
          ...item,
          active: true,
        };
      } else {
        return {
          ...item,
          active: false,
        };
      }
    });
    setMenu(newMenu);
  };
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="/">
        <img
          src="/next.svg"
          className="container mx-16 mr-3 mt-3 h-6 sm:h-6"
          alt="Flowbite React Logo"
        />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Next JS
        </span> */}
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        {menu.map((item, index) => {
          return (
            <NavbarLink
              onClick={() => updateMenu(item.path)}
              key={index}
              href={item.path}
              as={Link}
              active={item.active}
              // active={item.path === pathname}
            >
              {item.name}
            </NavbarLink>
          );
        })}
      </NavbarCollapse>
    </Navbar>
  );
}
