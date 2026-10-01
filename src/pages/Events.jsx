import {
  CalendarDays,
  Clock3,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const upcomingEvents = [
  {
    date: "15",
    month: "OCT",
    title: "Annual Sports Day",
    description:
      "A day full of sports, teamwork, competition, and school spirit.",
    time: "9:00 AM - 3:00 PM",
    location: "School Sports Ground",
  },
  {
    date: "22",
    month: "OCT",
    title: "Science Exhibition",
    description:
      "Students showcase creative science projects and innovative ideas.",
    time: "10:00 AM - 2:00 PM",
    location: "School Auditorium",
  },
  {
    date: "05",
    month: "NOV",
    title: "Annual Cultural Program",
    description:
      "An evening celebrating music, dance, drama, and student talent.",
    time: "5:00 PM - 8:00 PM",
    location: "Main Auditorium",
  },
];

const pastEvents = [
  {
    title: "Independence Day Celebration",
    date: "15 August 2026",
  },
  {
    title: "Teachers' Day Celebration",
    date: "5 September 2026",
  },
  {
    title: "Inter-School Debate Competition",
    date: "28 September 2026",
  },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      {/* Hero */}

      <section className="bg-linear-to-br from-blue-700 via-blue-800 to-indigo-900 text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
            School Life
          </p>

          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Events & Activities
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
            Discover the academic, cultural, sports, and community events
            that make our school life exciting and meaningful.
          </p>

          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-blue-700 transition hover:-translate-y-1 hover:shadow-lg"
            >
              Back to Home
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* Upcoming Events */}

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              What's Happening
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Upcoming Events
            </h2>

            <p className="mt-4 max-w-2xl text-slate-600">
              Stay updated with important events and activities happening
              across our school campus.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-3">

            {upcomingEvents.map((event) => (
              <article
                key={event.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Date */}

                <div className="flex items-center gap-5 bg-blue-50 p-6">
                  <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-blue-700 text-white">
                    <span className="text-2xl font-bold">
                      {event.date}
                    </span>
                    <span className="text-xs font-semibold">
                      {event.month}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {event.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">

                  <p className="leading-7 text-slate-600">
                    {event.description}
                  </p>

                  <div className="mt-6 space-y-3 border-t border-slate-100 pt-5 text-sm text-slate-600">

                    <div className="flex items-center gap-3">
                      <Clock3
                        size={18}
                        className="text-blue-600"
                      />
                      {event.time}
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin
                        size={18}
                        className="text-blue-600"
                      />
                      {event.location}
                    </div>

                  </div>

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* Past Events */}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Memories
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Recent Events
            </h2>
          </div>

          <div className="divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white">

            {pastEvents.map((event) => (
              <div
                key={event.title}
                className="flex flex-col gap-2 px-6 py-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                    <CalendarDays size={22} />
                  </div>

                  <h3 className="font-semibold text-slate-900">
                    {event.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-500">
                  {event.date}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
};

export default Events;