import {
  Mail,
  BookOpen,
  Award,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const faculty = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Principal",
    subject: "School Administration",
    experience: "18+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a",
  },
  {
    name: "Mrs. Priya Sharma",
    role: "Vice Principal",
    subject: "Mathematics",
    experience: "14+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956",
  },
  {
    name: "Mr. Amit Verma",
    role: "Senior Teacher",
    subject: "Science",
    experience: "12+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136",
  },
  {
    name: "Mrs. Neha Singh",
    role: "Senior Teacher",
    subject: "English",
    experience: "10+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
  },
  {
    name: "Mr. Rahul Das",
    role: "Teacher",
    subject: "Social Science",
    experience: "8+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
  },
  {
    name: "Mrs. Anjali Gupta",
    role: "Teacher",
    subject: "Computer Science",
    experience: "7+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6",
  },
];

const Faculty = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      {/* Hero */}

      <section className="bg-linear-to-br from-blue-700 via-blue-800 to-indigo-900 text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
            Our Educators
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            Meet Our Faculty
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Experienced educators dedicated to helping students discover
            their potential, build confidence, and achieve academic success.
          </p>

        </div>
      </section>

      {/* Principal */}

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">

          <div className="grid overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">

            <img
              src={faculty[0].image}
              alt={faculty[0].name}
              className="h-full min-h-80 w-full object-cover"
            />

            <div className="flex flex-col justify-center p-8 sm:p-10">

              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Principal's Message
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Dr. Rajesh Kumar
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Our teachers believe that education is not only about
                examinations. We encourage students to think independently,
                develop discipline, and become responsible members of society.
              </p>

              <div className="mt-6 flex items-center gap-3 text-sm font-medium text-slate-600">
                <Award className="text-blue-600" size={20} />
                18+ Years of Educational Experience
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Faculty */}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Our Team
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Dedicated Faculty
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Our faculty members bring knowledge, experience, and
              enthusiasm into the classroom every day.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {faculty.slice(1).map((teacher) => (
              <article
                key={teacher.name}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="overflow-hidden">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">

                  <span className="text-sm font-semibold text-blue-600">
                    {teacher.role}
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    {teacher.name}
                  </h3>

                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                    <BookOpen size={17} className="text-blue-600" />
                    {teacher.subject}
                  </div>

                  <p className="mt-3 text-sm text-slate-500">
                    {teacher.experience}
                  </p>

                  <button className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
                    <Mail size={17} />
                    Contact Faculty
                  </button>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 px-5 text-center sm:px-6 md:flex-row md:text-left lg:px-8">

          <div>
            <h2 className="text-3xl font-bold">
              Education Begins With Great Teachers
            </h2>

            <p className="mt-3 text-slate-400">
              Learn more about our school and academic approach.
            </p>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
          >
            About Our School
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </div>
  );
};

export default Faculty;