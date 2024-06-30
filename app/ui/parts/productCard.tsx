import Image, { StaticImageData } from 'next/image';
import CreateTime from './createTime';
import SkillTags from './skillTags';

type Props = {
  src: string | StaticImageData;
  alt: string;
  title: string;
  time: string;
  skills: string[];
  medium: string;
  handleClickCard: React.MouseEventHandler<HTMLDivElement>;
};

export default function ProductCard({
  src,
  alt,
  title,
  time,
  skills,
  medium,
  handleClickCard,
}: Props) {
  return (
    <div
      className="bg-[#F9F8F4] text-[#4E4935] border-4 border-[#4E4935] rounded-md hover:opacity-70"
      onClick={handleClickCard}
    >
      <div className=" flex flex-col h-full">
        <div className="w-full pt-[56.25%] relative">
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={src}
            alt={alt}
            priority={true}
          />
        </div>
        <div className="p-4 flex flex-col gap-4 h-full">
          <CreateTime time={time} size="base" />
          <p className="text-base xs:text-lg font-bold">{title}</p>
          <SkillTags skills={skills} medium={medium}></SkillTags>
        </div>
      </div>
    </div>
  );
}
