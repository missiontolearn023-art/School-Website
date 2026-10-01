import {
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-700 to-indigo-800 px-7 py-12 text-white sm:px-12 lg:px-16">

          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
                Get In Touch
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Have Questions About Our School?
              </h2>

              <p className="mt-4 leading-7 text-blue-100">
                Contact our school office to learn more about admissions,
                academics, facilities, and upcoming activities.
              </p>

            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:-translate-y-1"
              >
                <Phone size={18} />
                Call School
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3 font-semibold transition hover:bg-white/10"
              >
                <MapPin size={18} />
                Visit Us
                <ArrowRight size={17} />
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactCTA;