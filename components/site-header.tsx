"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RosebudMark } from "@/components/rosebud-mark";
import { SITE_NAME } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/schedule", label: "Schedule" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="relative z-10 flex w-full min-w-0 flex-col gap-4 px-1 py-2 sm:flex-row sm:items-center sm:justify-between">
      <Link href="/" className="group flex items-center gap-3 no-underline">
        <RosebudMark className="h-11 w-11 shrink-0 transition-transform duration-300 group-hover:-rotate-8" />
        <span className="font-display text-[1.35rem] font-extrabold leading-[1.05] tracking-wide text-ink sm:text-[1.55rem]">
          {SITE_NAME}
        </span>
      </Link>
      <nav className="flex items-center gap-2">
        {links.map((link) => {
          const active =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 font-display text-base font-bold no-underline transition-transform duration-200 hover:-translate-y-0.5 ${
                active
                  ? "bg-purple text-white"
                  : "bg-green text-white hover:bg-green-dark"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
