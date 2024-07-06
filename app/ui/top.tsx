// import Image from 'next/image';
// import nekoIcon from '@/public/neko-icon.svg';
import TopNekoIcon from './svgCompo/top-neko-icon';
import PageDownArrow from './parts/pageDownArrow';

export default function Top() {
  return (
    <main className="text-[#4E4935] bg-[#F9F8F4] h-[calc(100vh-98px)] sm:h-[calc(100vh-114px)]">
      <div className="h-full flex flex-col">
        {/* <Image
          className="m-auto w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] xl:w-[300px] xl:h-[300px]"
          src={nekoIcon}
          alt="トップエリアの猫のアイコン"
          priority={true}
        /> */}
        <TopNekoIcon className="m-auto w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] xl:w-[300px] xl:h-[300px]" />
        <PageDownArrow explanation={'Kodamaについて'} />
      </div>
    </main>
  );
}
