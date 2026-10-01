import { useEffect, useState } from "react";

const campusImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5RirwvOaZHONyMtTktx6xcGDF7cSffkNlMSYE-5FyI03WE3EgZAnu1tYE&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrM9oHqh4aIA8r4uDVfmRT4cLwPTc60_57zS9bcgt67g&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrM9oHqh4aIA8r4uDVfmRT4cLwPTc60_57zS9bcgt67g&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrM9oHqh4aIA8r4uDVfmRT4cLwPTc60_57zS9bcgt67g&s=10",
  
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % campusImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {campusImages.map((image, index) => (
          <div
            key={index}
            className="min-w-full"
          >
            <img
              src={image}
              alt={`Sunrise School campus ${index + 1}`}
              className="h-100 w-full object-cover sm:h-125 lg:h-150"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;