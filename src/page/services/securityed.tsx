import ServiceSection from "../../components/ServiceSection";
import { servicesData } from "../../utils/constanst";

const SecurityEd = () => {
  return (
    <div className="bg-gray-50 py-20 px-4 max-w-6xl mx-auto">
      <div className=" text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Security Education & Training
        </h2>
        <p className="text-lg text-gray-600">
          Equip your team with the knowledge and confidence to prevent, detect,
          and respond to security threats.
        </p>
      </div>

      <ServiceSection data={servicesData.security_education} />
    </div>
  );
};

export default SecurityEd;
