'use client';
import { motion } from 'framer-motion';
import TopNekoIcon from './svgCompo/top-neko-icon';
import PageDownArrow from './parts/pageDownArrow';

export default function Top() {
  return (
    <main className="text-[#4E4935] bg-[#F9F8F4] h-[calc(100vh-98px)] sm:h-[calc(100vh-114px)]">
      <motion.div
        className="h-full flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <TopNekoIcon className="m-auto w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] xl:w-[300px] xl:h-[300px]" />
        <PageDownArrow explanation={'Kodamaについて'} />
      </motion.div>
    </main>
  );
}
