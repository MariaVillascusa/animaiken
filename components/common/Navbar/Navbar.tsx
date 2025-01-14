import { Searchbar, UserNav } from "@/components/common";
import { Container, Logo } from "@/components/ui";
import Link from "next/link";
import { FC } from "react";
import s from "./Navbar.module.css";

interface Link {
  href: string;
  label: string;
}

interface NavbarProps {
  links?: Link[];
}

const Navbar: FC<NavbarProps> = ({ links }) => (
  <Container clean className="mx-auto max-w-8xl px-6">
    <div className={s.nav}>
      <div className="flex items-center flex-1">
        <Link href="/" className={s.logo} aria-label="Logo">
          <Logo />
        </Link>
        <nav className={s.navMenu}>
          <Link href="/search" className={s.link}>
            All
          </Link>
          {links?.map((link) => (
            <Link
              href={`/category/${link.href}`}
              key={link.href}
              className={s.link}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      {process.env.COMMERCE_SEARCH_ENABLED && (
        <div className="justify-center flex-1 hidden lg:flex">
          <Searchbar />
        </div>
      )}
      <div className="flex items-center justify-end flex-1 space-x-8">
        <UserNav />
      </div>
    </div>
    {process.env.COMMERCE_SEARCH_ENABLED && (
      <div className="flex pb-4 lg:px-6 lg:hidden">
        <Searchbar id="mobile-search" />
      </div>
    )}
  </Container>
);

export default Navbar;
