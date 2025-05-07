import { IoIosCheckmarkCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import securityManagement from "../../assets/Securityt.png";
//import avatar from "../../assets/avatar.png";

const Consult = () => {
  const nav = useNavigate()
  const benefits: string[] = [
    "Advanced Encryption Standards",
    "24/7 Threat Monitoring",
    "Regulatory Compliance Expertise",
    "Proven Track Record",
    "Customizable Solutions",
    "Cutting-Edge Technology",
    "Dedicated Expert Team",
    "Rapid Incident Response",
    "Transparent Communication",
    "Focus on Business Continuity",
  ];
  return (
    <div className="bg-[#09032E] px-10 py-20 ">
      <section className="  lg:flex-row flex-col-reverse flex justify-center gap-4 lg:gap-40  bg-[#09032E]  mx-auto">
        <div className="">
          <h3 className="text-[#ffbf87] font-semibold text-[20px]">
            WHY CHOOSE US
          </h3>
          <p className="text-white font-semibold">
            <span>Reasons</span> to Trust Us With Your Security
          </p>
          <div className=" bg-[#ffbf87] w-4 h-[2px] relative bottom-[1px]" />
          <div className="flex flex-col my-6 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4">
                <IoIosCheckmarkCircle size={16} className="text-[#fd7904] " />
                <p className="text-white">{benefit}</p>
              </div>
            ))}
          </div>
          <button className="bg-[#fd7904] hover:bg-transparent hover:border transition-all duration-300 border-[#fd7904] py-3 px-16 cursor-pointer rounded-[10px] text-white"
          onClick={()=>nav("/book")}>
           
            Book a Consultation
          </button>
        </div>
        <div className="lg:w-[40%] max-md:w-[100%]  w-[90%]">
          <img
            src={securityManagement}
            alt=""
            sizes="120"
            className="w-[100%] h-full object-contain rounded-4xl"
          />
        </div>
      </section>
      <div className="flex flex-col gap-4  mt-28 text-white justify-center text-center">
        <p className="lg:text-2xl text-xl text-[#FFFCF9] opacity-90 font-light">
          "Your integrated services are a delight, they have saved me a <br />{" "}
          lot and give me peace of mind"
        </p>
        <div className="flex items-center gap-4 justify-center">
          {/* <img src={avatar} alt="Avatar" width={60} /> */}
          <h1 className="text-2xl font-bold">
            MD/CEO / Protogy Global Services
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Consult;
