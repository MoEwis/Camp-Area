import Camp from "@/components/camp/Camp";
import Features from "@/components/features/Features";
import GetApp from "@/components/getApp";
import Guide from "@/components/guide";
import Hero from "@/components/hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  );
};

export default Home;
