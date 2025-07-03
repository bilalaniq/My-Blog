import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-16 h-16 relative rounded-full overflow-hidden border border-solid border-dark mr-4">
        <Image src="/logo.jpg" alt="enigmax" fill />
      </div>
      <span className="font-bold text-xl">NullSect</span>
    </Link>
  );
};

export default Logo;
