import {
  // FaUserShield,
  FaChartLine,
  FaHandsHelping,
  FaGraduationCap,
  } from "react-icons/fa";
  import { MdSecurity } from "react-icons/md";
  
  const JoinTeam = () => {
  const benefits = [
  {
  icon: <FaChartLine className="text-3xl text-blue-600" />,
  title: "Career Growth",
  description:
  "Structured promotion paths and leadership training programs",
  },
  {
  icon: <FaGraduationCap className="text-3xl text-blue-600" />,
  title: "Advanced Training",
  description:
  "Quarterly certification courses at our state-of-the-art academy",
  },
  {
  icon: <MdSecurity className="text-3xl text-blue-600" />,
  title: "Cutting-Edge Gear",
  description: "Work with the latest security technology and equipment",
  },
  {
  icon: <FaHandsHelping className="text-3xl text-blue-600" />,
  title: "Team Culture",
  description:
  "Join a close-knit team that values integrity and excellence",
  },
  ];
  
  const openPositions = [
  {
  title: "Security Operations Specialist",
  type: "Full-time",
  location: "New York, NY",
  description:
  "Monitor security systems and coordinate rapid response protocols",
  },
  {
  title: "Executive Protection Agent",
  type: "Contract",
  location: "Multiple Cities",
  description:
  "Provide discreet security for high-profile clients and events",
  },
  {
  title: "Cybersecurity Analyst",
  type: "Full-time",
  location: "Remote",
  description:
  "Protect digital assets and infrastructure from emerging threats",
  },
  ];
  
  console.log(openPositions);

  const handleSubmit =()=>{
    const recepient = "oscarnewmangroup@gmail.com"
    const gmailUrl = `https://mail_google.com/mail/?view=cm&fs=1&to = ${recepient}`
    window.open(gmailUrl, "_blank")
  }
  return (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  {/* Hero Section */}
  <section className="text-center mb-20 bg-blue-50 rounded-xl p-12">
  <h1 className="text-4xl font-bold text-gray-900 mb-6">
  Protect With Purpose
  </h1>
  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  Join Oscar Newman Security and become part of an elite team redefining
  protection standards worldwide.
  </p>
  {/* <div className="mt-8">
  <button className="bg-blue-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-800 transition">
  View Open Positions
  </button>
  </div> */}
  </section>
  
  {/* Why Join Us */}
  <section className="mb-20">
  <h2 className="text-3xl font-bold text-center mb-12">
  Why Join Our Team
  </h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  {benefits.map((benefit, index) => (
  <div key={index} className="text-center p-6">
  <div className="flex justify-center mb-4">{benefit.icon}</div>
  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
  <p className="text-gray-600">{benefit.description}</p>
  </div>
  ))}
  </div>
  </section>
  
  {/* Current Openings */}
  <section className="mb-20">
  <h2 className="text-3xl font-bold text-center mb-12">
  Current Opportunities
  </h2>
  {/* <div className="space-y-6">
  {openPositions.map((position, index) => (
  <div
  key={index}
  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
  >
  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
  <div>
  <h3 className="text-xl font-semibold">{position.title}</h3>
  <div className="flex space-x-4 mt-2">
  <span className="text-gray-600">
  <MdWork className="inline mr-1" /> {position.type}
  </span>
  <span className="text-gray-600">
  <FaUserShield className="inline mr-1" />{" "}
  {position.location}
  </span>
  </div>
  </div>
  <button className="mt-4 md:mt-0 bg-blue-100 text-blue-700 font-medium py-2 px-6 rounded hover:bg-blue-200 transition">
  Apply Now
  </button>
  </div>
  <p className="mt-4 text-gray-700">{position.description}</p>
  </div>
  ))}
  </div> */}
  </section>
  
  {/* Training Program */}
  <section className="bg-gray-50 rounded-xl p-12 mb-20">
  <div className="flex flex-col md:flex-row items-center">
  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
  <h2 className="text-3xl font-bold mb-6">Elite Training Academy</h2>
  <p className="text-gray-700 mb-6">
  All recruits complete our intensive 6-week certification program
  covering:
  </p>
  <ul className="space-y-3">
  <li className="flex items-start">
  <span className="text-blue-600 mr-2">✓</span>
  <span>Advanced threat assessment techniques</span>
  </li>
  <li className="flex items-start">
  <span className="text-blue-600 mr-2">✓</span>
  <span>Defensive tactics and de-escalation</span>
  </li>
  <li className="flex items-start">
  <span className="text-blue-600 mr-2">✓</span>
  <span>Technical surveillance systems</span>
  </li>
  <li className="flex items-start">
  <span className="text-blue-600 mr-2">✓</span>
  <span>Emergency medical response</span>
  </li>
  </ul>
  </div>
  <div className="md:w-1/2 bg-gray-200 h-64 rounded-lg flex items-center justify-center">
  {/* Replace with training academy image */}
  <p className="text-gray-500">Training Facility Image</p>
  </div>
  </div>
  </section>
  
  {/* Application CTA */}
  <section className="text-center">
  <h2 className="text-3xl font-bold mb-6">
  Don't See Your Perfect Role?
  </h2>
  <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
  We're always seeking exceptional talent. Send us your resume and tell
  us how you can contribute to our mission.
  </p>
  <button className="bg-blue-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-800 transition"
  onClick={handleSubmit}>
  Submit General Application
  </button>
  </section>
  </div>
  );
  };
  
  export default JoinTeam;