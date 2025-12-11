import React, { useState, useEffect } from "react";

// Color constants
const ACCENT_ORANGE = "bg-amber-500";
const ACCENT_ORANGE_HOVER = "hover:bg-amber-600";
const WHITE_HEADING = "text-white";
const FULL_BLEED_BG = "bg-black";

export default function ContactSection() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className={`${FULL_BLEED_BG} w-full py-16 sm:py-20 md:py-24 relative overflow-hidden`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        {/* Heading */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${WHITE_HEADING}`}>
              Get in <span className="text-amber-500">Touch</span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Container */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Image Box */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              {/* Animated Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-transparent rounded-2xl blur-2xl animate-pulse-slow"></div>
              
              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black p-1 rounded-2xl">
                <div className="bg-black rounded-2xl p-6 sm:p-8">
                  <svg className="w-full h-auto animate-float" viewBox="0 0 400 400" fill="none">
                    {/* Person with headset */}
                    <circle cx="200" cy="120" r="60" fill="#f59e0b"/>
                    <rect x="160" y="180" width="80" height="120" rx="10" fill="#f59e0b"/>
                    
                    {/* Headset */}
                    <path d="M140 100 Q140 80 160 80 L240 80 Q260 80 260 100" stroke="#fff" strokeWidth="8" fill="none"/>
                    <circle cx="140" cy="110" r="15" fill="#fff"/>
                    <circle cx="260" cy="110" r="15" fill="#fff"/>
                    
                    {/* Laptop */}
                    <rect x="80" y="280" width="240" height="160" rx="8" fill="#1f2937" stroke="#f59e0b" strokeWidth="4"/>
                    <rect x="100" y="300" width="200" height="120" fill="#0a0a0a"/>
                    
                    {/* Communication waves */}
                    <circle cx="50" cy="200" r="20" stroke="#f59e0b" strokeWidth="3" fill="none" opacity="0.6">
                      <animate attributeName="r" values="20;35;20" dur="2s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="350" cy="200" r="20" stroke="#f59e0b" strokeWidth="3" fill="none" opacity="0.6">
                      <animate attributeName="r" values="20;35;20" dur="2s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite"/>
                    </circle>
                  </svg>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 bg-amber-500 rounded-full p-3 animate-bounce-slow shadow-lg">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-orange-500 rounded-full p-3 animate-float shadow-lg">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full max-w-2xl mx-auto lg:mx-0 order-1 lg:order-2">
            <div className="space-y-4 sm:space-y-5">
              {/* Name Field */}
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full bg-gray-900/50 border-2 border-gray-800 rounded-lg px-12 py-3 sm:py-4 text-white placeholder-gray-500 
                    focus:border-amber-500 focus:outline-none transition-all duration-300 focus:bg-gray-900/70"
                />
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-amber-500 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>

              {/* Email Field */}
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full bg-gray-900/50 border-2 border-gray-800 rounded-lg px-12 py-3 sm:py-4 text-white placeholder-gray-500 
                    focus:border-amber-500 focus:outline-none transition-all duration-300 focus:bg-gray-900/70"
                />
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-amber-500 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>

              {/* Phone Field */}
              <div className="relative group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone (Optional)"
                  className="w-full bg-gray-900/50 border-2 border-gray-800 rounded-lg px-12 py-3 sm:py-4 text-white placeholder-gray-500 
                    focus:border-amber-500 focus:outline-none transition-all duration-300 focus:bg-gray-900/70"
                />
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-amber-500 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>

              {/* Message Field */}
              <div className="relative group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  rows={5}
                  className="w-full bg-gray-900/50 border-2 border-gray-800 rounded-lg px-12 py-3 sm:py-4 text-white placeholder-gray-500 
                    focus:border-amber-500 focus:outline-none transition-all duration-300 focus:bg-gray-900/70 resize-none"
                ></textarea>
                <svg className="absolute left-4 top-4 w-5 h-5 text-gray-500 group-focus-within:text-amber-500 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                </svg>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full ${ACCENT_ORANGE} ${ACCENT_ORANGE_HOVER} text-black font-bold py-3 sm:py-4 px-6 rounded-lg
                  transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50 hover:scale-105
                  flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Submit
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                    </svg>
                  </>
                )}
              </button>

              {/* Success Message */}
              {submitStatus === "success" && (
                <div className="bg-green-500/10 border-2 border-green-500 rounded-lg p-4 text-green-500 text-center font-medium animate-fade-in">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}