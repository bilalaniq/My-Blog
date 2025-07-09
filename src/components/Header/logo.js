import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className="w-12 h-12 md:w-16 md:h-16 relative rounded-full overflow-hidden border border-solid border-dark dark:border-light mr-2 md::mr-4">
        <Image
          src="/logo.jpg" 
          alt="enigmax"
          width={64}
          height={64}
        />
      </div>
      <span className="font-bold text-lg md:text-xl dark:font-semibold">NullSect</span>
    </Link>
  );
};

export default Logo;
