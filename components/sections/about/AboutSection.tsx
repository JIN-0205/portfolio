import { Globe } from "@/components/magicui/globe";
import { Archivo_Black } from "next/font/google";

const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: "400" });

const AboutSection = () => {
  return (
    <section className="text-white min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 lg:pt-44 snap-start">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Globe Section */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <Globe className="absolute left-[-124px] sm:-left-36 md:-top-16 md:-left-48 lg:-left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:-top-32 lg:w-[400px] lg:h-[400px]" />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2 text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl font-bold">
                Hello, I am
              </span>

              <h1
                className={`${archivoBlack.className} font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent filter drop-shadow-lg`}
              >
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                  JIN
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-1 sm:mt-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
            </div>

            <div className="space-y-4 sm:space-y-6 max-w-2xl mx-auto lg:mx-0">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                I am from Japan, a passionate web developer who loves crafting
                beautiful and functional frontend experiences. I&apos;m always
                eager to explore new technologies and trends in the
                ever-evolving world of web development.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                Though I&apos;m still growing my experience, I bring dedication,
                creativity, and a fresh perspective to every project I work on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
