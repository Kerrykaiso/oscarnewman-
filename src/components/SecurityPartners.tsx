import sec1 from "../assets/sec1.png";
import sec2 from "../assets/sec2.png";
import sec3 from "../assets/sec3.png";
import sec4 from "../assets/sec4.png";
import sec5 from "../assets/sec5.png";

const SecurityPartners = () => {
  const partners = [
    { img: sec1, name: "Nigerian Army" },
    { img: sec2, name: "NSCDC" },
    { img: sec3, name: "Nigerian Police Force" },
    { img: sec4, name: "Nigerian Legion" },
    { img: sec5, name: "VGN" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h3 className="text-2xl font-bold text-center text-[#fd7904] mb-10 uppercase tracking-wider">
        Our Security Partners for Guarding
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex flex-col items-center group transition-all duration-300"
          >
            <div
              className="bg-white p-6 rounded-lg shadow-md mb-4 transition-all duration-300 
              group-hover:shadow-xl group-hover:scale-105 w-full h-48 flex items-center justify-center"
            >
              <img
                src={partner.img}
                alt={partner.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <span className="text-gray-800 font-semibold text-center group-hover:text-[#fd7904]">
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityPartners;
