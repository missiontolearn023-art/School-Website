import { Quote } from "lucide-react";

const PrincipalMessage = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">

        <div className="grid overflow-hidden rounded-3xl bg-slate-50 shadow-sm lg:grid-cols-[350px_1fr]">

          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
            alt="Principal"
            className="h-80 w-full object-cover lg:h-full"
          />

          <div className="p-8 sm:p-10 lg:p-12">

            <Quote
              size={38}
              className="text-blue-600"
            />

            <p className="mt-6 text-lg leading-8 text-slate-600">
              "Our goal is to create an environment where every child feels
              valued, encouraged, and inspired to learn. Education should
              develop not only knowledge but also character, confidence, and
              responsibility."
            </p>

            <div className="mt-8">

              <h2 className="text-2xl font-bold text-slate-900">
                Dr. Rajesh Kumar
              </h2>

              <p className="mt-1 font-medium text-blue-700">
                Principal
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default PrincipalMessage;