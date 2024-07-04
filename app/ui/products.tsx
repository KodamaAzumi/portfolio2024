'use client';
import ProductCard from './parts/productCard';
import PageDownArrow from './parts/pageDownArrow';
import { products } from '../lib/products';
import ProductPopUps from './parts/productPopUps';
import { useState } from 'react';

let productsRev = products.reverse();

export default function Products() {
  const [currentProductStatus, setCurrentProductStatus] = useState({ id: '', status: '' });

  return (
    <section id="products" className="bg-white min-h-screen pt-24">
      <div className="container text-[#4E4935] flex flex-col items-center max-w-full">
        <h2 className="text-3xl xs:text-4xl font-bold">PRODUCTS</h2>
        <div className="w-5/6 xs:w-3/4 sm:w-3/5 md:w-3/4 xl:w-3/5 py-16">
          <div className=" grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
    </section>
  );
}
