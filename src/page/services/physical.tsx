import {
  FaShieldAlt,
  // FaUserShield,
  // FaBuilding,
  // FaVideo,
  // FaKey,
} from "react-icons/fa";
// import { MdSecurity, MdEventAvailable } from "react-icons/md";
import ServiceSection from "../../components/ServiceSection";
import { servicesData } from "../../utils/constanst";

const PhysicalSecurity = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <FaShieldAlt className="text-5xl text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Physical Security Solutions
        </h1>
        <p className="text-xl text-gray-600">
          Comprehensive protection for your facilities, assets, and personnel
        </p>
      </div>
      <ServiceSection data={servicesData.physical_security} />
    </div>
  );
};

export default PhysicalSecurity;
