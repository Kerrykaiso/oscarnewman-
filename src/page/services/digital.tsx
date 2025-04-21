import { FaLock } from "react-icons/fa";
import ServiceSection from "../../components/ServiceSection";
import { servicesData } from "../../utils/constanst";

const DigitalSecurity = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-14">
        <div className="flex justify-center mb-4">
          <FaLock className="text-5xl text-blue-600" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Digital Security & Technologies
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Advanced protection for your digital infrastructure and data assets
        </p>
      </div>
      <ServiceSection data={servicesData.digital_security} />
    </div>
  );
};

export default DigitalSecurity;
