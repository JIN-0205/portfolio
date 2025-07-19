import AboutSection from "@/components/sections/about/AboutSection";
import ContactSection from "@/components/sections/contact/ContactSection";
import HeroIntroCover from "@/components/sections/hero/HeroIntroCover";
import HeroSection from "@/components/sections/hero/HeroSection";
import ProjectSection from "@/components/sections/project/ProjectSection";
import SkillSection from "@/components/sections/skill/skillSection";

const Page = () => {
  return (
    <div className="bg-black text-white ">
      <div className="snap-mandatory snap-y h-screen overflow-y-scroll scroll-smooth">
        <HeroIntroCover />
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <SkillSection />
        <ContactSection />
        <div className="snap-end"></div> {/* Uncommenting for snap behavior */}
      </div>

      {/* <div className="footer bg-gray-800 snap-end">
        <p className="text-center text-gray-400"></p>
      </div> */}
    </div>
  );
};

export default Page;
