"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  StarIcon,
  ShoppingCartIcon,
  HeartIcon,
  ShareIcon,
  TruckIcon,
  ShieldCheckIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  MinusIcon,
  PlusIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProductCard from "@/components/shop/ProductCard";
import { product, relatedProducts } from "@/mock/shop";
import { Product } from "@/interfaces/product";
import Image from "next/image";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const fadeIn = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };
  // Handle quantity changes
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  // Handle image navigation
  const nextImage = () => {
    setActiveImageIndex((activeImageIndex + 1) % product.images!.length);
  };
  const prevImage = () => {
    setActiveImageIndex((activeImageIndex - 1 + product.images!.length) % product.images!.length);
  };
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Product Details */}
        <motion.div
          className="rounded-xl shadow-sm overflow-hidden mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Images */}
            <div>
              <div className="relative mb-4 rounded-lg overflow-hidden aspect-square">
                <Image
                  src={product.images![activeImageIndex]}
                  alt={product.name}
                  width={1500}
                  height={1500}
                  priority
                  className="w-full h-full object-contain"
                />
                {/* Image Navigation Arrows */}
                <button
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                  onClick={prevImage}
                >
                  <ArrowLeftIcon size={20} />
                </button>
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                  onClick={nextImage}
                >
                  <ArrowRightIcon size={20} />
                </button>
              </div>
              {/* Thumbnail Images */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images!.map((image, index) => (
                  <button
                    key={index}
                    className={`w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 ${
                      activeImageIndex === index ? "border-emerald-500" : "border-transparent"
                    }`}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} - view ${index + 1}`}
                      width={1500}
                      height={1500}
                      priority
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            {/* Product Info */}
            <div>
              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon
                        key={star}
                        size={18}
                        className={`${
                          star <= Math.round(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="mx-1">|</span>
                  <span className="text-sm">{product.reviewCount} reviews</span>
                </div>
                <div className="flex items-center mb-6">
                  <span className="text-2xl font-bold mr-3">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg line-through">{product.originalPrice}</span>
                  )}
                  {product.shipping?.free && (
                    <span className="ml-auto text-sm font-medium flex items-center">
                      <TruckIcon size={16} className="mr-1" />
                      Free Shipping
                    </span>
                  )}
                </div>
                <p className="mb-6 text-muted-foreground">{product.description}</p>
                {/* Color Selection */}
                {product.colors && product.colors.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-medium mb-2">Color</h3>
                    <div className="flex gap-2">
                      {product.colors!.map((color, index) => (
                        <Button
                          size="md"
                          key={index}
                          className={`px-3 py-1 text-sm ${
                            index === 0
                              ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                              : "border-gray-300 text-gray-700 hover:border-gray-400"
                          }`}
                        >
                          {color}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
                {/* Quantity Selection */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Quantity</h3>
                  <div className="flex items-center">
                    <button
                      className="w-10 h-10 rounded-l-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                      onClick={decreaseQuantity}
                      disabled={quantity <= 1}
                    >
                      <MinusIcon size={16} />
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                      className="w-16 h-10 border-t border-b border-gray-300 text-center [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <button
                      className="w-10 h-10 rounded-r-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                      onClick={increaseQuantity}
                    >
                      <PlusIcon size={16} />
                    </button>
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <Button className="flex-1" size="lg" disabled={!product.inStock}>
                    <ShoppingCartIcon size={18} className="mr-2" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                  <Button variant="outline" size="lg">
                    <HeartIcon size={18} className="mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" size="icon" className="hidden sm:flex">
                    <ShareIcon size={18} />
                  </Button>
                </div>
                {/* Seller Info */}
                <div className="border-t pt-6">
                  <div className="flex items-start">
                    <Image
                      src={product.seller.avatar!}
                      alt={product.seller.name!}
                      width={1500}
                      height={1500}
                      priority
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-medium">Sold by {product.seller?.name}</h3>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span className="mr-2">{product.seller?.location}</span>
                        {product.seller?.isGuide && (
                          <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 rounded-full">
                            Guide
                          </span>
                        )}
                      </div>
                      <div className="flex items-center text-sm">
                        <div className="flex mr-1">
                          <StarIcon size={14} className="text-yellow-400 fill-current" />
                        </div>
                        <span className="font-medium">{product.seller?.rating}</span>
                        <span className="mx-1">•</span>
                        <span>{product.seller?.reviewCount} reviews</span>
                        <span className="mx-1">•</span>
                        <span>Joined {product.seller?.joinedDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Product Tabs */}
          <div className="">
            <Tabs defaultValue="description" className="p-6">
              <TabsList className="grid grid-cols-3 w-full max-w-md mb-6">
                <TabsTrigger value="description">Details</TabsTrigger>
                <TabsTrigger value="story">Story</TabsTrigger>
                <TabsTrigger value="reviews">Reviews ({product.reviews?.length})</TabsTrigger>
              </TabsList>
              <TabsContent value="description">
                <h3 className="text-lg font-semibold mb-4">Product Details</h3>
                <ul className="space-y-2 mb-6">
                  {product.details?.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center">
                    <TruckIcon size={24} className="text-emerald-600 mr-3" />
                    <div>
                      <h4 className="font-medium">Shipping Information</h4>
                      <p className="text-sm text-gray-600">
                        {product.shipping?.free ? "Free shipping" : "Standard shipping rates apply"}{" "}
                        • Estimated delivery: {product.shipping?.estimated}
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center">
                    <ShieldCheckIcon size={24} className="text-emerald-600 mr-3" />
                    <div>
                      <h4 className="font-medium">Buyer Protection</h4>
                      <p className="text-sm text-gray-600">
                        Money-back guarantee • Authentic handcrafted products
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="story">
                <h3 className="text-lg font-semibold mb-4">The Story Behind This Product</h3>
                <p className="mb-6 leading-relaxed">{product.story}</p>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <Image
                    width={500}
                    height={500}
                    priority
                    src={product.images![0]}
                    alt="Maasai artisans at work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </TabsContent>
              <TabsContent value="reviews">
                <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
                <div className="flex items-center mb-6">
                  <div className="flex mr-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon
                        key={star}
                        size={24}
                        className={`${
                          star <= Math.round(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xl font-semibold">{product.rating}</span>
                  <span className="ml-2">Based on {product.reviewCount} reviews</span>
                </div>
                <div className="space-y-6">
                  {product.reviews?.map((review) => (
                    <div key={review.id} className="border-b pb-6 last:border-b-0 last:pb-0">
                      <div className="flex items-start">
                        <Image
                          width={1600}
                          height={1600}
                          src={review.image}
                          alt={review.name}
                          className="w-10 h-10 rounded-full object-cover mr-4"
                        />
                        <div className="flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <div>
                              <h4 className="font-medium">{review.name}</h4>
                              <div className="flex items-center text-sm">
                                <span>{review.country}</span>
                                <span className="mx-1">•</span>
                                <span>{review.date}</span>
                              </div>
                            </div>
                            <div className="flex mt-1 sm:mt-0">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <StarIcon
                                  key={star}
                                  size={16}
                                  className={`${
                                    star <= review.rating
                                      ? "text-yellow-400 fill-current"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="mt-2 text-muted-foreground">{review.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Button variant="outline">View All {product.reviewCount} Reviews</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
        {/* Related Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {relatedProducts?.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
