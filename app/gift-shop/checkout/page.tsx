"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CreditCardIcon,
  ShieldCheckIcon,
  TruckIcon,
  ChevronLeftIcon,
  LockIcon,
  CreditCard as CreditCardIconOutline,
  Smartphone,
  Landmark,
  Wallet,
  ArrowRightIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from "next/navigation";
import { cartItems } from "@/mock/shop";
import Image from "next/image";

const Checkout = () => {
  const navigate = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    mobileNumber: "",
    saveInfo: true,
  });

  console.log(paymentMethod);

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + Number(item.price) * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + shipping;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      saveInfo: checked,
    });
  };
  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, this would process the payment and create the order
    navigate.push("/gift-shop/order-confirmation");
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
        <div className="mb-8">
          <Link href="/gift-shop/cart" className="flex items-center">
            <ChevronLeftIcon size={20} className="mr-2" />
            <span>Back to Cart</span>
          </Link>
        </div>
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <form onSubmit={handleSubmit}>
              {/* Shipping Information */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-6 flex items-center">
                    <TruckIcon size={20} className="mr-2 text-emerald-600" />
                    Shipping Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <Input
                        id="address"
                        name="address"
                        placeholder="Street Address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        id="city"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Select
                        value={formData.country}
                        onValueChange={(value) => handleSelectChange("country", value)}
                        required
                      >
                        <SelectTrigger id="country">
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="US">United States</SelectItem>
                          <SelectItem value="CA">Canada</SelectItem>
                          <SelectItem value="GB">United Kingdom</SelectItem>
                          <SelectItem value="AU">Australia</SelectItem>
                          <SelectItem value="DE">Germany</SelectItem>
                          <SelectItem value="FR">France</SelectItem>
                          <SelectItem value="TZ">Tanzania</SelectItem>
                          <SelectItem value="KE">Kenya</SelectItem>
                          <SelectItem value="UG">Uganda</SelectItem>
                          <SelectItem value="ZA">South Africa</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Input
                        id="postalCode"
                        name="postalCode"
                        placeholder="Postal Code"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex items-center space-x-2">
                    <Checkbox
                      id="saveInfo"
                      checked={formData.saveInfo}
                      onCheckedChange={handleCheckboxChange}
                    />
                    <Label htmlFor="saveInfo" className="text-sm text-gray-600">
                      Save this information for next time
                    </Label>
                  </div>
                </CardContent>
              </Card>
              {/* Payment Method */}
              <Card className="mb-8">
                <CardContent className="">
                  <h2 className="text-xl font-semibold mb-6 flex items-center">
                    <CreditCardIcon size={20} className="mr-2 text-emerald-600" />
                    Payment Method
                  </h2>
                  <Tabs
                    defaultValue="credit-card"
                    onValueChange={setPaymentMethod}
                    className="w-full"
                  >
                    <TabsList className="grid grid-cols-4 mb-6">
                      <TabsTrigger value="credit-card" className="flex flex-col items-center py-3">
                        <CreditCardIconOutline size={20} className="mb-1" />
                        <span className="">Credit Card</span>
                      </TabsTrigger>
                      <TabsTrigger value="mobile-money" className="flex flex-col items-center py-3">
                        <Smartphone size={20} className="mb-1" />
                        <span className="">Mobile Money</span>
                      </TabsTrigger>
                      <TabsTrigger
                        value="bank-transfer"
                        className="flex flex-col items-center py-3"
                      >
                        <Landmark size={20} className="mb-1" />
                        <span className="">Bank Transfer</span>
                      </TabsTrigger>
                      <TabsTrigger value="paypal" className="flex flex-col items-center py-3">
                        <Wallet size={20} className="mb-1" />
                        <span className="">PayPal</span>
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="credit-card">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Input
                            id="cardNumber"
                            name="cardNumber"
                            type="number"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                        <div className="space-y-2">
                          <Input
                            id="cardName"
                            name="cardName"
                            type="text"
                            value={formData.cardName}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Input
                              id="expiryDate"
                              name="expiryDate"
                              type="number"
                              placeholder="MM/YY"
                              value={formData.expiryDate}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <Input
                              id="cvv"
                              name="cvv"
                              type="number"
                              value={formData.cvv}
                              onChange={handleInputChange}
                              placeholder="123"
                            />
                          </div>
                        </div>
                        <div className="flex items-center text-base mt-4">
                          <LockIcon size={16} className="text-emerald-600 mr-2" />
                          <span>Your payment information is secure and encrypted</span>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="mobile-money">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="mobileNumber">Mobile Number *</Label>
                          <Input
                            type="tel"
                            id="mobileNumber"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleInputChange}
                            placeholder="+255 123 456 789"
                          />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-2">
                            We support the following mobile money providers:
                          </p>
                          <RadioGroup defaultValue="mpesa" className="flex space-x-4">
                            <div className="flex items-center space-x-2 border border-gray-300 rounded-md p-3 bg-white">
                              <RadioGroupItem value="mpesa" id="mpesa" />
                              <Label htmlFor="mpesa" className="font-semibold text-blue-600">
                                M-Pesa
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2 border border-gray-300 rounded-md p-3 bg-white">
                              <RadioGroupItem value="airtel" id="airtel" />
                              <Label htmlFor="airtel" className="font-semibold text-orange-600">
                                Airtel Money
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2 border border-gray-300 rounded-md p-3 bg-white">
                              <RadioGroupItem value="tigo" id="tigo" />
                              <Label htmlFor="tigo" className="font-semibold text-yellow-600">
                                Tigo Pesa
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-md mt-4">
                          <p className="text-sm text-gray-600">
                            After placing your order, you will receive an SMS with payment
                            instructions. Your order will be processed once the payment is
                            confirmed.
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="bank-transfer">
                      <div className="space-y-4">
                        <div className="bg-accent p-4 rounded-md">
                          <h3 className="font-medium mb-2">Bank Transfer Instructions</h3>
                          <p className="text-sm mb-4 text-muted-foreground">
                            Please transfer the total amount to the following bank account. Your
                            order will be processed once the payment is confirmed.
                          </p>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Bank Name:</span>
                              <span className="font-medium">Tanzania Commercial Bank</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Account Name:</span>
                              <span className="font-medium">Tanzania Guides Ltd</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Account Number:</span>
                              <span className="font-medium">123456789</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Swift Code:</span>
                              <span className="font-medium">TZCCBTZ</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Reference:</span>
                              <span className="font-medium">
                                Order #TG{Math.floor(Math.random() * 10000)}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600">
                          <p>
                            After placing your order, please email a copy of your transfer receipt
                            to
                            <a
                              href="mailto:payments@tanzaniaguides.com"
                              className="text-emerald-600 ml-1"
                            >
                              payments@tanzaniaguides.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="paypal">
                      <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-md">
                          <p className="text-sm text-gray-600">
                            You will be redirected to PayPal to complete your payment securely.
                            Click the &quot;Place Order&quot; button to proceed.
                          </p>
                        </div>
                        <div className="flex justify-center">
                          <Image
                            width={1200}
                            height={1200}
                            src="/1200px-PayPal.svg.png"
                            alt="PayPal"
                            className="h-12"
                          />
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
              <div className="flex justify-end">
                <Button type="submit" size="lg" className="px-8">
                  Place Order
                  <ArrowRightIcon size={16} className="ml-2" />
                </Button>
              </div>
            </form>
          </motion.div>
          {/* Order Summary */}
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-start">
                      <Image
                        width={1900}
                        height={1900}
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md mr-4"
                      />
                      <div className="flex-grow">
                        <h3 className="text-sm font-medium">{item.name}</h3>
                        <div className="flex justify-between text-sm mt-1">
                          <span>Qty: {item.quantity}</span>
                          <span>${(Number(item.price) * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="font-bold">Subtotal</span>
                    <span className="font-bold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Shipping</span>
                    <span className="font-bold">
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="border-t pt-3 flex justify-between">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-emerald-700">${total.toFixed(2)}</span>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center text-sm">
                    <ShieldCheckIcon size={16} className="text-emerald-600 mr-2" />
                    <span>Secure checkout</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <TruckIcon size={16} className="text-emerald-600 mr-2" />
                    <span>Free shipping on orders over $100</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t">
                  <h3 className="font-medium mb-2">Have a coupon?</h3>
                  <div className="flex">
                    <Input type="text" placeholder="Enter coupon code" className="rounded-r-none" />
                    <Button variant="outline" className="rounded-l-none">
                      Apply
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
