"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircleIcon,
  TruckIcon,
  CalendarIcon,
  CreditCardIcon,
  MailIcon,
  HomeIcon,
  ShoppingBagIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function OrderConfirmation() {
  const orderDetails = {
    orderNumber: "TG" + Math.floor(10000 + Math.random() * 90000),
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    total: 230.0,
    paymentMethod: "Credit Card",
    shippingAddress: {
      name: "John Smith",
      address: "123 Main Street",
      city: "New York",
      state: "NY",
      postalCode: "10001",
      country: "United States",
    },
    estimatedDelivery: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    items: [
      {
        id: 1,
        name: "Handcrafted Maasai Beaded Necklace",
        price: 45,
        image: "/images/image.jpeg",
        quantity: 1,
      },
      {
        id: 2,
        name: "Carved Wooden Safari Animals Set",
        price: 65,
        image: "/images/image.jpeg",
        quantity: 2,
      },
      {
        id: 8,
        name: "Traditional Maasai Shuka Cloth",
        price: 55,
        image: "/images/image.jpeg",
        quantity: 1,
      },
    ],
  };
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
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
              <CheckCircleIcon size={40} className="text-emerald-600" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
            <p className="text-gray-600 max-w-lg mx-auto">
              Your order has been received and is being processed. You will receive an email
              confirmation shortly.
            </p>
          </div>
          {/* Order Information */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Order Information</h2>
                <span className="text-sm text-gray-500">Order #{orderDetails.orderNumber}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Order Date</h3>
                    <p className="flex items-center">
                      <CalendarIcon size={16} className="text-emerald-600 mr-2" />
                      {orderDetails.date}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Payment Method</h3>
                    <p className="flex items-center">
                      <CreditCardIcon size={16} className="text-emerald-600 mr-2" />
                      {orderDetails.paymentMethod}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Email</h3>
                    <p className="flex items-center">
                      <MailIcon size={16} className="text-emerald-600 mr-2" />
                      john.smith@example.com
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Shipping Address</h3>
                    <p className="flex items-start">
                      <HomeIcon size={16} className="text-emerald-600 mr-2 mt-1" />
                      <span>
                        {orderDetails.shippingAddress.name}
                        <br />
                        {orderDetails.shippingAddress.address}
                        <br />
                        {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state}{" "}
                        {orderDetails.shippingAddress.postalCode}
                        <br />
                        {orderDetails.shippingAddress.country}
                      </span>
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Estimated Delivery</h3>
                    <p className="flex items-center">
                      <TruckIcon size={16} className="text-emerald-600 mr-2" />
                      {orderDetails.estimatedDelivery}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Order Summary */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                {orderDetails.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start pb-4 border-b border-gray-100 last:border-b-0 last:pb-0"
                  >
                    <Image
                      width={1900}
                      height={1900}
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md mr-4"
                    />
                    <div className="flex-grow">
                      <h3 className="font-medium">{item.name}</h3>
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>Qty: {item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 pt-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${(orderDetails.total - 15).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">$15.00</span>
                </div>
                <div className="border-t border-gray-100 pt-3 flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold text-emerald-700">
                    ${orderDetails.total.toFixed(2)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* What's Next */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-6">What&apos;s Next?</h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MailIcon size={16} className="text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Order Confirmation Email</h3>
                    <p className="text-gray-600 text-sm">
                      You will receive an email confirmation with your order details and tracking
                      information once your order ships.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <TruckIcon size={16} className="text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Order Processing</h3>
                    <p className="text-gray-600 text-sm">
                      Your order will be processed and shipped within 2-3 business days.
                      International shipping may take 10-15 business days.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <ShoppingBagIcon size={16} className="text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Track Your Order</h3>
                    <p className="text-gray-600 text-sm">
                      You can track your order status at any time by visiting your account or using
                      the tracking link in your confirmation email.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/gift-shop">
              <Button variant="outline" size="lg">
                Continue Shopping
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg">Return to Home</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
