import { Bell, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const notices = [
  {
    date: "12 Oct",
    title: "Parent-Teacher Meeting",
  },
  {
    date: "18 Oct",
    title: "Mid-Term Examination Schedule",
  },
  {
    date: "25 Oct",
    title: "Annual Sports Day Registration",
  },
  {
    date: "02 Nov",
    title: "Science Exhibition",
  },
    {
    date: "02 Nov",
    title: "Science Exhibition",
  },  {
    date: "02 Nov",
    title: "Science Exhibition",
  },  {
    date: "02 Nov",
    title: "Science Exhibition",
  },  {
    date: "02 Nov",
    title: "Science Exhibition",
  },
];

const NoticeBoard = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
          {/* Main Announcement */}

          <div className="rounded-3xl bg-blue-700 p-8 text-white sm:p-10">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-200">
              School Updates
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Stay Connected With Our School
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-blue-100">
              Keep up with important announcements, academic schedules, upcoming
              activities, and school events.
            </p>

            <Link
              to="/events"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-blue-700 transition hover:-translate-y-1"
            >
              View Events
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Notice Board */}

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                <Bell size={22} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Notice Board
                </h2>

                <p className="text-sm text-slate-500">Latest announcements</p>
              </div>
            </div>

            <div className="mt-6 max-h-80 overflow-y-scroll divide-y divide-slate-100 pr-2">
              {notices.map((notice) => (
                <div key={notice.title} className="flex gap-4 py-4">
                  <span className="shrink-0 rounded-lg bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700">
                    {notice.date}
                  </span>

                  <p className="text-sm font-medium leading-6 text-slate-700">
                    {notice.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;
