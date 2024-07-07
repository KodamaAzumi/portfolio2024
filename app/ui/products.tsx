'use client';
import ProductCard from './parts/productCard';
//import PageDownArrow from './parts/pageDownArrow';
import { products } from '../lib/products';
import ProductPopUps from './parts/productPopUps';
import { useState } from 'react';
import { motion } from 'framer-motion';

let productsRev = products.reverse();

export default function Products() {
  const [currentProductStatus, setCurrentProductStatus] = useState({ id: '', status: '' });

  return (
    <motion.section
      id="products"
      className="bg-white text-[#4E4935] py-24"
      initial={{
        opacity: 0,
        y: 20,
      }}
      transition={{
        duration: 0.8,
        delay: 0.2,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      key="product-animation"
    >
      <div className="flex flex-col items-center gap-y-16">
        <h2 className="text-3xl xs:text-4xl font-bold">PRODUCTS</h2>
        <div className="w-5/6 xs:w-3/4 sm:w-3/5 md:w-3/4 xl:w-3/5 max-w-[1020px]">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {productsRev.map((product) => {
              const { id, title, time, skills, medium, images } = product;
              return (
                <ProductCard
                  key={id + '_ProductCardKey'}
                  src={images[0].src}
                  alt={images[0].alt}
                  title={title}
                  time={time}
                  skills={skills}
                  medium={medium}
                  handleClickCard={() => setCurrentProductStatus({ id: id, status: 'visible' })}
                />
              );
            })}
          </div>
        </div>
        {/* <PageDownArrow explanation={'Blog'} /> */}
      </div>
      <ProductPopUps
        currentProductStatus={currentProductStatus}
        setCurrentProductStatus={setCurrentProductStatus}
      />
    </motion.section>
  );
}
