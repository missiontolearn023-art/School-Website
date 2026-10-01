import Hero from "../components/Hero";
import NoticeBoard from "../components/NoticeBoard";
import AboutPreview from "../components/AboutPreview";
import PrincipalMessage from "../components/PrincipalMessage";
import GalleryPreview from "../components/GalleryPreview";
import AchievementPreview from "../components/AchievementPreview";
import ContactCTA from "../components/ContactCTA";

const Home = () => {
  return (
    <>
      <Hero />
      <NoticeBoard />
      <AboutPreview />
      <PrincipalMessage />
      <GalleryPreview />
      <AchievementPreview />
      <ContactCTA />
    </>
  );
};

export default Home;