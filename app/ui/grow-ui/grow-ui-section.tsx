import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { YouTubeEmbed } from '@next/third-parties/google';

type Props = {
  head: string;
  paragraph: string;
  src?: string | StaticImageData;
  alt?: string;
  productUrl?: string;
  githubUrl?: string;
  videoid?: string;
};

export default function GrowUiSection({
  head,
  paragraph,
  src,
  alt,
  productUrl,
  githubUrl,
  videoid,
}: Props) {
  return (
    <section className="flex flex-col gap-4 lg:gap-6">
      <h3 className="text-xl lg:text-2xl font-bold">{head}</h3>
      <div className="w-[95%] m-auto flex flex-col gap-4 lg:gap-6">
        <p className="text-base lg:text-lg">{paragraph}</p>
        <div className="flex flex-col gap-y-2 text-base font-bold text-sky-900">
          {productUrl && (
            <Link href={productUrl}>
              <span className="hover:underline">chrome ウェブストア</span>
            </Link>
          )}
          {githubUrl && (
            <Link href={githubUrl}>
              <span className="hover:underline">GitHub</span>
            </Link>
          )}
        </div>
        {src && alt && <Image src={src} alt={alt} priority={true} />}
        {videoid && <YouTubeEmbed videoid={videoid} params="controls=1" style="max-width: 100%;" />}
      </div>
    </section>
  );
}
