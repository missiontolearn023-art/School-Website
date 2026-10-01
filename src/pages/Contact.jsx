import ContactCTA from "../components/ContactCTA";

const Contact = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-blue-700">GET IN TOUCH</p>

          <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">
            Contact Us
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-slate-600">
            Have a question about Sunrise School? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          {/* Information */}
          <div>
            <p className="font-semibold text-blue-700">SUNRISE SCHOOL</p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              We'd love to hear from you
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Contact our school office for admissions, general enquiries,
              events or any other information.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <p className="font-semibold text-slate-900">Address</p>
                <p className="mt-1 text-slate-600">
                  Sunrise School Campus
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-900">Phone</p>
                <p className="mt-1 text-slate-600">
                  +91 98765 43210
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-900">Email</p>
                <p className="mt-1 text-slate-600">
                  info@sunriseschool.edu
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
};

export default Contact;