import ServiceSection from "../../components/ServiceSection";
import { servicesData } from "../../utils/constanst";

const Cybersecurity = () => {
  return (
    <div className="bg-white py-20 px-4 max-w-6xl mx-auto">
      <div className=" text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Cybersecurity Services
        </h2>
        <p className="text-lg text-gray-600">
          Proactive defense solutions to protect your digital infrastructure,
          data, and people.
        </p>
      </div>

      <ServiceSection data={servicesData.cyber_security} />
    </div>
  );
};

export default Cybersecurity;
