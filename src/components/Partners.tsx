import { useEffect, useRef } from "react";
import { partners } from "../utils/data";

const Partners = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.style.setProperty(
        "--scroll-width",
        `${scrollerRef.current.scrollWidth / 2}px`
      );
    }
  }, []);

  return (
    <div className="my-4">
      <h3 className="text-[#fd7904]   text-center py-4 font-semibold text-[20px] max-md:text-lg">
        SOME OF OUR CLIENTS & PARTNERS
      </h3>
      <div className="logo-scroller">
        <div className="logos-container" ref={scrollerRef}>
          {[...partners, ...partners].map((imagelogo, index) => (
            <img
              key={index}
              src={imagelogo}
              alt={`Logo ${index}`}
              className="logo  p-2 "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
