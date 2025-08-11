import React, { memo } from 'react';
import { MapPinIcon, CheckIcon, GlobeIcon, UsersIcon, CalendarIcon } from 'lucide-react';
const About = () => {
  const attractions = [{
    name: 'Wildlife Safari',
    image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Tanzania is home to some of the most spectacular wildlife viewing in Africa, including the Great Migration in Serengeti.'
  }, {
    name: 'Mount Kilimanjaro',
    image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: "Africa's highest peak offers one of the world's greatest mountain climbs with stunning views and diverse ecosystems."
  }, {
    name: 'Zanzibar Beaches',
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc90f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Crystal clear waters, white sand beaches, and historic Stone Town make Zanzibar a perfect destination to relax.'
  }, {
    name: 'Maasai Culture',
    image: 'https://images.unsplash.com/photo-1489380969522-30e893eb88a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: "Experience the rich traditions of the Maasai people, one of Africa's most famous and culturally distinctive tribes."
  }];
  const facts = [{
    icon: <GlobeIcon size={24} className="text-emerald-600" />,
    title: 'Geography',
    description: 'Tanzania is the largest country in East Africa, covering 947,300 square kilometers with diverse landscapes from mountains to savannah.'
  }, {
    icon: <UsersIcon size={24} className="text-emerald-600" />,
    title: 'People & Culture',
    description: 'Home to over 120 ethnic groups with diverse cultures and traditions, with Swahili being the national language alongside English.'
  }, {
    icon: <CalendarIcon size={24} className="text-emerald-600" />,
    title: 'Best Time to Visit',
    description: 'The dry seasons (June-October and December-February) are ideal for wildlife viewing, while March-May brings lush landscapes but more rain.'
  }];
  return <div>
      {/* Hero Section */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Tanzania
          </h1>
          <p className="text-xl text-white mb-6 max-w-2xl">
            Discover the breathtaking landscapes, rich culture, and incredible
            wildlife of Tanzania
          </p>
        </div>
      </div>
      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Welcome to Tanzania</h2>
            <p className="text-gray-700 mb-6 text-lg">
              Tanzania is a land of incredible natural beauty, rich cultural
              heritage, and some of the world's most spectacular wildlife. From
              the snow-capped peak of Mount Kilimanjaro to the endless plains of
              the Serengeti, and from the pristine beaches of Zanzibar to the
              depths of the Ngorongoro Crater, Tanzania offers experiences that
              will stay with you for a lifetime.
            </p>
            <p className="text-gray-700 text-lg">
              Our local guides are passionate about sharing their homeland with
              visitors, providing authentic experiences that go beyond typical
              tourism. Whether you're seeking adventure, relaxation, cultural
              immersion, or wildlife encounters, our guides will help you
              discover the real Tanzania.
            </p>
          </div>
        </div>
      </section>
      {/* Top Attractions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Top Attractions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
            Tanzania offers an incredible variety of experiences for every type
            of traveler
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {attractions.map((attraction, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <img src={attraction.image} alt={attraction.name} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {attraction.name}
                  </h3>
                  <p className="text-gray-600">{attraction.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Tanzania Facts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Tanzania Facts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
            Essential information to help you plan your Tanzanian adventure
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facts.map((fact, index) => <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  {fact.icon}
                  <h3 className="text-xl font-semibold ml-3">{fact.title}</h3>
                </div>
                <p className="text-gray-600">{fact.description}</p>
              </div>)}
          </div>
          <div className="mt-12 bg-emerald-50 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Travel Tips</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckIcon size={20} className="text-emerald-600 mt-1 mr-2 flex-shrink-0" />
                <span>
                  Visa requirements: Most visitors need a visa, which can be
                  obtained on arrival or online in advance.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon size={20} className="text-emerald-600 mt-1 mr-2 flex-shrink-0" />
                <span>
                  Health: Yellow fever vaccination is required, and malaria
                  prophylaxis is recommended.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon size={20} className="text-emerald-600 mt-1 mr-2 flex-shrink-0" />
                <span>
                  Currency: The Tanzanian Shilling (TZS) is the local currency,
                  but USD is widely accepted in tourist areas.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon size={20} className="text-emerald-600 mt-1 mr-2 flex-shrink-0" />
                <span>
                  Language: Swahili is the national language, but English is
                  widely spoken in tourist areas.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Experience Tanzania?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our local guides are ready to help you create unforgettable memories
            in this beautiful country.
          </p>
          <button className="px-8 py-3 bg-white text-emerald-700 font-medium rounded-md hover:bg-gray-100 transition-colors">
            Find Your Guide Now
          </button>
        </div>
      </section>
    </div>;
};
export default About;
