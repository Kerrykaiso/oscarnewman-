import { FaShieldAlt,  FaEye, FaHeadset } from "react-icons/fa";
import { MdSecurity, MdOutlineVerifiedUser } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const WhyUs = () => {

  const nav  = useNavigate()
  const features = [
    {
      icon: <FaShieldAlt className="text-3xl text-blue-600" />,
      title: "Advanced Threat Protection",
      description:
        "Our multi-layered security systems detect and neutralize threats before they reach your premises.",
    },

    {
      icon: <MdSecurity className="text-3xl text-blue-600" />,
      title: "Cutting-Edge Technology",
      description:
        "We deploy AI-powered surveillance and biometric systems for unmatched security precision.",
    },
    {
      icon: <FaEye className="text-3xl text-blue-600" />,
      title: "24/7 Proactive Monitoring",
      description:
        "Our command center watches over your property with real-time response capabilities.",
    },
    {
      icon: <MdOutlineVerifiedUser className="text-3xl text-blue-600" />,
      title: "Proven Track Record",
      description:
        "10+ years protecting Fortune 500 companies with zero major security breaches.",
    },
    {
      icon: <FaHeadset className="text-3xl text-blue-600" />,
      title: "Dedicated Support",
      description:
        "Your personal security consultant available around the clock for any concerns.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Your integrated services are a delight, they have saved me a lot and give me peace of mind",
      author: "MD/CEO / Protogy Global Services",
    },
    {
      quote:
        "Their security personnel are not just watchful they are trained, courteous and responsive",
      author: "Hotel manager, Saire Hotel",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Why Choose Oscar Newman Security?
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          In a world of evolving threats, we deliver peace of mind through
          innovation, expertise, and unwavering commitment to your safety.
        </p>
      </section>

      {/* Core Differentiators */}
      <section className="mb-20">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">
              Our Philosophy
            </h3>
            <p className="text-gray-700">
              Security isn't just our business—it's our obsession. We combine
              human intuition with technological precision to create protection
              systems that adapt to your unique needs.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">
              The Oscar Newman Difference
            </h3>
            <p className="text-gray-700">
              Unlike conventional firms, we develop proprietary threat
              assessment algorithms and maintain our own training academy to
              ensure unmatched service quality.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">
              Client-Centric Approach
            </h3>
            <p className="text-gray-700">
              Your security becomes our mission. We assign dedicated teams who
              learn your operations intimately to provide personalized
              protection strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Security Capabilities
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="bg-gray-50 rounded-xl p-12 mb-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-6">
              Intelligent Security Infrastructure
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>
                  Predictive analytics that identify threats before they
                  materialize
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>
                  Military-grade encryption for all data transmissions
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Blockchain-verified access control systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Drone surveillance networks with facial recognition</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 bg-gray-200 h-80 rounded-lg flex items-center justify-center">
            {/* Replace with actual security system image or 3D animation */}
            <p className="text-gray-500">Security System Visualization</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md">
              <blockquote className="text-lg italic text-gray-700 mb-4">
                "{testimonial.quote}"
              </blockquote>
              <p className="font-medium text-gray-900">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white rounded-xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Experience Unmatched Protection?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Schedule a confidential consultation with our security experts to
          assess your vulnerabilities.
        </p>
        <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
         onClick={()=>nav("/book")}
        >
          Request Security Audit
        </button>
      </section>
    </div>
  );
};

export default WhyUs;
