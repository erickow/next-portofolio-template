import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import Image from "next/image";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const LIST_MENU = [
    { title: "Home", route: "/" },
    { title: "Portofolio", route: "/portofolio" },
    { title: "Contact", route: "/contact" }
  ]
  return (
    <header className="bg-black fixed w-full z-10" style={{ borderBottom: ".5px solid white" }}>
      <div className="flex flex-wrap items-center justify-between md:justify-center lg:container px-2 py-2 mx-auto md:flex-no-wrap md:px-2">
        <div className="flex items-center px-2">
          <Image
            src="/wawan-videograpy-brand.png"
            width={200}
            height={50}
            priority
            alt="Intan Kurniawan Icon"
          />
        </div>

        <button
          className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className={cn(
        "md:flex flex-col md:flex-row items-center md:justify-center text-sm w-full md:w-auto",
        mobileMenuIsOpen ? `block` : `hidden`
      )}>
        <ul
          className={cn(
            "md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto",
            mobileMenuIsOpen ? `block` : `hidden`
          )}
        >
          {LIST_MENU.map(({ route, title }) => (
            <Link href={route} key={title}>
              <li className="md:mt-0 hover:bg-gray-700 py-2 px-8 cursor-pointer"
                key={title}
                onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}>
                <a className="block text-white">{title}</a>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
}
