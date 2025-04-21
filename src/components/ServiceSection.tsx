import classnames from "classnames";
import img from "../assets/service.jpg";
import { useNavigate } from "react-router-dom";

interface ServiceProps {
  title: string;
  sub_title: string;
  content: string;
  img: string | null;
  reverse?: boolean;
}
const ServiceSection = ({ data }: { data: ServiceProps[] }) => {
  const nav = useNavigate();
  return (
    <ul className="w-full h-fit flex flex-col gap-[54px] lg:gap-[72px]">
      {data?.map((item, idx) => (
        <li
          key={idx}
          className={classnames(
            "flex flex-col lg:flex-row  w-full items-center gap-[24px] lg:gap-[32px]",
            {
              "lg:flex-row-reverse": item.reverse,
            }
          )}
        >
          <div className="bg-gray-200 h-[240px] lg:h-[350px] overflow-hidden rounded-3xl w-full">
            <img
              src={item.img || img}
              alt=""
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="w-full">
            <h2 className="text-[28px] font-semibold">{item.title}</h2>
            <div className="mb-[12px]">
              <p className="text-[20px] text-gray-600 my-[4px]">
                {item.sub_title}
              </p>
              <p className="leading-[28px] text-[14px]">{item.content}</p>
            </div>

            <button
              className="px-6 py-2 text-base lg:text-lg font-semibold bg-[#fd7904] text-white rounded-lg hover:bg-[#e56c00] transition-all duration-300"
              onClick={() => {
                nav("/contact");
              }}
            >
              Book Service
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ServiceSection;
