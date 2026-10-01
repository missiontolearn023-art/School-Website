import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* School */}

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
                S
              </div>

              <div>
                <h2 className="font-bold text-white">
                  Sunrise School
                </h2>

                <p className="text-xs text-slate-500">
                  Learn • Grow • Excel
                </p>
              </div>

            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Building confident, curious, and responsible students through
              quality education and a supportive learning environment.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="font-bold text-white">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm">

              <Link
                to="/"
                className="transition hover:text-blue-400"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="transition hover:text-blue-400"
              >
                About
              </Link>

              <Link
                to="/gallery"
                className="transition hover:text-blue-400"
              >
                Gallery
              </Link>

              <Link
                to="/events"
                className="transition hover:text-blue-400"
              >
                Events
              </Link>

            </div>

          </div>

          {/* School */}

          <div>

            <h3 className="font-bold text-white">
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm">

              <Link
                to="/faculty"
                className="transition hover:text-blue-400"
              >
                Faculty
              </Link>

              <Link
                to="/achievements"
                className="transition hover:text-blue-400"
              >
                Achievements
              </Link>

              <Link
                to="/contact"
                className="transition hover:text-blue-400"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-bold text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm">

              <div className="flex gap-3">
                <MapPin
                  size={19}
                  className="shrink-0 text-blue-500"
                />

                <span>
                  Main Road,
                  <br />
                  Bokaro, Jharkhand
                </span>
              </div>

              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 transition hover:text-blue-400"
              >
                <Phone size={18} />
                +91 98765 43210
              </a>

              <a
                href="mailto:info@sunriseschool.com"
                className="flex items-center gap-3 transition hover:text-blue-400"
              >
                <Mail size={18} />
                info@sunriseschool.com
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-12 border-t border-slate-800 pt-7 text-center text-sm text-slate-500">

          <p>
            © {new Date().getFullYear()} Sunrise School. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;