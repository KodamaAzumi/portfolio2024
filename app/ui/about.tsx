import Image from 'next/image';
import Link from 'next/link';
import nekoIcon from '@/public/neko-icon.svg';
import github_mark_white from '@/public/github-mark-white.svg';
import PageDownArrow from './parts/pageDownArrow';

export default function About() {
  return (
    <section id="about" className="text-sky-900 bg-sky-300 md:h-screen">
      <div className="container min-w-full h-full flex flex-col">
        <div className="h-full flex flex-col items-center justify-center pt-20">
          <h2 className="md:hidden text-3xl xs:text-4xl font-bold mb-8">KODAMA</h2>
          <div className="flex flex-col md:flex-row items-center justify-center py-6">
            <div className="mb-8 md:mb-0 md:mr-8">
              <Image
                className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] xl:w-[250px] xl:h-[250px]"
                src={nekoIcon}
                alt="アバウトの猫のアイコン"
                priority={true}
              />
            </div>
            <div className="w-2/3 sm:w-1/2 md:w-1/3 xl:w-1/4">
              <h2 className="hidden md:block text-3xl xs:text-4xl font-bold mb-8">KODAMA</h2>
              <p className="tex-base sm:text-lg font-medium mb-8">
                名古屋造形大学情報表現領域出身。大学3年生の時に授業でJavaScriptの基礎を勉強して、プログラミングを始めました。大学では、主にWebを使った制作をしていました。
                <br />
                現在はプログラミングを勉強しながら就職活動を行っています。
              </p>
              <Link className="inline-block" href="https://github.com/KodamaAzumi">
                <div className="flex items-center bg-sky-800 hover:bg-sky-700 text-white px-2 py-2 rounded-md">
                  <Image
                    className="w-[25px] h-[25px] mr-2"
                    src={github_mark_white}
                    alt="GitHubのマーク"
                    priority={true}
                  />
                  <span className="text-base">GitHub</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <PageDownArrow explanation={'作ったモノ'} />
      </div>
    </section>
  );
}
