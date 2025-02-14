"use client";

import { useEffect } from "react";

const pricingItems = [
  {
    service: "Web Development",
    startingPrice: 200.0,
  },
  {
    service: "APP Development",
    startingPrice: 300.0,
  },
  {
    service: "QA Testing",
    startingPrice: 100.0,
  },
  {
    service: "Marketing",
    startingPrice: 100.0,
  },
  {
    service: "UI/UX Design",
    startingPrice: 100.0,
  },
  {
    service: "WordPress/WIX",
    startingPrice: 100.0,
  },
];

export default function Price() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      {/* Section Title */}
      <div
        className="container mx-auto px-4 text-center mb-16"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing</h2>
        <div className="text-gray-600">
          <span>Check Our </span>
          <span className="text-primary font-semibold">Pricing</span>
        </div>
      </div>

      {/* Pricing Grid */}
      <div
        className="container mx-auto px-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {pricingItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.service}
                </h3>
                <h4 className="text-lg font-medium text-primary">
                  Starts from ${item.startingPrice.toFixed(2)}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
