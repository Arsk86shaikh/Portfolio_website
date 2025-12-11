import React, { useEffect, useState } from "react";

// Color constants
const ACCENT_ORANGE = "bg-amber-500";
const ACCENT_ORANGE_HOVER = "hover:bg-amber-600";
const WHITE_HEADING = "text-white";
const FULL_BLEED_BG = "bg-black";

// Move hero data outside the component so references are stable across renders
const HERO_DATA = {
  name: "Raheman",
  greeting: "Hi Folks, It's",
  roles: [
    "Frontend Developer",
    "Backend Developer",
    "Software Developer",
    "Technical Team Lead DDSC",
    "Full Stack Enthusiast",
  ],
  about: {
    position: "Technical Team Lead",
    organization: "DCODE Club (DDSC)",
    organizationLink: "https://www.dcode.club/",
    focus: "full stack development, DSA, web projects, and peer programming",
    values: "clean design, collaboration, and continuous learning"
  },
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/Arsk86shaikh",
      icon: "github",
      bgColor: "bg-gray-800",
      hoverColor: "hover:bg-gray-700",
      textColor: "text-white"
    },
    {
      name: "Email",
      url: "mailto:ar4868904@gmail.com",
      icon: "email",
      bgColor: "bg-amber-500",
      hoverColor: "hover:bg-amber-600",
      textColor: "text-white"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ab-raheman-shaikh-66634025b/",
      icon: "linkedin",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      textColor: "text-white"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/Vq4SMwEwak/",
      icon: "leetcode",
      bgColor: "bg-yellow-500",
      hoverColor: "hover:bg-yellow-600",
      textColor: "text-white"
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/ar4868904",
      icon: "hackerrank",
      bgColor: "bg-green-600",
      hoverColor: "hover:bg-green-700",
      textColor: "text-white"
    }
  ],
  actions: [
    { text: "Contact Me", href: "#contact", variant: "primary" },
    { text: "View Projects", href: "#projacts", variant: "secondary" },
    { text: "Download Resume", href: "/Resume.pdf", variant: "outline", download: true }
  ]
};

// Typewriter hook
function useTypewriter(roles, speed = 100, pause = 1500) {
  const [displayed, setDisplayed] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentRole = roles[roleIdx];

    if (!isDeleting && charIdx < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayed((prev) => prev + currentRole[charIdx]);
        setCharIdx((prev) => prev + 1);
      }, speed);
    } else if (isDeleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayed((prev) => prev.slice(0, -1));
        setCharIdx((prev) => prev - 1);
      }, speed);
    } else if (!isDeleting && charIdx === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIdx === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIdx((prev) => (prev + 1) % roles.length);
      }, 500);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, roleIdx, roles, speed, pause]);

  return displayed;
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  const heroData = HERO_DATA; // stable reference
  const typedRole = useTypewriter(heroData.roles, 75, 1200);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderIcon = (iconName) => {
    const iconClass = "w-5 h-5 sm:w-6 sm:h-6";
    switch (iconName) {
      case "github":
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      case "email":
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
          </svg>
        );
      case "linkedin":
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case "leetcode":
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
          </svg>
        );
      case "hackerrank":
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701c.141 0 .254-.115.254-.258 0-.094-.049-.176-.123-.221L9.223 4.92c-.049-.063-.141-.109-.226-.109-.084 0-.16.045-.207.107L7.227 6.43c-.074.045-.123.127-.123.221 0 .143.113.258.256.258h.699v4.223c0 .142.115.258.255.258h4.629V14.25h-4.37v-.703c0-.143-.115-.258-.256-.258-.092 0-.174.049-.221.123L6.424 15.16c-.064.049-.109.141-.109.227 0 .084.047.16.107.207l1.51 1.564c.047.074.129.123.223.123.143 0 .258-.115.258-.256v-.701h4.629c.141 0 .258-.115.258-.258v-9.008c0-.143-.117-.258-.258-.258h-.748zm3.035 6.191c-.143 0-.256.115-.256.258v.701h-4.629V9.727h4.371v.703c0 .143.115.258.258.258.092 0 .174-.049.221-.123l1.672-1.748c.064-.049.109-.143.109-.227 0-.084-.045-.16-.105-.207l-1.512-1.564c-.047-.074-.129-.123-.223-.123-.143 0-.258.115-.258.256v.701h-4.629c-.142 0-.258.115-.258.258v9.008c0 .143.116.258.258.258h.748c.141 0 .258-.115.258-.258v-3.875h4.074v3.875h-.699c-.143 0-.256.115-.256.258 0 .092.049.174.123.221l1.672 1.508c.049.064.143.109.227.109s.16-.045.207-.107l1.563-1.51c.074-.047.123-.129.123-.223 0-.143-.115-.258-.258-.258h-.699V13.25c0-.143-.115-.258-.258-.258H17.33z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className={`${FULL_BLEED_BG} w-full pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-12 flex justify-center items-center transition-colors duration-300 min-h-screen relative overflow-hidden`}>
      {/* Animated Background Elements - Hidden on small devices for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-amber-500/10 rounded-full blur-3xl hero-animate-float"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-orange-500/10 rounded-full blur-3xl hero-animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-6 md:px-10 gap-8 sm:gap-10 lg:gap-12 relative z-10">
        {/* LEFT SECTION: Text and Socials */}
        <div className={`w-full lg:w-1/2 flex flex-col items-center lg:items-start transition-all duration-700 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          {/* Greeting */}
          <div className="mb-3 sm:mb-4 text-center lg:text-left w-full">
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">{heroData.greeting}</p>
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold ${WHITE_HEADING} flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3`}>
              {heroData.name}
              <span className="hero-animate-wave inline-block animate-none text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                👋
              </span>
            </h1>
          </div>

          {/* Typing Animation */}
          <div className="mb-6 sm:mb-8 min-h-[2.5rem] sm:min-h-[3rem] text-center lg:text-left w-full">
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-amber-500 font-mono break-words">
              {typedRole}
              <span className="hero-animate-blink text-amber-500">|</span>
            </span>
          </div>

          {/* Description */}
          <div className="mb-6 sm:mb-8 w-full">
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed text-center lg:text-left max-w-2xl">
              {heroData.about.position} at{" "}
              <a
                href={heroData.about.organizationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 font-semibold hover:text-amber-500 transition-colors underline decoration-amber-500/30 hover:decoration-amber-500"
              >
                {heroData.about.organization}
              </a>
              , focused on {heroData.about.focus}. Passionate about {heroData.about.values}.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 justify-center lg:justify-start">
            {heroData.socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className={`${social.bgColor} ${social.hoverColor} ${social.textColor} rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-amber-500/20 group`}
                target={social.url.startsWith('http') ? "_blank" : undefined}
                rel={social.url.startsWith('http') ? "noopener noreferrer" : undefined}
                aria-label={social.name}
              >
                {renderIcon(social.icon)}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start w-full">
            {heroData.actions.map((action, index) => (
              <a
                key={index}
                href={action.href}
                className={`
                  ${action.variant === 'outline' 
                    ? 'bg-transparent border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black' 
                    : `${ACCENT_ORANGE} ${ACCENT_ORANGE_HOVER} text-black`
                  }
                  px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 
                  hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30
                  flex items-center justify-center gap-2 group text-sm sm:text-base
                  w-full sm:w-auto
                `}
                download={action.download}
              >
                <span className="whitespace-nowrap">{action.text}</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION: 3D Animated Illustration */}
        <div className={`w-full lg:w-1/2 flex justify-center items-center relative transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          {/* Animated Gradient Background - Subtle on mobile */}
          <div className="absolute inset-0 z-0 rounded-full blur-2xl sm:blur-3xl bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-pink-500/5 sm:from-amber-500/30 sm:via-orange-500/20 sm:to-pink-500/10 hero-animate-pulse-slow"></div>
          
          {/* Rotating Border - Responsive sizing */}
          <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hero-animate-spin-slow opacity-50"></div>
            <div className="absolute inset-1 rounded-full bg-black flex items-center justify-center overflow-hidden">
              {/* Developer Illustration */}
              <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-6">
                <svg className="w-full h-full max-w-[250px] max-h-[250px] sm:max-w-[300px] sm:max-h-[300px] hero-animate-float" viewBox="0 0 500 500" fill="none">
                  {/* Laptop */}
                  <rect x="100" y="200" width="300" height="200" rx="10" fill="#1f2937" stroke="#f59e0b" strokeWidth="3"/>
                  <rect x="120" y="220" width="260" height="140" fill="#0a0a0a"/>
                  {/* Code Lines */}
                  <line x1="140" y1="240" x2="220" y2="240" stroke="#f59e0b" strokeWidth="3"/>
                  <line x1="140" y1="260" x2="280" y2="260" stroke="#f59e0b" strokeWidth="3"/>
                  <line x1="140" y1="280" x2="200" y2="280" stroke="#f59e0b" strokeWidth="3"/>
                  <line x1="140" y1="300" x2="260" y2="300" stroke="#f59e0b" strokeWidth="3"/>
                  {/* Person */}
                  <circle cx="250" cy="120" r="40" fill="#f59e0b"/>
                  <rect x="220" y="160" width="60" height="80" rx="5" fill="#f59e0b"/>
                  {/* Coffee Cup */}
                  <rect x="340" y="350" width="40" height="50" rx="5" fill="#f59e0b"/>
                  <ellipse cx="360" cy="350" rx="20" ry="5" fill="#f59e0b"/>
                </svg>
              </div>
            </div>
            
            {/* Floating Icons - Hidden on very small screens */}
            <div className="hidden sm:block absolute top-5 md:top-10 -right-5 md:-right-10 bg-amber-500 rounded-full p-2 md:p-3 hero-animate-bounce-slow shadow-lg">
              <svg className="w-4 h-4 md:w-6 md:h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="hidden sm:block absolute -bottom-3 md:-bottom-5 -left-5 md:-left-10 bg-orange-500 rounded-full p-2 md:p-3 hero-animate-float shadow-lg">
              <svg className="w-4 h-4 md:w-6 md:h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes hero-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes hero-wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }
        @keyframes hero-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes hero-float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes hero-spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes hero-bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes hero-pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        
        .hero-animate-blink {
          animation: hero-blink 1s steps(2, start) infinite;
        }
        .hero-animate-wave {
          animation: hero-wave 2s ease-in-out infinite;
          transform-origin: 70% 70%;
        }
        .hero-animate-float {
          animation: hero-float 6s ease-in-out infinite;
        }
        .hero-animate-float-delayed {
          animation: hero-float-delayed 8s ease-in-out infinite;
        }
        .hero-animate-spin-slow {
          animation: hero-spin-slow 20s linear infinite;
        }
        .hero-animate-bounce-slow {
          animation: hero-bounce-slow 3s ease-in-out infinite;
        }
        .hero-animate-pulse-slow {
          animation: hero-pulse-slow 4s ease-in-out infinite;
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .hero-animate-blink,
          .hero-animate-wave,
          .hero-animate-float,
          .hero-animate-float-delayed,
          .hero-animate-spin-slow,
          .hero-animate-bounce-slow,
          .hero-animate-pulse-slow {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}