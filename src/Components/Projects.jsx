import React, { useState } from 'react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  // Projects data structured in JSON
 const projectsData = [
  {
    id: 1,
    title: "BookNoteHub",
    description:
      "A full-stack web application to track and manage non-fiction books. Users can add notes, ratings, and track their reading history with PostgreSQL database support.",
    techStack: ["EJS", "TailwindCSS", "JavaScript", "Node.js", "Express.js", "PostgreSQL"],
    image: "/assets/images/projects/bookmanagement.png",
    link: "https://github.com/Arsk86shaikh/BookNoteHub",
    github: "https://github.com/Arsk86shaikh/BookNoteHub",
    category: "Full Stack",
    featured: true
  },
  {
    id: 2,
    title: "DeCodeX",
    description:
      "An AI-powered modern coding platform built with React and OpenRouter AI APIs, providing real-time coding assistance and intelligent developer tools.",
    techStack: ["React.js", "Node.js", "Express.js", "TailwindCSS", "OpenRouter AI API"],
    image: "/assets/images/projects/Decodex.png",
    link: "https://github.com/Saadsyed07/DeCodeX",
    github: "https://github.com/Saadsyed07/DeCodeX",
    category: "Full Stack",
    featured: true
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information, designed with responsive styling and modern UI components.",
    techStack: ["HTML5", "CSS3", "JavaScript", "jQuery"],
    image: "/assets/images/projects/portfoliowebsite.png",
    link: "https://my-portfolio-alpha-eosin-43.vercel.app/",
    github: "https://github.com/Arsk86shaikh/MyPortfolio/tree/main",
    category: "Frontend",
    featured: true
  },
  {
    id: 4,
    title: "AI Voice Agent",
    description:
      "An intelligent voice assistant built using Murf AI API with Python backend and Pandas for data handling. The frontend is created with HTML, CSS, and JavaScript for interactive user experience.",
    techStack: ["Python", "Pandas", "HTML5", "CSS3", "JavaScript", "Murf AI API"],
    image: "/assets/images/projects/aiagent.png",
    link: "https://github.com/Arsk86shaikh/Ai-Voice-Agent",
    github: "https://github.com/Arsk86shaikh/Ai-Voice-Agent",
    category: "AI/ML",
    featured: false
  },
  {
    id: 5,
    title: "E-Commerce Web",
    description:
      "A responsive e-commerce web application built with Node.js, Express.js, and EJS, featuring product browsing, add-to-cart, and purchase functionality with a modern UI design.",
    techStack: ["EJS", "CSS3", "JavaScript", "JSON", "Express.js", "Node.js"],
    image: "/assets/images/projects/ecommerce.jpg",
    link: "https://github.com/Arsk86shaikh/E-commerce_web",
    github: "https://github.com/Arsk86shaikh/E-commerce_web",
    category: "Frontend + Backend ",
    featured: false
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information, designed with responsive styling and modern UI components.",
    techStack: ["EJS", "TailwindCSS", "CSS3", "JavaScript (ES6)", "Node.js"],
    image: "/assets/images/projects/portfolio.jpg",
    link: "https://github.com/Arsk86shaikh/portfolio-website",
    github: "https://github.com/Arsk86shaikh/portfolio-website",
    category: "Frontend + Backend ",
    featured: false
  },
  {
    id: 7,
    title: "Blog Platform",
    description:
      "A dynamic blogging web application allowing users to create, edit, and manage posts with EJS templates and Express routing on the backend.",
    techStack: ["EJS", "JavaScript", "Node.js", "Express.js"],
    image: "/assets/images/projects/bloggram.png",
    link: "https://github.com/Arsk86shaikh/blog",
    github: "https://github.com/Arsk86shaikh/blog",
    category: "Frontend + Backend ",
    featured: false
  },
  {
    id: 8,
    title: "Fanta Product Showcase",
    description:
      "An interactive single-page website for showcasing Fanta products, featuring smooth animations, dynamic data loading using JSON, and a colorful modern UI.",
    techStack: ["HTML5", "CSS3", "JavaScript", "JSON"],
    image: "/assets/images/projects/fanta.png",
    link: "https://fanta-product-sale-website.vercel.app/",
    github: "https://fanta-product-sale-website.vercel.app/",
    category: "Frontend",
    featured: false
  }
];


  const categories = ['All', 'Full Stack','Frontend + Backend ', 'Frontend', 'AI/ML'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  const getImagePlaceholder = (title) => {
    return `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="600" height="400" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23f59e0b" font-size="24" font-family="Arial">${encodeURIComponent(title)}</text></svg>`;
  };

  return (
    <section id="projects" className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative mb-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              My <span className="text-amber-500">Projects</span>
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-amber-500 rounded-full"></div>
          </div>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work and personal projects showcasing full-stack development skills
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/50 scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-amber-500 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 bg-amber-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-56 overflow-hidden bg-gray-800">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = getImagePlaceholder(project.title);
                  }}
                />

                {/* Overlay on Hover */}
                <div className={`absolute inset-0 bg-black/80 flex items-center justify-center gap-4 transition-opacity duration-300 z-20 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-500 hover:bg-amber-600 text-black p-3 rounded-full transition-all hover:scale-110"
                    aria-label="View Project"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-all hover:scale-110"
                    aria-label="View GitHub"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold rounded-full mb-3">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700 hover:border-amber-500 hover:text-amber-500 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-3 py-1 bg-gray-800 text-amber-500 text-xs rounded-full border border-amber-500/30">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-amber-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Project Count */}
        <div className="text-center mt-12">
          <p className="text-gray-400">
            Showing <span className="text-amber-500 font-semibold">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'project' : 'projects'}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <a
            href="https://github.com/Arsk86shaikh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;