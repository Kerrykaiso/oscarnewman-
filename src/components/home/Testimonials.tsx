import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar from "../../assets/avatar.png";
import { FaStar } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: (i: number) => (
      <div className={`custom-dot relative bottom-44 custom-dot-${i}`}></div>
    ),
  };

  const navigate = useNavigate();

  const testimonials = [
    {
      imgSrc: avatar,
      name: "Synohydro",
      about: "Project Coorddinator, Synohydro",
      desc: "Professionalism and reliability define our experience with this security company. Their team consistently demonstrate attention to detail and a commitment to safety that aligns with our operational needs",
    },
    {
      imgSrc: avatar,
      name: "Sety",
      about: "Sety Nigeria | Emergency services",
      desc: "Our partnership with this team on SOS and response has been seamless and impactful. Their rapid deployment capability and disciplined quick response unit has enhanced our emergency handling and efficiency.",
    },
    {
      imgSrc: avatar,
      name: "Goshen Estate",
      about: "Chairman, Goshen Estate Residents Association",
      desc: "Their guards have been visibly detterent to unwanted activity and a reassuring prescence in our estate. We appreciate the calm professionalism they bring to their role everyday.",
    },
    {
      imgSrc:avatar,
      name: "Emmaag Hotel, Ibadan",
      about:"General Manager, Emmaag Hotel",
      desc: "Having dependable guards at our hotel has improved guest confindence and helped maintain order, especially during high-traffic events. Their prescence is both reassuring and effective."
    },
    {
      imgSrc: avatar,
      name: "French Embassy",
      about:"Security Attache, French Embassy Nigeria",
      desc: "Discretion, professionalism, and adherence to protocol are non-negotiable at our location, they met those standards with poise and precision."
    },
    {
      imgSrc: avatar,
      name: "Kayceelaw Properties (KLP)",
      about:"Managing Director, Kayceelaw Properties",
      desc:"We needed a reliable team to manage both physical and digital threats. Theit combined CCTV surveillance and guard services have given us full spectrum security we can trust."
    }
  ];

  return (
    <div className="bg-[#09032E] px-10 py-10  ">
      {" "}
      <h1 className="text-[#ffbf87] font-semibold text-[20px] text-center uppercase">
        Testimonials
      </h1>
      <div className="slider-container ">
        <Slider
          {...settings}
          className=" text-[20px] mt-12  text-[#232323]  mx-auto  lg:w-[80%] w-full"
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white  relative mt-8 rounded-[25px] p-8"
            >
              <img
                src={item.imgSrc}
                alt={item.name}
                className="absolute -top-6 z-[100000]  w-[12%]"
              />
              <div className="flex absolute right-8 top-12 gap-1">
                {Array(3)
                  .fill(null)
                  .map((_, index) => (
                    <FaStar size={12} key={index} className="text-[#fd7904]" />
                  ))}
              </div>
              <p className="text-[12px]  w-[70%] mt-8 lg:mt-4">{item.desc}</p>
              <div className="flex justify-between mt-6">
                <div className="flex flex-col gap-1 text-[12px]">
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm">{item.about}</p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-8 h-8 relative bg-[#fd7904] rounded-full p-1">
                    <AiFillLike className=" text-[14px] absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 text-white " />
                  </div>
                  <span className="text-[14px] font-bold">Testimonial</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="bg-[#FD7904] lg:w-[90%] rounded-md w-full mx-auto lg:-mt-12 -mt-20  flex items-center flex-col lg:flex-row gap-6 lg:gap-0 justify-between text-white p-4 lg:p-12">
        <div>
          <h1 className="text-bold text-[16px] lg:text-3xl">
            Power to live Safely
          </h1>
          <p>Let&apos;s get you started</p>
        </div>
        <button
          onClick={() => navigate("/contact")}
          className="bg-[#09032e] hover:bg-gray-100 hover:text-black transition duration-300 cursor-pointer py-3 px-11 rounded-[10px] text-lg  text-white"
        >
          Contact us
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
