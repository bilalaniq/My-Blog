import Link from "next/link";
import Logo from "./logo";
import { LinkedinIcon, GithubIcon, InstagramIcon, SunIcon } from "../icons";

const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between ">
      <Logo />
      <nav
        className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center 
      fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50"
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mr-2">
          About
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
        <button>
          <SunIcon />
        </button>
      </nav>
      <div>
        <a
          href="https://www.linkedin.com/in/muhammad-bilal-b159a5292/"
          className="inline-block w-6 h-6 mr-4"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href="https://github.com/bilalaniq"
          className="inline-block w-6 h-6 mr-4"
        >
          <GithubIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href="https://www.instagram.com/bilalaniq4/"
          className="inline-block w-6 h-6 mr-4"
        >
          <InstagramIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
    </header>
  );
};

export default Header;
