import { Element } from "react-scroll";
import cctv from "../../assets/cctv-camera.svg";
import encrypted from "../../assets/encrypted (1).svg";
import cyberSecurity from "../../assets/cyber-security.svg";
import consultant from "../../assets/consultant.svg";

const Services = () => {
  const services = [
    {
      label: "Physical Security",
      desc: "Our uniqueness in Guard provision is manifested as they are the repository of all what protection is all about. We provide comprehensive physical security solutions with trained personnel and advanced surveillance systems.",
      imgSrc: cctv,
      id: 1,
    },
    {
      label: "Digital Security",
      desc: "At ONC, we automate routine tasks to enhance security efficiency and provide a robust, cost-effective security regime. Our digital solutions integrate seamlessly with existing infrastructure to create a unified security ecosystem.",
      imgSrc: encrypted,
      id: 2,
    },
    {
      label: "Cyber Security",
      desc: "Oscar Newman Concept Limited offers comprehensive cyber security solutions for both consumers and enterprises. Our advanced threat detection and prevention systems protect your digital assets 24/7.",
      imgSrc: cyberSecurity,
      id: 3,
    },
    {
      label: "Risk Advisory & Consultancy",
      desc: "We remove friction created by risk through clinical analysis and identification of risk sources, probability of occurrence & criticality. Our expert consultants provide tailored solutions for your specific security challenges.",
      imgSrc: consultant,
      id: 4,
    },
  ];

  return (
    <Element name="services">
      <div className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Security Solutions
        </h2>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => (
            <div
              data-aos="fade-up"
              key={service.id}
              className="bg-white hover:bg-gray-50 transition-colors duration-300 h-full rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center gap-6 mb-6">
                  <div className="bg-[#09032e] w-16 h-16 rounded-2xl p-4 flex items-center justify-center flex-shrink-0">
                    <img
                      src={service.imgSrc}
                      alt={service.label}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {service.label}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
              <div className="px-8 pb-6">
                <div className="h-1 w-16 bg-[#09032e] rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Services;
