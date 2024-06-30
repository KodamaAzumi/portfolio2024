import Image from 'next/image';
import icon from '@/public/icon.svg';
import PageDownArrow from './parts/pageDownArrow';

export default function Top() {
  return (
    <main className="text-[#4E4935] bg-[#F9F8F4] h-[calc(100vh-98px)] sm:h-[calc(100vh-114px)]">
      <div className="container min-w-full h-full flex flex-col">
        <div className="flex-auto flex items-start ">
          <Image
            className="m-auto w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] xl:w-[300px] xl:h-[300px]"
            src={icon}
            alt="トップエリアの猫のアイコン"
            priority={true}
          />
        </div>

        <PageDownArrow explanation={'KODAMAについて'} />
      </div>
    </main>
  );
}
