"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cartItems } from "@/mock/card";
import { motion } from "framer-motion";
import {
  ArrowLeftIcon,
  CreditCardIcon,
  MinusIcon,
  PlusIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  TrashIcon,
  TruckIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
        <div className="flex items-center gap-3 mb-8">
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          <Badge variant="secondary">
            {items.length} {items.length === 1 ? "Item" : "Items"}
          </Badge>
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
                <CardContent>
                  {items.map((item, index) => (
                    <div key={item.id}>
                      {index > 0 && <Separator />}
                      <div className="flex flex-col sm:flex-row gap-4 py-6">
                        <div className="w-24 h-24 shrink-0">
                          <Image
                            width={96}
                            height={96}
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex justify-between items-start">
                            <Link
                              href={`/product/${item.id}`}
                              className="font-medium hover:underline"
                            >
                              {item.name}
                            </Link>
                            <span className="font-semibold">${Number(item.price).toFixed(2)}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Seller: {item.seller?.name}
                          </p>
                          {item.color && (
                            <p className="text-sm text-muted-foreground">Color: {item.color}</p>
                          )}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 rounded-r-none"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <MinusIcon className="h-4 w-4" />
                              </Button>
                              <Input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) =>
                                  updateQuantity(item.id, parseInt(e.target.value) || 1)
                                }
                                className="h-8 w-12 rounded-none border-x-0 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                              />
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 rounded-l-none"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <PlusIcon className="h-4 w-4" />
                              </Button>
                            </div>
                            <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                              <TrashIcon className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Button variant="outline" className="mt-6" asChild>
                <Link href="/gift-shop">
                  <ArrowLeftIcon className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Link>
              </Button>
            </motion.div>
            {/* Order Summary */}
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium">
                        {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="font-semibold">Total</span>
                      <span className="font-bold">${total.toFixed(2)}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6" size="lg" onClick={handleCheckout}>
                    <CreditCardIcon className="mr-2 h-4 w-4" />
                    Proceed to Checkout
                  </Button>
                  <Separator className="my-6" />
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ShieldCheckIcon className="h-4 w-4" />
                      <span>Secure payment</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <TruckIcon className="h-4 w-4" />
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
            <ShoppingCartIcon className="mx-auto h-16 w-16 text-muted-foreground mb-6" />
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Looks like you haven&apos;t added any items to your cart yet. Explore our shop to
              discover authentic Tanzanian treasures.
            </p>
            <Button size="lg" asChild>
              <Link href="/gift-shop">Start Shopping</Link>
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};
export default Cart;
