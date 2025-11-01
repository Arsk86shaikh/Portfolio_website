import React, { useEffect, useState } from "react";
import { FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import Lottie from "lottie-react";
import devAnimation from "./dev-lottie.json"; // Ensure this file exists!

const ACCENT_ORANGE = "bg-amber-500";
const ACCENT_ORANGE_HOVER = "hover:bg-amber-600";
const WHITE_HEADING = "text-white";
const FULL_BLEED_BG = "bg-black";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Software Developer",
  "Technical Team Lead DDSC Club",
  "Full Stack Enthusiast",
];

function useTypewriter(roles, speed = 100, pause = 1500) {
  const [displayed, setDisplayed] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!isDeleting && charIdx < roles[roleIdx].length) {
      timeout = setTimeout(() => {
        setDisplayed((prev) => prev + roles[roleIdx][charIdx]);
        setCharIdx((prev) => prev + 1);
      }, speed);
    } else if (isDeleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayed((prev) => prev.slice(0, -1));
        setCharIdx((prev) => prev - 1);
      }, speed);
    } else if (!isDeleting && charIdx === roles[roleIdx].length) {
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
  const typedRole = useTypewriter(roles, 75, 1200);

  return (
    <section className={`${FULL_BLEED_BG} w-full pt-24 pb-12 flex justify-center items-center transition-colors duration-300 min-h-screen`}>
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-10 gap-8">
        {/* LEFT SECTION: Text and Socials */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <div className="mb-2 text-left w-full">
            <h1 className={`text-4xl md:text-5xl font-bold ${WHITE_HEADING} flex items-center gap-2 font-[Dancing Script,cursive]`}>
              Hi Folks, It's Raheman
              <span className="wave-emoji inline-block">
                <img
                  alt="👋"
                  draggable="false"
                  src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png"
                  className="h-8 w-8 inline"
                  style={{ verticalAlign: "-0.15em" }}
                />
              </span>
            </h1>
          </div>
          {/* Typing animation for roles */}
          <div className="mb-6 h-10 text-left w-full">
            <span className="text-2xl md:text-3xl font-semibold text-amber-500 font-mono transition">
              {typedRole}
              <span className="animate-blink">|</span>
            </span>
          </div>
          <div className="mb-6 w-full">
            <p className="text-lg text-gray-200 leading-relaxed">
              Technical Team Lead at{" "}
              <a
                href="https://www.dcode.club/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 underline font-semibold hover:text-amber-500 transition"
              >
                DCODE Club (DDSC)
              </a>
              , focused on full stack development, DSA, web projects, and peer programming.
              Passionate about clean design, collaboration, and continuous learning.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-6 w-full">
            {/* Social media icons */}
            <div className="flex flex-wrap gap-3 mb-4">
              <a
                href="https://github.com/Arsk86shaikh"
                className="icon-button github bg-gray-900 hover:bg-gray-700 text-white rounded-full p-2 transition"
                target="_blank"
                aria-label="GitHub"
                rel="noopener noreferrer"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href="mailto:ar4868904@gmail.com"
                className="icon-button email bg-amber-50 hover:bg-amber-100 text-amber-600 rounded-full p-2 transition"
                aria-label="Email"
              >
                <FaEnvelope className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ab-raheman-shaikh-66634025b/"
                className="icon-button linkedin bg-amber-400 hover:bg-amber-500 text-white rounded-full p-2 transition"
                target="_blank"
                aria-label="LinkedIn"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="h-6 w-6" />
              </a>
              <a
                href="https://leetcode.com/u/Vq4SMwEwak/"
                className="icon-button leetcode bg-amber-100 hover:bg-amber-200 text-yellow-700 rounded-full p-2 transition"
                target="_blank"
                aria-label="LeetCode"
                rel="noopener noreferrer"
              >
                <SiLeetcode className="h-6 w-6" />
              </a>
              <a
                href="https://www.hackerrank.com/profile/ar4868904"
                className="icon-button hackerrank bg-amber-50 hover:bg-amber-100 text-green-700 rounded-full p-2 transition"
                target="_blank"
                aria-label="hackerrank"
                rel="noopener noreferrer"
              >
                <SiHackerrank className="h-6 w-6" />
              </a>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 justify-start w-full">
              <a
                href="#ContaceMe"
                className={`btn btn-primary ${ACCENT_ORANGE} text-white px-6 py-2 rounded ${ACCENT_ORANGE_HOVER} transition font-semibold`}
              >
                Contact Me
              </a>
              <a
                href="#opensource"
                className={`btn btn-secondary ${ACCENT_ORANGE} text-white px-6 py-2 rounded ${ACCENT_ORANGE_HOVER} transition font-semibold`}
              >
                View My Projects
              </a>
              <a
                href="/Resume.pdf"
                className={`btn btn-success ${ACCENT_ORANGE} text-white px-6 py-2 rounded ${ACCENT_ORANGE_HOVER} transition font-semibold`}
                download
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
        {/* RIGHT SECTION: Lottie animation */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          {/* Animated gradient background behind Lottie */}
          <div className="absolute inset-0 z-0 rounded-3xl blur-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-pink-500 opacity-40"></div>
          <Lottie
            animationData={devAnimation}
            loop={true}
            className="w-[340px] h-[340px] md:w-[400px] md:h-[400px] z-10"
            style={{ maxWidth: "100%" }}
          />
        </div>
      </div>
      {/* Typing animation blink keyframes */}
      <style>
        {`
          .animate-blink {
            animation: blink 1s steps(2, start) infinite;
          }
          @keyframes blink {
            to {
              visibility: hidden;
            }
          }
        `}
      </style>
    </section>
  );
}