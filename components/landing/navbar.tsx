import Link from "next/link";
import React from "react";

const navlinks = [
  {
    title: "Components",
    href: "/components",
  },
  {
    title: "Docs",
    href: "/docs",
  },
  {
    title: "Templates",
    href: "/templates",
  },
];

const Navbar = () => {
  return (
    <nav className="w-full flex backdrop-blur-2xl p-4 px-6 font-mono text-xs border-b border-neutral-700 justify-between items-center">
      <div className="flex items-center gap-8">
        <div className=" bg-amber-700 p-1 px-2 ">PENDORA.UI</div>
        <ul className="flex items-center gap-4 uppercase">
          {navlinks.map((link) => (
            <li
              className="underline-scroll relative hover:text-gray-300"
              key={link.title}
            >
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
