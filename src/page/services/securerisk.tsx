import ServiceSection from "../../components/ServiceSection";
import { servicesData } from "../../utils/constanst";

const SecureRisk = () => {
  return (
    <div className="bg-white py-20 px-4 max-w-6xl mx-auto">
      <div className=" text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Strategic Risk & Security Advisory
        </h2>
        <p className="text-lg text-gray-600">
          Comprehensive advisory and bespoke security solutions to manage risk,
          ensure compliance, and fortify operations.
        </p>
      </div>

      <ServiceSection data={servicesData.security_risk} />
    </div>
  );
};

export default SecureRisk;
