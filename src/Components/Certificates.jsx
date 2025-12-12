import React, { useState } from 'react';

const Certificates = () => {
  const [hoveredCert, setHoveredCert] = useState(null);

  // Certificates data structured in JSON
const certificatesData = [
  {
    id: 1,
    image: "https://img.icons8.com/fluency/96/certificate.png",  // HD & consistent
    title: "Full Stack Web Development",
    organization: "Government Registered Institute",
    duration: "March 1 2024 - Sep 1 2024",
    durationMonths: "6 Months",
    description:
      "Comprehensive full-stack web development program covering modern web technologies and best practices.",
    skills: {
      frontend: ["HTML5", "CSS3", "JavaScript ES6+", "jQuery", "Bootstrap", "React.js"],
      backend: ["Node.js", "Express.js", "Middleware"],
      database: ["PostgreSQL", "SQL"],
      tools: ["Git", "GitHub", "Postman", "npm", "RESTful API"]
    },
    buttons: [{ text: "View Certificate", link: "/fullstack.pdf" }],
    featured: true
  },

  {
    id: 2,
    image: "https://img.icons8.com/color/96/java-coffee-cup-logo.png", // correct HD Java icon
    title: "Java Industrial Training",
    organization: "CCA-Techno Private Limited",
    duration: "May 8 2025 - June 8 2025",
    durationMonths: "4 Weeks",
    description:
      "Intensive industrial training program focused on Java programming fundamentals and enterprise application development.",
    skills: {
      programming: ["Core Java", "Object-Oriented Programming", "Java Collections", "Exception Handling", "Multi-threading"]
    },
    buttons: [{ text: "View Certificate", link: "/java.jpg" }],
    featured: true
  },

  {
    id: 3,
    image: "https://seeklogo.com/images/I/internshala-logo-5F4F5C0F38-seeklogo.com.png", // clean transparent Internshala logo
    title: "Programming With Python",
    organization: "Internshala Trainings",
    duration: "March 8 2024 - May 8 2024",
    durationMonths: "6 Weeks",
    description:
      "Completed a professional course in Python programming, mastering core concepts and advanced techniques for software development.",
    skills: {
      programming: ["Python Fundamentals", "Data Structures", "Object-Oriented Programming", "File Handling"]
    },
    buttons: [
      { text: "Certification", link: "/training.pdf" },
      { text: "Award Certificate", link: "/awardstraining.pdf" }
    ],
    featured: false
  },

  {
    id: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", // official AWS HQ logo
    title: "Aspire AWS Internship",
    organization: "Aspire For Her & AWS",
    duration: "3 days",
    description:
      "Completed an internship with Aspire For Her and AWS, focusing on empowering women through innovative cloud solutions.",
    skills: {
      cloud: ["AWS Cloud Services", "Cloud Computing", "Cloud Solutions"]
    },
    buttons: [{ text: "Certification", link: "/certificate.pdf" }],
    featured: false
  },

  {
    id: 5,
    image: "https://nxtwave.imgix.net/Images/Logo/NxtWave-Logo-Light.png", // official HD NxtWave logo
    title: "NxtWave Programming Certification",
    organization: "NxtWave",
    duration: "2 days",
    description:
      "Successfully completed the NxtWave training program, mastering core programming concepts and practical application in real-world projects.",
    skills: {
      programming: ["Programming Fundamentals", "Problem Solving", "Project Development"]
    },
    buttons: [
      { text: "Certification", link: "/nxtwave.pdf" },
      { text: "Award", link: "/award.pdf" }
    ],
    featured: false
  }
];


  const getAllSkills = (skills) => {
    return Object.values(skills).flat();
  };

  return (
    <section id="certificates" className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative mb-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Certificates & <span className="text-amber-500">Training</span>
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-amber-500 rounded-full"></div>
          </div>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Professional certifications and training programs that showcase my commitment to continuous learning
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className={`group relative bg-gray-900 rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                cert.featured 
                  ? 'border-amber-500 shadow-lg shadow-amber-500/20' 
                  : 'border-gray-800 hover:border-amber-500 hover:shadow-amber-500/20'
              }`}
              onMouseEnter={() => setHoveredCert(cert.id)}
              onMouseLeave={() => setHoveredCert(null)}
            >
              {/* Featured Badge */}
              {cert.featured && (
                <div className="absolute top-4 right-4 z-20 bg-amber-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  Recent
                </div>
              )}

              <div className="flex flex-col md:flex-row">
                {/* Left Side - Image/Icon */}
                <div className="md:w-1/3 bg-gray-800 p-8 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-24 h-24 object-contain transition-transform duration-500 group-hover:scale-110 relative z-10"
                    onError={(e) => {
                      e.target.src = 'https://img.icons8.com/color/96/000000/certificate.png';
                    }}
                  />
                </div>

                {/* Right Side - Content */}
                <div className="md:w-2/3 p-6 flex flex-col justify-between">
                  {/* Header */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                      {cert.title}
                    </h3>
                    
                    {/* Organization & Duration */}
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="inline-flex items-center gap-1 text-sm text-gray-400">
                        <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                        </svg>
                        {cert.organization}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs rounded-full">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                        </svg>
                        {cert.duration}
                      </span>
                      {cert.durationMonths && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          {cert.durationMonths}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Skills Acquired</h4>
                      <div className="flex flex-wrap gap-2">
                        {getAllSkills(cert.skills).slice(0, 6).map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-700 hover:border-amber-500 hover:text-amber-500 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                        {getAllSkills(cert.skills).length > 6 && (
                          <span className="px-2 py-1 bg-gray-800 text-amber-500 text-xs rounded border border-amber-500/30">
                            +{getAllSkills(cert.skills).length - 6} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    {cert.buttons.map((button, index) => (
                      <a
                        key={index}
                        href={button.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {button.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-amber-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:border-amber-500 transition-all duration-300">
            <div className="text-4xl font-bold text-amber-500 mb-2">{certificatesData.length}</div>
            <div className="text-gray-400">Total Certifications</div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:border-amber-500 transition-all duration-300">
            <div className="text-4xl font-bold text-amber-500 mb-2">2023-2025</div>
            <div className="text-gray-400">Active Learning Year</div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:border-amber-500 transition-all duration-300">
            <div className="text-4xl font-bold text-amber-500 mb-2">10+</div>
            <div className="text-gray-400">Skills Mastered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;