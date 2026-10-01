import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const points = [
  "Experienced and dedicated teachers",
  "Student-focused learning environment",
  "Modern classrooms and facilities",
  "Academic and extracurricular development",
];

const AboutPreview = () => {
  return (
    <section className="bg-blue-50 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">

        <div>

          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            About Our School
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Building Strong Foundations For The Future
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Our school is committed to providing quality education while
            helping students develop curiosity, creativity, discipline, and
            confidence.
          </p>

          <div className="mt-7 space-y-4">

            {points.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-blue-600"
                />

                <span className="text-slate-700">
                  {point}
                </span>
              </div>
            ))}

          </div>

          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-700"
          >
            Learn More About Us
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="grid grid-cols-2 gap-4">

          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5"
              alt="Students"
              className="h-64 w-full object-cover"
            />
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
              alt="Classroom"
              className="h-64 w-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutPreview;