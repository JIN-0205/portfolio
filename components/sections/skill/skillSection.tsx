import { Marquee } from "@/components/magicui/marquee";
import { Icon } from "@iconify/react/dist/iconify.js";

const icons = [
  { icon: "logos:react", name: "React", area: "front" },
  {
    icon: "logos:nextjs-icon",
    name: "Next.js",
    area: "full",
  },
  {
    icon: "logos:typescript-icon",
    name: "TypeScript",
    area: "full",
  },
  {
    icon: "logos:javascript",
    name: "JavaScript",
    area: "full",
  },
  {
    icon: "logos:tailwindcss-icon",
    name: "Tailwind CSS",
    area: "front",
  },
  {
    icon: "logos:nodejs-icon",
    name: "Node.js",
    area: "back",
  },
  {
    icon: "devicon:mongodb",
    name: "MongoDB",
    area: "back",
  },
  {
    icon: "simple-icons:shadcnui",
    name: "ShadcnUI",
    area: "front",
  },
  {
    icon: "devicon:express",
    name: "Express",
    area: "back",
  },
  {
    icon: "vscode-icons:file-type-prisma",
    name: "Prisma",
    area: "back",
  },
  { icon: "logos:git-icon", name: "Git", area: "full" },
];

// const firstRow = reviews.slice(0, reviews.length / 2);
const firstRow = icons.slice(0, icons.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);
const secondRow = icons.slice(icons.length / 2);

const SkillCard = ({
  icon,
  name,
  area,
}: {
  icon: string;
  name: string;
  area: "front" | "back" | "full";
}) => {
  const getAreaConfig = (area: "front" | "back" | "full") => {
    switch (area) {
      case "front":
        return {
          gradient: "from-blue-500 to-cyan-500",
          shadowColor: "shadow-blue-500/25",
          borderColor: "border-blue-500/30",
          badge: "Frontend",
          badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
        };
      case "back":
        return {
          gradient: "from-red-500 to-orange-500",
          shadowColor: "shadow-red-500/25",
          borderColor: "border-red-500/30",
          badge: "Backend",
          badgeColor: "bg-red-500/20 text-red-300 border-red-500/30",
        };
      case "full":
        return {
          gradient: "from-purple-500 to-pink-500",
          shadowColor: "shadow-purple-500/25",
          borderColor: "border-purple-500/30",
          badge: "Full Stack",
          badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
        };
      default:
        return {
          gradient: "from-gray-500 to-gray-600",
          shadowColor: "shadow-gray-500/25",
          borderColor: "border-gray-500/30",
          badge: "Other",
          badgeColor: "bg-gray-500/20 text-gray-300 border-gray-500/30",
        };
    }
  };

  const config = getAreaConfig(area);

  return (
    <div className="group relative">
      <div
        className={`
        relative bg-gradient-to-br from-slate-800 to-slate-900 
        rounded-2xl p-6 mx-4 min-w-[280px] border ${config.borderColor}
        hover:shadow-2xl ${config.shadowColor} transition-all duration-300
        hover:scale-105 transform
      `}
      >
        {/* Background Glow Effect */}
        <div
          className={`
          absolute inset-0 rounded-2xl bg-gradient-to-r ${config.gradient} 
          opacity-0 group-hover:opacity-10 transition-opacity duration-300
        `}
        ></div>

        {/* Icon Container */}
        <div className="relative flex items-center justify-center mb-4">
          <div
            className={`
            p-4 rounded-full bg-white shadow-lg border-2 ${config.borderColor}
            transform group-hover:scale-110 transition-all duration-300
            group-hover:shadow-xl ${config.shadowColor}
          `}
          >
            <Icon
              icon={icon}
              width="40"
              height="40"
              className="text-gray-800"
            />
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-3">
          <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
            {name}
          </h3>

          {/* Area Badge */}
          <div className="flex justify-center">
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full border ${config.badgeColor}`}
            >
              {config.badge}
            </span>
          </div>
        </div>

        {/* Hover Effect Border */}
        <div
          className={`
          absolute inset-0 rounded-2xl border-2 ${config.borderColor} 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
        `}
        ></div>
      </div>
    </div>
  );
};

const SkillSection = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen p-8 sm:px-6 lg:px-8 snap-start bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <span className="text-2xl sm:text-3xl font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Frontend
            </span>
            <span className="text-2xl text-gray-400 hidden sm:inline">×</span>
            <span className="text-2xl sm:text-3xl font-medium bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Backend
            </span>
            <span className="text-2xl text-gray-400 hidden sm:inline">×</span>
            <span className="text-2xl sm:text-3xl font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Full Stack
            </span>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Marquee */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:25s] py-4">
            {firstRow.map((icon) => (
              <SkillCard
                key={icon.name}
                icon={icon.icon}
                name={icon.name}
                area={icon.area as "front" | "back" | "full"}
              />
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:25s] py-4">
            {secondRow.map((icon) => (
              <SkillCard
                key={icon.name}
                icon={icon.icon}
                name={icon.name}
                area={icon.area as "front" | "back" | "full"}
              />
            ))}
          </Marquee>

          {/* Gradient Overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-slate-900 via-indigo-900/50 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-slate-900 via-indigo-900/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};
export default SkillSection;
