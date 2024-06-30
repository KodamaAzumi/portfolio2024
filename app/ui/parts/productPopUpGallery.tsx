'use client';
import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';
import { useState } from 'react';

type Images = {
  id: string;
  src: string | StaticImageData;
  alt: string;
};

export default function ProductPopUpGallery({ images }: { images: Images[] }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  return (
    <div className="flex flex-col gap-y-6">
      <ul className="w-[85%] m-auto flex gap-x-6">
        {images.map((image, index) =>
          index === currentImgIndex ? (
            <GalleryBtn
              key={image.id + '_GalleryBtnKey'}
              image={image}
              status="block"
              handleClickBtn={() => setCurrentImgIndex(index)}
            />
          ) : (
            <GalleryBtn
              key={image.id + '_GalleryBtnKey'}
              image={image}
              status="hidden"
              handleClickBtn={() => setCurrentImgIndex(index)}
            />
          )
        )}
      </ul>
      <ul>
        {images.map((image, index) =>
          index === currentImgIndex ? (
            <GalleryImg key={image.id + '_GalleryImgKey'} image={image} status="block" />
          ) : (
            <GalleryImg key={image.id + '_GalleryImgKey'} image={image} status="hidden" />
          )
        )}
      </ul>
    </div>
  );
}

export function GalleryBtn({
  image,
  status,
  handleClickBtn,
}: {
  image: Images;
  status: string;
  handleClickBtn: React.MouseEventHandler<HTMLLIElement>;
}) {
  return (
    <li className="w-full max-w-[60px] drop-shadow" onClick={handleClickBtn}>
      <div
        className={clsx('w-full pt-[100%] relative', {
          'bg-black': status === 'hidden',
        })}
      >
        <Image
          className={clsx('absolute top-0 left-0 w-full h-full object-cover', {
            'opacity-70': status === 'hidden',
          })}
          src={image.src}
          alt={image.alt}
          priority={true}
        />
      </div>
    </li>
  );
}

export function GalleryImg({ image, status }: { image: Images; status: string }) {
  return (
    <li
      className={clsx('drop-shadow-md', {
        hidden: status === 'hidden',
        inlineBlock: status === ' inline-block',
      })}
    >
      <Image src={image.src} alt={image.alt} priority={true} />
    </li>
  );
}
