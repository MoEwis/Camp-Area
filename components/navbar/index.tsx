import { NAV_LINKS } from "@/constants/index";
import Image from "next/image";
import Link from "next/link";
import Button from "../button/Button";

const Navbar = () => {
  return (
    <nav className=" flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="hilink" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 hover:font-bold "
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden ">
        <Button type="button" icon="/user.svg" variant="btn_dark_green">
          Login
        </Button>
      </div>
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
