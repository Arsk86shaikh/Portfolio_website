import React from 'react';

const Education = () => {
const educationData = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Shri Shivaji Institute of Engineering and Management Studies, Parbhani",
    university: "Dr.BATU Lonere",
    duration: "2022 - 2026",
    status: "Pursuing (Final Year)",
    score: "7.14",
    scoreLabel: "Total 1st-6th Sem. CGPA",
    image: new URL("../assets/images/educat/college.jpg", import.meta.url).href,
    icon: "fas fa-graduation-cap"
  },
  {
    id: 2,
    degree: "HSC Science | Informatics Practices",
    institution: "Dnyanopasak College, Bori Parbhani",
    university: "MSBSHSE",
    duration: "2 Years",
    status: "Completed: 2022",
    score: "63%",
    scoreLabel: "Percentage",
    image: new URL("../assets/images/educat/Science.jpg", import.meta.url).href,
    icon: "fas fa-book"
  },
  {
    id: 3,
    degree: "SSC | General Education",
    institution: "Mahatma Fule Vidyalaya, Parbhani",
    university: "MSBSHSE",
    duration: "10 Years",
    status: "Completed: 2020",
    score: "82.40%",
    scoreLabel: "Percentage",
    image: new URL("../assets/images/educat/school.jpg", import.meta.url).href,
    icon: "fas fa-school"
  }
];


  const quote = "Education is not the learning of facts, but the training of the mind to think.";

  return (
    <section className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8" id="education">
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4">
            <i className="fas fa-graduation-cap text-amber-500 mr-3"></i>
            My <span className="text-amber-500">Education</span>
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-400 italic text-lg max-w-3xl mx-auto">
            {quote}
          </p>
        </div>

        {/* Education Cards */}
        <div className="mt-12 space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/20"
            >
              <div className="grid md:grid-cols-5 gap-6 p-6">
                {/* Image Section */}
                <div className="md:col-span-2 relative overflow-hidden rounded-xl">
                  <div className="aspect-w-16 aspect-h-12 bg-gray-800">
                    <img
                      src={edu.image}
                      alt={edu.degree}
                      draggable="false"
                      className="w-full h-64 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="400" height="300" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23f59e0b" font-size="20" font-family="Arial">Education Image</text></svg>';
                      }}
                    />
                  </div>
                  {/* Overlay Icon */}
                  <div className="absolute top-4 right-4 bg-amber-500 text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    <i className={`${edu.icon} text-xl`}></i>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:col-span-3 flex flex-col justify-between">
                  <div>
                    {/* Degree Title */}
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-amber-500 transition-colors duration-300">
                      {edu.degree}
                    </h3>

                    {/* Institution Details */}
                    <div className="space-y-2 mb-4">
                      <p className="text-gray-300 flex items-start">
                        <i className="fas fa-university text-amber-500 mr-2 mt-1 flex-shrink-0"></i>
                        <span>{edu.institution}</span>
                      </p>
                      {edu.university && (
                        <p className="text-gray-400 flex items-center ml-6">
                          <i className="fas fa-building text-amber-500 mr-2"></i>
                          <span>University: {edu.university}</span>
                        </p>
                      )}
                    </div>

                    {/* Duration and Status */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="inline-flex items-center px-4 py-2 bg-gray-800 rounded-full text-sm">
                        <i className="fas fa-calendar-alt text-amber-500 mr-2"></i>
                        {edu.duration}
                      </span>
                      {edu.status && (
                        <span className="inline-flex items-center px-4 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-full text-sm font-medium">
                          <i className="fas fa-circle-notch fa-spin mr-2"></i>
                          {edu.status}
                        </span>
                      )}
                    </div>

                    {/* Score */}
                    <div className="bg-gray-800 rounded-lg p-4 inline-block">
                      <p className="text-gray-400 text-sm mb-1">{edu.scoreLabel}:</p>
                      <p className="text-3xl font-bold text-amber-500">{edu.score}</p>
                    </div>
                  </div>

                  {/* Progress Bar (decorative) */}
                  <div className="mt-4">
                    <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-1000 group-hover:w-full"
                        style={{ width: index === 0 ? '90%' : '100%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Connector (decorative) */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-amber-500/20 to-transparent -z-10"></div>
      </div>
    </section>
  );
};

export default Education;