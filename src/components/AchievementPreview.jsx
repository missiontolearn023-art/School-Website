import { Link } from "react-router-dom";
import { ArrowRight, Trophy } from "lucide-react";
import { useEffect, useState } from "react";

const achievers = [
  {
    image:
      "https://mpsckp.com/gallery/prize_distribution/images/11.jpg",
    title: "School Topper",
    subtitle: "Academic Excellence",
    year: "2025–26",
  },
  {
    image:
      "https://thebridge.in/h-upload/2026/02/06/64722-untitled-2026-02-06t173209985.jpg",
    title: "Athletics Champion",
    subtitle: "100m Running",
    year: "2025–26",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHDNqcf_ljCeN0mRnJ1un5B2dzKJ-m6rX1gIBuIBtr878BE07j5cnlXI&s=10",
    title: "Sports Champion",
    subtitle: "Inter-School Cricket",
    year: "2024–25",
  },
  {
    image:
      "https://static.careers360.mobi/media/schools/social-media/media-gallery/18861/2019/8/17/Nav%20Jeevan%20Mission%20School%20-%20Award.jpg",
    title: "Overall Achievement",
    subtitle: "District Competition",
    year: "2024–25",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRam6hiLyabIZjDAE7rK1tHz9QE4Iv-JecEN12KIQNdxwUUSqBA9zE0WRZw&s=10",
    title: "Science Excellence",
    subtitle: "Science Exhibition",
    year: "2025–26",
  },
  {
    image:
      "https://cache.careers360.mobi/media/schools/social-media/media-gallery/27586/2025/7/29/Annual%20Day%20Celebration.png",
    title: "Cultural Champion",
    subtitle: "Annual Cultural Event",
    year: "2024–25",
  },
];


const AchievementPreview = () => {
  const [current, setCurrent] = useState(0);

  const visibleCards = 3;
  const maxIndex = Math.max(0, achievers.length - visibleCards);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="overflow-hidden bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
            Our Journey
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Celebrating Our Achievers
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            From academic toppers to sports champions, our students continue
            to make Sunrise School proud.
          </p>
        </div>

        {/* Slider */}
        <div className="relative mt-12 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * (100 / visibleCards)}%)`,
            }}
          >
            {achievers.map((student, index) => (
              <div
                key={index}
                className="min-w-full px-1 sm:min-w-[50%] lg:min-w-[33.333333%] lg:px-3"
              >
                <div className="group overflow-hidden rounded-3xl border border-slate-700 bg-slate-800 shadow-xl transition hover:-translate-y-2">

                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={student.image}
                      alt={student.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent" />

                    <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-blue-700 shadow-lg">
                      <Trophy size={21} />
                    </div>

                    <span className="absolute bottom-4 left-4 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-bold text-white">
                      {student.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold">
                      {student.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      {student.subtitle}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-slate-700 pt-4">
                      <span className="text-sm font-medium text-slate-400">
                        Sunrise School
                      </span>

                      <span className="text-sm font-semibold text-blue-400">
                        Achievement
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="mt-7 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Show achievement ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                current === index
                  ? "w-8 bg-blue-500"
                  : "w-2 bg-slate-600"
              }`}
            />
          ))}
        </div>

        {/* Button */}
        <div className="mt-10 text-center">
          <Link
            to="/achievements"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
          >
            View All Achievements
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};


export default AchievementPreview;