import Link from "next/link";
import Image from "next/image";
import profileimg from "@/public/logo.jpg";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-4">
        <Image src={profileimg} alt="enigmax" />
      </div>
      <span className="font-bold text-xl">Enigma</span>
    </Link>
  );
};

export default Logo;
