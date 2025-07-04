import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-16 h-16 relative rounded-full overflow-hidden border border-solid border-dark mr-4">
        {/* ✅ Use width & height instead of `fill` for simple logos */}
        <Image
          src="/logo.jpg" 
          alt="enigmax"
          width={64}
          height={64}
        />
      </div>
      <span className="font-bold text-xl">NullSect</span>
    </Link>
  );
};

export default Logo;
