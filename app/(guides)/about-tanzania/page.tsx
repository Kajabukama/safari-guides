import React from "react";
import { attractions, facts } from "@/mock/about";
import { CheckIcon } from "lucide-react";
import { Attraction, Fact } from "@/interfaces/about";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)), url('/images/img20.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Tanzania</h1>
          <p className="text-xl text-white mb-6 max-w-2xl">
            Discover the breathtaking landscapes, rich culture, and incredible wildlife of Tanzania
          </p>
        </div>
      </div>
      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Welcome to Tanzania</h2>
            <p className="mb-6 text-lg">
              Tanzania is a land of incredible natural beauty, rich cultural heritage, and some of
              the world&apos;s most spectacular wildlife. From the snow-capped peak of Mount
              Kilimanjaro to the endless plains of the Serengeti, and from the pristine beaches of
              Zanzibar to the depths of the Ngorongoro Crater, Africa offers experiences that will
              stay with you for a lifetime.
            </p>
            <p className="text-lg">
              Our local guides are passionate about sharing their homeland with visitors, providing
              authentic experiences that go beyond typical tourism. Whether you&apos;re seeking
              adventure, relaxation, cultural immersion, or wildlife encounters, our guides will
              help you discover the real Tanzania.
            </p>
          </div>
        </div>
      </section>
      {/* Top Attractions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Top Attractions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
            Tanzania offers an incredible variety of experiences for every type of traveler
          </p>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {attractions.map((attraction: Attraction, index: number) => (
              <Link href={`/attractions/${attraction?.name}`} key={index}>
                <div className="flex flex-col justify-end group relative">
                  <div className="relative  overflow-hidden rounded-xl aspect-[4/4] w-full">
                    <Image
                      src={attraction?.image}
                      alt={attraction?.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-2">
                    <h3 className="text-base font-medium mb-1">{attraction?.name}</h3>
                    <p className="text-sm">{attraction?.circuit}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Tanzania Facts */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Africa Facts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
            Essential information to help you plan your African adventure
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facts.map((fact: Fact, index: number) => (
              <div key={index} className="rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  {fact.icon}
                  <h3 className="text-xl font-semibold ml-3">{fact.title}</h3>
                </div>
                <p className="">{fact.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Travel Tips</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckIcon size={20} className="text-emerald-600 mt-1 mr-2 flex-shrink-0" />
                <span>
                  Visa requirements: Most visitors need a visa, which can be obtained on arrival or
                  online in advance.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon size={20} className="text-emerald-600 mt-1 mr-2 flex-shrink-0" />
                <span>
                  Health: Yellow fever vaccination is required, and malaria prophylaxis is
                  recommended.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon size={20} className="text-emerald-600 mt-1 mr-2 flex-shrink-0" />
                <span>
                  Currency: The Tanzanian Shilling (TZS) is the local currency, but USD is widely
                  accepted in tourist areas.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon size={20} className="text-emerald-600 mt-1 mr-2 flex-shrink-0" />
                <span>
                  Language: Swahili is the national language, but English is widely spoken in
                  tourist areas.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Africa?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our local guides are ready to help you create unforgettable memories in this beautiful
            country.
          </p>
          <Button className="">
            <Link href="/" className="">
              Find Your Guide Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};
export default About;
