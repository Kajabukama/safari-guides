"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ShoppingCartIcon,
  TrashIcon,
  ArrowLeftIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  TruckIcon,
  MinusIcon,
  PlusIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { cartItems } from "@/mock/card";

const Cart = () => {
  const router = useRouter();
  const [items, setItems] = useState(cartItems);

  // Update quantity
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  // Remove item from cart
  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  // Calculate subtotal
  const subtotal = items.reduce((total, item) => total + Number(item.price) * item.quantity, 0);
  // Shipping cost
  const shipping = subtotal > 100 ? 0 : 15;
  // Calculate total
  const total = subtotal + shipping;
  // Animation variants
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
  // Handle checkout
  const handleCheckout = () => {
    router.push("/gift-shop/checkout");
  };
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          <span className="ml-3 text-sm font-medium px-2 py-1 rounded-full">
            {items.length} {items.length === 1 ? "Item" : "Items"}
          </span>
        </div>
        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <motion.div
              className="lg:col-span-2"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row border-b py-6 last:border-b-0 last:pb-0 first:pt-0"
                    >
                      <div className="sm:w-24 sm:h-24 mb-4 sm:mb-0 sm:mr-6">
                        <Image
                          width={900}
                          height={900}
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                          <Link
                            href={`/product/${item.id}`}
                            className="font-medium hover:text-emerald-600 transition-colors"
                          >
                            {item.name}
                          </Link>
                          <span className="font-semibold text-emerald-700 mt-1 sm:mt-0">
                            ${Number(item.price).toFixed(2)}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">Seller: {item.seller?.name}</p>
                        {item.color && (
                          <p className="text-sm text-gray-500 mb-4">Color: {item.color}</p>
                        )}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <button
                              className="w-8 h-8 rounded-l-md border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <MinusIcon size={14} />
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) =>
                                updateQuantity(item.id, parseInt(e.target.value) || 1)
                              }
                              className="w-12 h-8 border-t border-b border-gray-300 text-center text-sm [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                            />
                            <button
                              className="w-8 h-8 rounded-r-md border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <PlusIcon size={14} />
                            </button>
                          </div>
                          <Button
                            variant="destructive"
                            size="icon"
                            className=""
                            onClick={() => removeItem(item.id)}
                          >
                            <TrashIcon size={18} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <div className="mt-6">
                <Link
                  href="/gift-shop"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  <ArrowLeftIcon size={16} className="mr-2" />
                  Continue Shopping
                </Link>
              </div>
            </motion.div>
            {/* Order Summary */}
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="">Shipping</span>
                      <span className="font-medium">
                        {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="border-t pt-4 flex justify-between">
                      <span className="font-semibold">Total</span>
                      <span className="font-bold text-emerald-700">${total.toFixed(2)}</span>
                    </div>
                  </div>
                  <Button className="w-full mb-4" size="lg" onClick={handleCheckout}>
                    <CreditCardIcon size={18} className="mr-2" />
                    Proceed to Checkout
                  </Button>
                  <div className="space-y-3 mt-6">
                    <div className="flex items-center text-sm">
                      <ShieldCheckIcon size={16} className="text-emerald-600 mr-2" />
                      <span>Secure payment</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <TruckIcon size={16} className="text-emerald-600 mr-2" />
                      <span>International shipping available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        ) : (
          <motion.div
            className="text-center py-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <ShoppingCartIcon size={64} className="mx-auto text-gray-300 mb-6" />
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Looks like you haven&apos;t added any items to your cart yet. Explore our shop to
              discover authentic Tanzanian treasures.
            </p>
            <Link href="/gift-shop">
              <Button size="lg">Start Shopping</Button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};
export default Cart;
