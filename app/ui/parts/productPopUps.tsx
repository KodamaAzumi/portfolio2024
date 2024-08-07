'use client';
import { StaticImageData } from 'next/image';
import CreateTime from './createTime';
import Link from 'next/link';
import SkillTags from './skillTags';
import { products } from '../../lib/products';
import CloseIcon from '../svgCompo/closeIcon';
import ProductPopUpGallery from './productPopUpGallery';
import clsx from 'clsx';
import { motion } from 'framer-motion';

type CurrentProductStatus = {
  id: string;
  status: string;
};

export default function ProductPopUps({
  currentProductStatus,
  setCurrentProductStatus,
}: {
  currentProductStatus: CurrentProductStatus;
  setCurrentProductStatus: React.Dispatch<React.SetStateAction<CurrentProductStatus>>;
}) {
  return (
    <div>
      {products.map((product) => {
        const { id, title, time, explanation, url, skills, medium, images } = product;
        return currentProductStatus.id === id ? (
          <ProductPopUp
            key={id + 'ProductPopUpKey'}
            title={title}
            time={time}
            explanation={explanation}
            productUrl={url.product}
            githubUrl={url.github}
            skills={skills}
            medium={medium}
            images={images}
            status={currentProductStatus.status}
            setCurrentProductStatus={setCurrentProductStatus}
          />
        ) : (
          <ProductPopUp
            key={id + 'ProductPopUpKey'}
            title={title}
            time={time}
            explanation={explanation}
            productUrl={url.product}
            githubUrl={url.github}
            skills={skills}
            medium={medium}
            images={images}
            status="hidden"
            setCurrentProductStatus={setCurrentProductStatus}
          />
        );
      })}
    </div>
  );
}

type Images = {
  id: string;
  src: string | StaticImageData;
  alt: string;
};

type Props = {
  title: string;
  time: string;
  explanation: string;
  productUrl: string;
  githubUrl: string;
  skills: string[];
  medium: string;
  images: Images[];
  status: string;
  setCurrentProductStatus: React.Dispatch<React.SetStateAction<CurrentProductStatus>>;
};

export function ProductPopUp({
  title,
  time,
  explanation,
  productUrl,
  githubUrl,
  skills,
  medium,
  images,
  status,
  setCurrentProductStatus,
}: Props) {
  return (
    <div>
      <div
        className={clsx('fixed top-0 left-0 z-0 w-full h-full bg-black opacity-40', {
          hidden: status === 'hidden',
          block: status === 'visible',
        })}
      ></div>
      <div
        className={clsx('fixed top-0 left-0 z-10 w-full h-full justify-center items-center', {
          hidden: status === 'hidden',
          flex: status === 'visible',
        })}
      >
        <motion.div
          className="bg-[#F9F8F4] text-[#4E4935] rounded-md max-w-[1200px] max-h-[700px] w-[94%] xs:w-[84%] md:w-[94%] lg:w-[84%] h-[90%] relative p-6 sm:p-12"
          animate={status === 'visible' ? { scale: [0.98, 1] } : {}}
          transition={{ type: 'spring' }}
        >
          <div
            className="max-w-[40px] max-h-[40px] w-full h-full absolute top-5 right-6 hover:opacity-70 z-10"
            onClick={() => setCurrentProductStatus({ id: '', status: '' })}
          >
            <CloseIcon />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between w-full h-full overflow-y-auto">
            <div className="md:w-[40%] flex flex-col mb-12 lg:mb-0 pt-12 sm:pt-4 md:pt-0">
              <div>
                <div className="flex flex-col gap-y-2 mb-6">
                  <h3 className="font-bold text-2xl">{title}</h3>
                  <CreateTime time={time} size="large" />
                  <hr className="border-[0.1px] border-[#4E4935]" />
                </div>
                <div className="px-2 mb-6">
                  <p className="mb-4 xl:text-lg xl:leading-relaxed">{explanation}</p>
                  <div className="flex flex-col gap-y-2 text-base font-bold text-sky-900">
                    {productUrl && (
                      <Link href={productUrl}>
                        <span className="hover:underline">作品ページ</span>
                      </Link>
                    )}
                    {githubUrl && (
                      <Link href={githubUrl}>
                        <span className="hover:underline">GitHub</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-y-2 mb-6">
                  <h3 className="font-bold text-xl">使用技術</h3>
                  <hr className="border-[0.1px] border-[#4E4935]" />
                </div>
                <div className="px-2">
                  <SkillTags skills={skills} medium={medium}></SkillTags>
                </div>
              </div>
            </div>
            <div className="md:w-[54%]">
              <ProductPopUpGallery images={images} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
