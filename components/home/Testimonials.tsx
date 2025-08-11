import React from "react";
import { StarIcon } from "lucide-react";
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "United States",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      text: "Our guide Emmanuel was incredible! He knew exactly where to find the most amazing wildlife in Serengeti and shared so much knowledge about the animals and ecosystem. The highlight of our Tanzania trip!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Canada",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      text: "Climbing Kilimanjaro with David was an unforgettable experience. His expertise, encouragement, and attention to safety made all the difference in helping our group reach the summit.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Wilson",
      location: "United Kingdom",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      text: "Amina showed us the real Zanzibar beyond the tourist spots. Her knowledge of local history and culture made our experience so much richer. She also knew the best local restaurants!",
      rating: 4,
    },
  ];
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Travelers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from travelers who have experienced Tanzania with our local guides
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    size={18}
                    className={`${
                      i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
