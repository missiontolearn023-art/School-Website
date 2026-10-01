import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754",
];

const GalleryPreview = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              School Life
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Explore Our School
            </h2>

            <p className="mt-4 max-w-xl text-slate-600">
              Take a look at our classrooms, campus, activities, and
              memorable moments.
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 font-semibold text-blue-700"
          >
            View Gallery
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">

          {images.map((image, index) => (
            <div
              key={image}
              className={`overflow-hidden rounded-3xl ${
                index === 1 ? "md:translate-y-8" : ""
              }`}
            >
              <img
                src={image}
                alt={`School campus ${index + 1}`}
                className="h-72 w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default GalleryPreview;