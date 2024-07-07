'use client';
import Top from './ui/top';
import About from './ui/about';
import Products from './ui/products';
// import Blog from './ui/blog';
import { AnimatePresence } from 'framer-motion';

export default function Home() {
  return (
    <div>
      <AnimatePresence mode="wait">
        <Top key="top" />
        <About key="about" />
        <Products key="products" />
      </AnimatePresence>
      {/* <Blog /> */}
    </div>
  );
}
