import Link from 'next/link';
import Image from 'next/image';
import nekoIcon from '@/public/neko-icon.svg';

export default function Header() {
  return (
    <header id="header" className="text-[#4E4935] bg-[#F9F8F4] py-6 sm:py-8">
      <div className="flex w-[90%] m-auto">
        <Link href="/" className="flex items-center mr-[6%]">
          <Image
            src={nekoIcon}
            alt="ヘッダーの猫のアイコン"
            priority={true}
            className="mr-0 md:mr-3 min-w-[50px] min-h-[50px] w-[50px] h-[50px]"
          />
          <h1 className="font-bold text-3xl hidden md:block">Kodama</h1>
        </Link>
        <nav className="text-sm xs:text-base sm:text-lg font-bold flex items-center flex-wrap gap-x-5 sm:gap-x-10 gap-y-1">
          <Link className="hover:underline hover:underline-offset-2" href="/#about">
            ABOUT
          </Link>
          <Link className="hover:underline hover:underline-offset-2" href="/#products">
            PRODUCTS
          </Link>
          {/* <Link href="/#blog" className="hover:underline hover:underline-offset-2">
            BLOG
          </Link> */}
        </nav>
      </div>
    </header>
  );
}
