import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CarCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carDetails = [
    {
      model: "BYD SEALION 7",
      specs: "230KW COMFORT 83KWH 5DR AUTOMATIC",
      monthlyPrice: "£378",
      businessPrice: "£315",
      contractOptions: [
        { label: "36 month contract", color: "bg-pink-500" },
        { label: "6 months upfront", color: "bg-blue-500" },
        { label: "8000 miles a year", color: "bg-pink-500" },
      ],
      image:
        "https://static.vecteezy.com/system/resources/previews/026/427/927/non_2x/vintage-classic-car-illustration-free-png.png",
      background: "",
    },
    {
      model: "TESLA MODEL 3",
      specs: "350KW PERFORMANCE LONG RANGE AWD",
      monthlyPrice: "£498",
      businessPrice: "£415",
      contractOptions: [
        { label: "24 month contract", color: "bg-blue-500" },
        { label: "3 months upfront", color: "bg-green-500" },
        { label: "10000 miles a year", color: "bg-purple-500" },
      ],
      image:
        "https://file.aiquickdraw.com/imgcompressed/img/compressed_47229c258876a6b5c8c644371f1d9e51.webp",
      background: "",
    },
    // You can add more car models here
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carDetails.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carDetails.length) % carDetails.length
    );
  };

  const car = carDetails[currentSlide];

  return (
    <div
      className="relative w-full min-h-[700px] overflow-hidden bg-cover bg-center mt-44 flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${car.background})` }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-500"></div>

      <div className="relative z-10 container mx-auto px-6 py-6 flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 
                     bg-white/30 hover:bg-white/50 p-3 rounded-full 
                     shadow-lg transition-all duration-300"
        >
          <ChevronLeft className="text-white w-8 h-8" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 
                     bg-white/30 hover:bg-white/50 p-3 rounded-full 
                     shadow-lg transition-all duration-300"
        >
          <ChevronRight className="text-white w-8 h-8" />
        </button>

        {/* Car Details Section */}
        <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-center">
          {/* Left Side - Car Details */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left text-white">
            <div>
              <h2 className="text-5xl font-bold text-yellow-400 mb-4 transition-transform duration-300 hover:scale-105">
                {car.model}
              </h2>
              <p className="text-xl font-medium text-white/80">{car.specs}</p>
            </div>

            <div className="text-6xl font-bold text-yellow-400">
              {car.monthlyPrice}
              <span className="text-2xl ml-2">A MONTH INC VAT</span>
            </div>

            {/* Contract Options */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {car.contractOptions.map((option, index) => (
                <div
                  key={index}
                  className={` 
                    ${option.color} 
                    px-4 py-2 
                    rounded-lg 
                    text-white 
                    font-medium 
                    shadow-lg 
                    transform 
                    hover:scale-110 
                    transition-transform duration-300
                  `}
                >
                  {option.label}
                </div>
              ))}
            </div>

            <div className="text-xl text-white/80">
              BUSINESS PRICE {car.businessPrice} + VAT
            </div>
          </div>

          {/* Right Side - Car Image */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <img
              src={car.image}
              alt={car.model}
              className="max-w-full h-auto transform hover:scale-110 transition-transform duration-300 shadow-lg"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="absolute bottom-8 right-8 z-20 bg-white/20 backdrop-blur-md rounded-lg p-4 w-64 shadow-lg">
        <div className="flex space-x-2 mb-4">
          <button className="px-3 py-1 bg-cyan-500 text-white rounded-full text-sm hover:bg-cyan-600 transition-colors">
            Personal
          </button>
          <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300 transition-colors">
            Business
          </button>
        </div>

        <div className="space-y-2">
          <select className="w-full px-3 py-2 bg-white/30 text-white rounded-md hover:bg-white/40 transition-colors">
            <option>All makes</option>
          </select>
          <select className="w-full px-3 py-2 bg-white/30 text-white rounded-md hover:bg-white/40 transition-colors">
            <option>All models</option>
          </select>
          <select className="w-full px-3 py-2 bg-white/30 text-white rounded-md hover:bg-white/40 transition-colors">
            <option>All body styles</option>
          </select>
          <select className="w-full px-3 py-2 bg-white/30 text-white rounded-md hover:bg-white/40 transition-colors">
            <option>Any budget</option>
          </select>

          <button className="w-full py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors">
            Get deals
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCarousel;
