import AboutPreview from "../components/AboutPreview";
import PrincipalMessage from "../components/PrincipalMessage";
import ContactCTA from "../components/ContactCTA";

const About = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-blue-700">ABOUT OUR SCHOOL</p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            About Sunrise School
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Discover our story, values, vision and commitment to providing
            quality education.
          </p>
        </div>
      </section>

      <AboutPreview />

      <PrincipalMessage />

      {/* Vision & Mission */}
      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-blue-50 p-8">
            <p className="font-semibold text-blue-700">OUR VISION</p>

            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              Building tomorrow's leaders
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              We aim to create confident, responsible and creative students
              who are prepared to contribute positively to society.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8">
            <p className="font-semibold text-blue-700">OUR MISSION</p>

            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              Education beyond classrooms
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Our mission is to combine academic excellence with character
              development, creativity, sports and meaningful experiences.
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
};

export default About;