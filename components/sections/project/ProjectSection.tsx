"use client";

import { ArrowRight, ExternalLink, Github } from "lucide-react";

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "Modern portfolio website built with Next.js, TypeScript, and Tailwind CSS",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      video: "/videos/portfolio_video.mp4",
      github: "https://github.com/JIN-0205",
      demo: "https://www.jin-nakano.net/",
      isComingSoon: false,
    },
    {
      id: 2,
      title: "Pomolink",
      description:
        "Collaborative Pomodoro timer platform with video recording, task management, and real-time room sharing features",
      tech: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "Firebase",
        "Clerk Auth",
        "Tailwind CSS",
      ],
      video: "/videos/pomolink_video.mp4",
      github: "https://github.com/JIN-0205",
      demo: "https://www.pomolink.net/",
      isComingSoon: false,
    },
    {
      id: 3,
      title: "Coming Soon",
      description:
        "Exciting new project in development. Stay tuned for more updates!",
      tech: ["Next.js", "TypeScript"],
      video: null,
      github: null,
      demo: null,
      isComingSoon: true,
    },
  ];

  return (
    <div
      id="projects"
      className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white min-h-screen snap-start px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my latest work, featuring modern web applications
            built with cutting-edge technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative bg-gradient-to-br ${
                project.isComingSoon
                  ? "from-slate-800/50 to-slate-900/50 border-slate-600"
                  : "from-slate-800 to-slate-900 border-slate-700 hover:border-purple-500"
              } rounded-2xl overflow-hidden border transition-all duration-300 ${
                project.isComingSoon
                  ? "cursor-not-allowed"
                  : "transform hover:scale-105 hover:shadow-2xl"
              }`}
            >
              {/* Project Video */}
              <div className="relative h-48 bg-gradient-to-br from-purple-600 to-blue-600 overflow-hidden">
                {project.video ? (
                  <video
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4 opacity-50">🚧</div>
                      <div className="text-lg font-medium text-slate-300">
                        Coming Soon
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                {!project.isComingSoon && (
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex space-x-2">
                      {project.github && (
                        <a
                          href={project.github}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3
                  className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                    project.isComingSoon
                      ? "text-slate-400"
                      : "text-white group-hover:text-purple-400"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mb-4 text-sm leading-relaxed ${
                    project.isComingSoon ? "text-slate-500" : "text-gray-400"
                  }`}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-xs rounded-full border ${
                        project.isComingSoon
                          ? "bg-slate-800/30 text-slate-400 border-slate-700/50"
                          : "bg-purple-900/30 text-purple-300 border-purple-800/50"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Learn More Button */}
                <div className="flex items-center justify-between">
                  {project.isComingSoon ? (
                    <div className="flex items-center space-x-2 text-slate-500">
                      <span className="text-sm font-medium">
                        Coming Soon...
                      </span>
                    </div>
                  ) : (
                    <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200 group/btn">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight
                        size={16}
                        className="transform group-hover/btn:translate-x-1 transition-transform duration-200"
                      />
                    </button>
                  )}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
