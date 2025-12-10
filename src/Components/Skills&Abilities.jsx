import React, { useState } from 'react';

const SkillsAbilities = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const skills = [
    { name: "ReactJS", icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png", category: "Frontend" },
    { name: "TailwindCSS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png", category: "Frontend" },
    { name: "Bootstrap", icon: "https://img.icons8.com/color/48/000000/bootstrap.png", category: "Frontend" },
    { name: "HTML5", icon: "https://img.icons8.com/color/48/000000/html-5--v1.png", category: "Frontend" },
    { name: "CSS3", icon: "https://img.icons8.com/color/48/000000/css3.png", category: "Frontend" },
    { name: "jQuery", icon: "https://img.icons8.com/ios-filled/48/1169ae/jquery.png", category: "Frontend" },
    { name: "EJS", icon: "fas fa-file-code", category: "Frontend" },
    { name: "Webpack", icon: "https://img.icons8.com/color/48/000000/webpack.png", category: "Frontend" },
    { name: "ExpressJS", icon: "https://img.icons8.com/fluency/48/000000/node-js.png", category: "Backend" },
    { name: "NodeJS", icon: "https://img.icons8.com/color/48/000000/nodejs.png", category: "Backend" },
    { name: "JS6+", icon: "https://img.icons8.com/color/48/000000/javascript--v1.png", category: "Backend" },
    { name: "npm", icon: "fab fa-npm", category: "Backend" },
    { name: "TypeScript", icon: "https://img.icons8.com/color/48/000000/typescript.png", category: "Backend" },
    { name: "Postman", icon: "https://img.icons8.com/dusk/48/000000/postman-api.png", category: "Backend" },
    {  name: "Supabase",icon: "https://avatars.githubusercontent.com/u/54469796?s=200&v=4",category: "Database"},
    { name: "MySQL", icon: "https://img.icons8.com/color/48/000000/mysql-logo.png", category: "Database" },
    { name: "PostgreSQL", icon: "https://img.icons8.com/color/48/000000/postgreesql.png", category: "Database" },
    { name: "Netlify", icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png", category: "OtherTools" },
    { name: "Vercel", icon: "fas fa-cloud", category: "OtherTools" },
    { name: "Git VCS", icon: "https://img.icons8.com/color/48/000000/git.png", category: "OtherTools" },
    { name: "GitHub", icon: "https://img.icons8.com/glyph-neue/48/ffffff/github.png", category: "OtherTools" },
    { name: "JavaScript", icon: "https://img.icons8.com/color/48/000000/javascript--v1.png", category: "Programming" },
    { name: "Java", icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png", category: "Programming" },
    { name: "PHP", icon: "https://img.icons8.com/offices/48/000000/php-logo.png", category: "Programming" },
    { name: "Python", icon: "https://img.icons8.com/color/48/000000/python--v1.png", category: "Programming" },
    { name: "C++", icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png", category: "Programming" }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Programming', 'OtherTools'];

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getCategoryDisplayName = (category) => {
    if (category === 'OtherTools') return 'Other Tools';
    return category;
  };

  const renderIcon = (skill) => {
    if (skill.icon.startsWith('fa')) {
      return (
        <i className={`${skill.icon} text-4xl ${skill.name === 'npm' ? 'text-red-600' : 'text-amber-500'}`}></i>
      );
    }
    return (
      <img 
        src={skill.icon} 
        alt={skill.name}
        className="w-12 h-12 object-contain"
      />
    );
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Skills & <span className="text-amber-500">Abilities</span>
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/50 scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {getCategoryDisplayName(category)}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/20 border border-gray-800 hover:border-amber-500/50"
            >
              {/* Icon */}
              <div className="transition-transform duration-300 group-hover:scale-110">
                {renderIcon(skill)}
              </div>

              {/* Skill Name */}
              <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 text-center">
                {skill.name}
              </p>

              {/* Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-amber-500 group-hover:w-full transition-all duration-300 rounded-b-xl"></div>
            </div>
          ))}
        </div>

        {/* Skills Count */}
        <div className="text-center mt-12">
          <p className="text-gray-400">
            Showing <span className="text-amber-500 font-semibold">{filteredSkills.length}</span> {filteredSkills.length === 1 ? 'skill' : 'skills'}
            {activeCategory !== 'All' && ` in ${getCategoryDisplayName(activeCategory)}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsAbilities;