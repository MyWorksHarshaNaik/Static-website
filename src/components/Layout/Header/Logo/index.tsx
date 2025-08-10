import Image from 'next/image';
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link
      href="/"
      className="flex items-center text-black dark:text-white text-3xl gap-4"
      style={{ fontFamily: 'Rallifornia' }}
    >
      {/* add your logo here */}
       <Image
        src="/images/logo/Logo.png" // Path in public/ directory
        alt="Logo"
        width={100} // Adjust as needed
        height={50}
      />

    </Link>
  );
};

export default Logo;
