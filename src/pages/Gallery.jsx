import GalleryPreview from "../components/GalleryPreview";

const Gallery = () => {
  const categories = [
    "School Campus",
    "Classroom Activities",
    "Sports Day",
    "Annual Function",
    "Science Exhibition",
    "Cultural Program",
    "Educational Trips",
    "Student Activities",
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-blue-700">OUR MEMORIES</p>

          <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">
            School Gallery
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-slate-600">
            Explore moments from our classrooms, events, celebrations and
            student activities.
          </p>
        </div>
      </section>

      {/* Existing component */}
      <GalleryPreview />

      {/* Full gallery */}
      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <div
                key={category}
                className="group flex h-64 items-end overflow-hidden rounded-3xl bg-linear-to-br from-blue-100 to-slate-100 p-6 transition hover:-translate-y-1"
              >
                <div>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 font-bold text-white">
                    {index + 1}
                  </div>

                  <h3 className="font-bold text-slate-900">
                    {category}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    View memories
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;