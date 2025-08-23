"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { StarIcon, HeartIcon, ShoppingCartIcon } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/interfaces/product";
import Image from "next/image";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <motion.div
      whileHover={{
        y: 0,
      }}
      transition={{
        duration: 0.2,
      }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col p-0 pb-5 border-none">
        <div className="relative">
          <Link href={`/gift-shop/${product.id}`}>
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              priority
              className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300 rounded-b-4xl"
            />
          </Link>
          <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
            <HeartIcon size={18} className="text-gray-600" />
          </button>
          {/* {product.category && (
            <div className="absolute top-3 left-3 bg-white/50 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full">
              {product.category}
            </div>
          )} */}
          {product.originalPrice && (
            <div className="absolute bottom-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              Sale
            </div>
          )}
        </div>
        <CardContent className="flex-grow px-4">
          <Link href={`/gift-shop/${product.id}`}>
            <h3 className="font-medium line-clamp-2 mb-1">{product.name}</h3>
          </Link>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex mr-1">
                <StarIcon size={14} className="text-yellow-400 fill-current" />
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-primary">{product.price}</span>
              {product.originalPrice && (
                <span className="text-base line-through ml-2">{product.originalPrice}</span>
              )}
            </div>
          </div>
          {/* <Link
            href={`/seller/${product.seller.id}`}
            className="flex items-center text-gray-500 text-xs mb-3 hover:text-emerald-600"
          >
            <img
              src={product.seller.image}
              alt={product.seller.name}
              className="w-5 h-5 rounded-full mr-1 object-cover"
            />
            <span>
              {product.seller.name}
              {product.seller.isGuide && " • Guide"}
            </span>
          </Link> */}
        </CardContent>
        <CardFooter className="pt-0">
          <Button
            className="w-full"
            size="md"
            disabled={!product.inStock}
            variant={product.inStock ? "default" : "outline"}
          >
            <ShoppingCartIcon size={16} className="mr-2" />
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
export default ProductCard;
