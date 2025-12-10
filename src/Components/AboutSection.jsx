import React, { useState } from 'react';

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Structured data
  const aboutData = {
    name: "Ab Raheman Shaikh",
    role: "Full Stack Developer",
    email: "ar4868904@gmail.com",
    location: "Parbhani, India - 431401",
    profileImage: "/profile.jpg",
    education: {
      degree: "B.Tech in Computer Science and Engineering",
      university: "Dr. Babasaheb Ambedkar Technological University (BATU), Lonere",
      institute: "Shri Shivaji Institute Of Engineering and Management Studies, Parbhani"
    },
    expertise: {
      focus: "Full-Stack Development",
      stack: ["MongoDB", "Express.js", "React", "Node.js"],
      specialization: "MERN Stack"
    },
    leadership: {
      role: "Technical Team Lead at DCODE Club (DDSC)",
      skills: ["Full-Stack Development", "DSA", "Web Projects", "Peer Programming"],
      values: ["Clean Design", "Collaboration", "Continuous Learning"]
    }
  };

  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-black transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-2">
              About <span className="text-amber-500">Me</span>
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-amber-500 rounded-full"></div>
          </div>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Crafting innovative web solutions with passion and expertise
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Enhanced Left Side: Image with Advanced Animations */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <div className="relative group">
              {/* Animated Background Glow */}
              <div className="absolute -inset-4 bg-amber-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Main Image Container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-3xl bg-amber-500 animate-spin-slow"></div>
                <div className="absolute inset-1 rounded-3xl bg-gray-900 overflow-hidden">
                  <img
                    src={aboutData.profileImage}
                    alt={aboutData.name}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    } group-hover:scale-110`}
                    onLoad={() => setImageLoaded(true)}
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="%23f59e0b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="24" font-family="Arial">AR</text></svg>';
                    }}
                  />
                </div>
                
                {/* Floating Accent Elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-amber-500 rounded-full opacity-40 blur-xl animate-bounce-slow"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-500 rounded-full opacity-30 blur-xl animate-pulse"></div>
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-amber-500 hover:bg-amber-600 text-black px-6 py-2 rounded-full shadow-xl flex items-center gap-2 animate-fade-in-up transition-colors">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-semibold text-sm">Available for Projects</span>
              </div>
            </div>
          </div>

          {/* Enhanced Right Side: Content */}
          <div className="w-full lg:w-7/12">
            {/* Introduction Card */}
            <div className="bg-gray-900 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-6 border border-gray-800 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-12 bg-amber-500 rounded-full"></div>
                <div>
                  <p className="text-gray-400 text-sm font-medium">Hello, I'm</p>
                  <h3 className="text-3xl font-bold text-white">
                    {aboutData.name}
                  </h3>
                </div>
              </div>
              <p className="text-xl font-semibold text-amber-500 mb-2">{aboutData.role}</p>
            </div>

            {/* Education Card */}
            <div className="bg-gray-900 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-6 border border-gray-800 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
                <h4 className="text-xl font-bold text-white">Education</h4>
              </div>
              <p className="text-gray-300 leading-relaxed mb-2">
                <span className="font-semibold text-amber-500">{aboutData.education.degree}</span>
              </p>
              <p className="text-gray-400 mb-1">
                🎓 {aboutData.education.university}
              </p>
              <p className="text-gray-400">
                🏛️ {aboutData.education.institute}
              </p>
            </div>

            {/* Expertise Card */}
            <div className="bg-gray-900 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-6 border border-gray-800 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
                <h4 className="text-xl font-bold text-white">Technical Expertise</h4>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Passionate about enhancing my coding skills and developing innovative web applications. I specialize in building WebApps and Websites using the <span className="font-semibold text-amber-500">{aboutData.expertise.specialization}</span>.
              </p>
              <div className="flex flex-wrap gap-2">
                {aboutData.expertise.stack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full text-sm font-medium hover:bg-amber-500/20 hover:scale-105 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Leadership Card */}
            <div className="bg-gray-900 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-6 border border-gray-800 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
                <h4 className="text-xl font-bold text-white">Leadership & Values</h4>
              </div>
              <p className="text-gray-300 leading-relaxed mb-3">
                <span className="font-semibold text-amber-500">{aboutData.leadership.role}</span>
              </p>
              <p className="text-gray-400">
                Focused on {aboutData.leadership.skills.join(", ")}. Passionate about {aboutData.leadership.values.join(", ")}.
              </p>
            </div>

            {/* Contact Info Card */}
            <div className="bg-amber-500 hover:bg-amber-600 rounded-2xl p-8 shadow-xl text-black transition-colors duration-300">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                Get in Touch
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <span className="font-medium">{aboutData.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-medium">{aboutData.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translate(-50%, 20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default About;