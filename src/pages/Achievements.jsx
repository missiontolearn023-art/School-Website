import { useState } from "react";
import { Trophy, Star, Award } from "lucide-react";

const class10Students = [
  {
    name: "Aarav Sharma",
    section: "Class 10 - A",
    percentage: "96.4%",
    year: "2025–26",
    achievement: "School Topper",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ssD0ZxIhiiEz-Wa_tRthd0KwUQnr64kP4Vqx71o140WMEdu6nTs_yPdL&s=10",
  },
  {
    name: "Diya Patel",
    section: "Class 10 - B",
    percentage: "94.8%",
    year: "2025–26",
    achievement: "Academic Excellence",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKpW0VJeBM0DIOIbggBL8XQgDbXyDauNKKtb_D8w3pKD9ONLI926-v1c-U&s=10",
  },
  {
    name: "Rohan Mehta",
    section: "Class 10 - C",
    percentage: "93.6%",
    year: "2024–25",
    achievement: "Science Excellence",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ssD0ZxIhiiEz-Wa_tRthd0KwUQnr64kP4Vqx71o140WMEdu6nTs_yPdL&s=10",
  },
  {
    name: "Ananya Singh",
    section: "Class 10 - A",
    percentage: "92.4%",
    year: "2024–25",
    achievement: "Mathematics Excellence",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ssD0ZxIhiiEz-Wa_tRthd0KwUQnr64kP4Vqx71o140WMEdu6nTs_yPdL&s=10",
  },
];

const class12Students = [
  {
    name: "Aditya Verma",
    section: "Class 12 - Science",
    percentage: "98.2%",
    year: "2025–26",
    achievement: "Science Topper",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ssD0ZxIhiiEz-Wa_tRthd0KwUQnr64kP4Vqx71o140WMEdu6nTs_yPdL&s=10",
  },
  {
    name: "Sneha Kapoor",
    section: "Class 12 - Commerce",
    percentage: "96.7%",
    year: "2025–26",
    achievement: "Commerce Excellence",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ssD0ZxIhiiEz-Wa_tRthd0KwUQnr64kP4Vqx71o140WMEdu6nTs_yPdL&s=10",
  },
  {
    name: "Kunal Joshi",
    section: "Class 12 - Arts",
    percentage: "95.3%",
    year: "2024–25",
    achievement: "Academic Excellence",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ssD0ZxIhiiEz-Wa_tRthd0KwUQnr64kP4Vqx71o140WMEdu6nTs_yPdL&s=10",
  },
  {
    name: "Ritika Desai",
    section: "Class 12 - Science",
    percentage: "94.6%",
    year: "2024–25",
    achievement: "Physics Excellence",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ssD0ZxIhiiEz-Wa_tRthd0KwUQnr64kP4Vqx71o140WMEdu6nTs_yPdL&s=10",
  },
];


const StudentCard = ({ student }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Student Image */}
      <div className="relative h-64 overflow-hidden bg-slate-100">
        <img
          src={student.image}
          alt={`${student.name}, ${student.section} achiever`}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Academic Year Badge */}
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-blue-700 shadow-sm">
          {student.year}
        </span>

        {/* Class Badge */}
        <span className="absolute bottom-3 left-3 rounded-lg bg-blue-700 px-3 py-1.5 text-xs font-semibold text-white">
          {student.section}
        </span>
      </div>

      {/* Student Details */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              {student.name}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {student.achievement}
            </p>
          </div>

          <span className="shrink-0 rounded-lg bg-blue-50 px-3 py-2 text-sm font-bold text-blue-700">
            {student.percentage}
          </span>
        </div>

        <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4">
          <Trophy size={18} className="text-amber-500" />

          <span className="text-sm font-medium text-slate-600">
            Academic Achiever
          </span>
        </div>
      </div>
    </article>
  );
};

const StudentSection = ({ title, subtitle, students }) => {
  return (
    <section className="mb-16">
      <div className="mb-7">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
            <Award size={23} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              {title}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="mt-5 h-1 w-16 rounded-full bg-blue-700" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {students.map((student) => (
          <StudentCard key={student.name} student={student} />
        ))}
      </div>
    </section>
  );
};

const Achievements = () => {
  const [activeYear, setActiveYear] = useState("All Years");

  const filterStudents = (students) =>
    activeYear === "All Years"
      ? students
      : students.filter((student) => student.year === activeYear);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-linear-to-r from-blue-50 via-white to-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-2 font-semibold tracking-widest text-blue-700">
              <Star size={18} />
              OUR SUCCESS
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Our Achievers
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Celebrating the hard work, dedication and achievements of our
              Class 10 and Class 12 students.
            </p>
          </div>
        </div>
      </section>

      {/* Year Filter */}
      <section className="mx-auto max-w-7xl px-5 pt-10 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <p className="font-semibold text-slate-700">
            Browse achievements by academic year
          </p>

          <div className="flex flex-wrap gap-2">
            {["All Years", "2025–26", "2024–25"].map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  activeYear === year
                    ? "bg-blue-700 text-white shadow-sm"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Class 10 */}
        <StudentSection
          title="Class 10 Achievers"
          subtitle="Celebrating our secondary school achievers"
          students={filterStudents(class10Students)}
        />

        {/* Class 12 */}
        <StudentSection
          title="Class 12 Achievers"
          subtitle="Celebrating our senior secondary school achievers"
          students={filterStudents(class12Students)}
        />
      </section>
    </div>
  );
};

export default Achievements;