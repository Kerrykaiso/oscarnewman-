import { FaIdBadge } from "react-icons/fa";
import ServiceSection from "../../components/ServiceSection";
import { servicesData } from "../../utils/constanst";

const Identity = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-14">
        <div className="flex justify-center mb-4">
          <FaIdBadge className="text-5xl text-blue-600" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Identity & Talent Risk Management
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Building trust through identity verification and strategic talent
          solutions.
        </p>
      </div>

      <ServiceSection data={servicesData.identity_access} />
    </div>
  );
};

export default Identity;
