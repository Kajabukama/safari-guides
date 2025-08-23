"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FilterIcon, XIcon, TagIcon, ShoppingBagIcon, CheckIcon, StarIcon } from "lucide-react";
import ProductCard from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { fadeIn, staggerContainer } from "@/components/shop/animations";
import EmptyPage from "@/components/shop/EmptyPage";
import FeaturedSection from "@/components/shop/FeaturedSection";
import FilterOptionsCard from "@/components/shop/FilterOptionsCard";
import { products } from "@/mock/shop";
import { Product } from "@/interfaces/product";
import HeroSection from "@/components/shop/HeroSection";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  // Get unique categories for the filter
  const categories = [...new Set(products.map((product: Product) => product.category))];
  // Filter products based on search and filters
  const filteredProducts = products.filter((product: Product) => {
    const matchesSearch =
      searchTerm === "" ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "" || product.category === selectedCategory;
    const matchesPrice =
      parseInt(product.price.replace("$", "")) >= priceRange[0] &&
      parseInt(product.price.replace("$", "")) <= priceRange[1];
    const matchesRating = selectedRating === 0 || product.rating >= selectedRating;
    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a: Product, b: Product) => {
    switch (sortBy) {
      case "price-low":
        return parseInt(a.price.replace("$", "")) - parseInt(b.price.replace("$", ""));
      case "price-high":
        return parseInt(b.price.replace("$", "")) - parseInt(a.price.replace("$", ""));
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return parseInt(b.id) - parseInt(a.id);
      default:
        return 0;
      // featured
    }
  });
  // Animation variants

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {/* Featured Collections */}
      <FeaturedSection />
      {/* Main Shop Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="lg:w-1/5 hidden lg:block">
              <FilterOptionsCard
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                priceRange={[0, 500]}
                setPriceRange={setPriceRange}
                selectedRating={selectedRating}
                setSelectedRating={setSelectedRating}
              />
            </div>
            {/* Product Listing */}
            <div className="lg:w-3/4">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-semibold">{filteredProducts.length} products</h2>
                  <p className="text-base">Authentic Tanzanian souvenirs and crafts</p>
                </div>
                <div className="flex items-center mt-4 md:mt-0">
                  <button
                    className="lg:hidden mr-4 flex items-center"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <FilterIcon size={18} className="mr-2" />
                    Filters
                  </button>
                  <div className="flex items-center">
                    <span className="mr-2 text-sm hidden md:inline">Sort by:</span>
                    <select
                      className="border rounded-md p-2 text-sm"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="featured">Featured</option>
                      <option value="newest">Newest</option>
                      <option value="rating">Highest Rated</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* Mobile Filters */}
              {showFilters && (
                <div className="lg:hidden bg-card p-4 rounded-lg shadow-md mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">Filters</h3>
                    <button onClick={() => setShowFilters(false)}>
                      <XIcon size={20} />
                    </button>
                  </div>
                  <Tabs defaultValue="category">
                    <TabsList className="grid grid-cols-3 mb-4">
                      <TabsTrigger value="category">Category</TabsTrigger>
                      <TabsTrigger value="price">Price</TabsTrigger>
                      <TabsTrigger value="rating">Rating</TabsTrigger>
                    </TabsList>
                    <TabsContent value="category" className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="m-cat-all"
                          name="m-category"
                          checked={selectedCategory === ""}
                          onChange={() => setSelectedCategory("")}
                          className="w-4 h-4"
                        />
                        <label htmlFor="m-cat-all" className="ml-2">
                          All Categories
                        </label>
                      </div>
                      {categories.map((category, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            type="radio"
                            id={`m-cat-${index}`}
                            name="m-category"
                            checked={selectedCategory === category}
                            onChange={() => setSelectedCategory(category)}
                            className="w-4 h-4"
                          />
                          <label htmlFor={`m-cat-${index}`} className="ml-2">
                            {category}
                          </label>
                        </div>
                      ))}
                    </TabsContent>
                    <TabsContent value="price">
                      <div className="px-2">
                        <input
                          type="range"
                          min="0"
                          max="500"
                          step="10"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                          className="w-full accent-emerald-600"
                        />
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 mt-2">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </TabsContent>
                    <TabsContent value="rating" className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="m-rating-all"
                          name="m-rating"
                          checked={selectedRating === 0}
                          onChange={() => setSelectedRating(0)}
                          className="w-4 h-4"
                        />
                        <label htmlFor="m-rating-all" className="ml-2">
                          All Ratings
                        </label>
                      </div>
                      {[4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center">
                          <input
                            type="radio"
                            id={`m-rating-${rating}`}
                            name="m-rating"
                            checked={selectedRating === rating}
                            onChange={() => setSelectedRating(rating)}
                            className="w-4 h-4"
                          />
                          <label htmlFor={`m-rating-${rating}`} className="ml-2 flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon
                                key={i}
                                size={16}
                                className={
                                  i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                }
                              />
                            ))}
                            <span className="ml-1">& Up</span>
                          </label>
                        </div>
                      ))}
                    </TabsContent>
                  </Tabs>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Button className="w-full" onClick={() => setShowFilters(false)}>
                      Apply Filters
                    </Button>
                  </div>
                </div>
              )}
              {/* Product Grid */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {sortedProducts.map((product) => (
                  <motion.div key={product.id} variants={fadeIn}>
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
              {/* Empty State */}
              {sortedProducts.length === 0 && (
                <EmptyPage
                  sortedProducts={sortedProducts}
                  setSearchTerm={setSearchTerm}
                  setSelectedCategory={setSelectedCategory}
                  setPriceRange={setPriceRange}
                  setSelectedRating={setSelectedRating}
                />
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Seller Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-4">Shop from Local Artisans & Guides</h2>
            <p className="max-w-2xl mx-auto">
              Our marketplace connects you directly with skilled Tanzanian artisans and
              knowledgeable guides, ensuring authentic products and fair compensation for creators.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TagIcon size={24} className="text-emerald-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Authentic Crafts</h3>
                <p className="">
                  Every item in our marketplace is handcrafted by local artisans using traditional
                  techniques and materials.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckIcon size={24} className="text-emerald-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Verified Sellers</h3>
                <p className="text-gray-600">
                  We personally verify all our sellers to ensure quality products and ethical
                  business practices.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBagIcon size={24} className="text-emerald-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Worldwide Shipping</h3>
                <p className="text-gray-600">
                  We offer secure worldwide shipping, bringing authentic Tanzanian treasures
                  directly to your doorstep.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-emerald-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Bring Africa Home</h2>
          <p className="text-emerald-100 max-w-2xl mx-auto mb-8">
            Take home a piece of Africa&apos;s rich cultural heritage with authentic, handcrafted
            souvenirs that support local communities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100">
              Shop Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-emerald-800"
            >
              Become a Seller
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Shop;
