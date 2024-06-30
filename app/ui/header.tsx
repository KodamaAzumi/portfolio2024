import Link from 'next/link';
import Image from 'next/image';
import icon from '@/public/icon.svg';

export default function Header() {
  return (
    <header id="header" className="text-[#4E4935] bg-[#F9F8F4]">
      <div className="container flex py-6 sm:py-8 px-4 xs:px-8 md:px-16">
        <Link href="/" className="flex mr-8 xs:mr-10 sm:mr-20 items-center">
          <Image
            src={icon}
            alt="ヘッダーの猫のアイコン"
            priority={true}
            className="mr-0 md:mr-3 min-w-[50px] min-h-[50px] w-[50px] h-[50px]"
          />
          <h1 className="font-bold text-3xl hidden md:block">Kodama</h1>
        </Link>
        <nav className="text-xs xs:text-sm sm:text-lg font-bold flex self-center">
          <Link className="mr-5 sm:mr-10 hover:underline hover:underline-offset-2" href="/">
            ABOUT
          </Link>
          <Link className="mr-5 sm:mr-10 hover:underline hover:underline-offset-2" href="/">
            PRODUCTS
          </Link>
          <Link href="/" className="hover:underline hover:underline-offset-2">
            ARTICLE
          </Link>
        </nav>
      </div>
    </header>
  );
}
