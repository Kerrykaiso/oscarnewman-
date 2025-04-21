import { useState, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp, IoChevronDown, IoChevronUp } from "react-icons/io5";

const Navbar = () => {
  const [activeNavbar, setActiveNavbar] = useState("Home");
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", link: "/", isRoute: true },
    {
      name: "About",
      link: "",
      isRoute: true,
      dropdown: [
        { name: "Our Story", link: "/our-story", isRoute: true },
        { name: "Why Us", link: "/why-us", isRoute: true },
        { name: "Contact Us", link: "contact", isRoute: true },
        { name: "Join Our Team", link: "join", isRoute: true },
        { name: "Quality policy statement", link: "qps", isRoute: false },
      ],
    },
    {
      name: "Services",
      link: "services",
      isRoute: false,
      dropdown: [
        { name: "Physical Security", link: "physical-security", isRoute: true },
        {
          name: "Digital Security and Technologies ",
          link: "digital-security",
          isRoute: true,
        },
        {
          name: "Identity Access Management ",
          link: "identity",
          isRoute: true,
        },
        {
          name: "Security Education and Training ",
          link: "security-education",
          isRoute: true,
        },
        {
          name: "Cyber Security ",
          link: "cybersecurity",
          isRoute: true,
        },
        {
          name: "Security Risk Advisory and Management ",
          link: "security-risk",
          isRoute: true,
        },
      ],
    },
    { name: "Blog", link: "/allblog", isRoute: true },
    { name: "Contact", link: "/contact", isRoute: true },
  ];

  const handleNavigation = (path: string, isRoute: boolean) => {
    if (isRoute) {
      navigate(path);
    }
    setActiveNavbar(path);
    setOpenSidebar(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  const handleMouseEnter = (itemName: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setOpenDropdown(itemName);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200); // 200ms delay before closing
  };

  const cancelHoverTimeout = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  return (
    <div className="relative z-50">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex gap-8 font-semibold text-white">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="relative group py-4 px-2"
            onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
            onMouseLeave={handleMouseLeave}
          >
            {item.isRoute ? (
              <RouterLink
                to={item.link}
                className={`cursor-pointer transition flex items-center gap-1 ${
                  activeNavbar === item.link ? "text-[#fd7904]" : "text-white"
                }`}
                onClick={() => handleNavigation(item.link, true)}
              >
                {item.name}
                {item.dropdown &&
                  (openDropdown === item.name ? (
                    <IoChevronUp />
                  ) : (
                    <IoChevronDown />
                  ))}
              </RouterLink>
            ) : (
              <ScrollLink
                to={item.link}
                smooth={true}
                duration={500}
                className={`cursor-pointer transition flex items-center gap-1 ${
                  activeNavbar === item.link ? "text-[#fd7904]" : "text-white"
                }`}
                onClick={() => handleNavigation(item.link, false)}
              >
                {item.name}
                {item.dropdown &&
                  (openDropdown === item.name ? (
                    <IoChevronUp />
                  ) : (
                    <IoChevronDown />
                  ))}
              </ScrollLink>
            )}

            {item.dropdown && openDropdown === item.name && (
              <div
                className="absolute left-0 top-full w-[17rem] bg-white rounded-md shadow-lg py-1 z-50"
                onMouseEnter={cancelHoverTimeout}
                onMouseLeave={handleMouseLeave}
              >
                {item.dropdown.map((subItem, subIndex) =>
                  subItem.isRoute ? (
                    <RouterLink
                      key={subIndex}
                      to={subItem.link}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => handleNavigation(subItem.link, true)}
                    >
                      {subItem.name}
                    </RouterLink>
                  ) : (
                    <ScrollLink
                      key={subIndex}
                      to={subItem.link}
                      smooth={true}
                      duration={500}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleNavigation(subItem.link, false)}
                    >
                      {subItem.name}
                    </ScrollLink>
                  )
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Sidebar Button */}
      <div
        className="lg:hidden text-white text-[24px] cursor-pointer px-10"
        onClick={() => setOpenSidebar(!openSidebar)}
      >
        {!openSidebar ? <GiHamburgerMenu /> : <IoCloseSharp />}
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] bg-white text-black shadow-lg transition-transform duration-500 ease-in-out transform ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {/* Close Button */}
          <div
            className="self-end text-2xl cursor-pointer"
            onClick={() => setOpenSidebar(false)}
          >
            <IoCloseSharp />
          </div>

          {/* Navigation Links */}
          {navItems.map((item, index) => (
            <div key={index}>
              {!item.dropdown ? (
                item.isRoute ? (
                  <RouterLink
                    to={item.link}
                    className={`cursor-pointer text-lg flex items-center ${
                      activeNavbar === item.link
                        ? "text-[#fd7904]"
                        : "text-black"
                    }`}
                    onClick={() => handleNavigation(item.link, true)}
                  >
                    {item.name}
                  </RouterLink>
                ) : (
                  <ScrollLink
                    to={item.link}
                    smooth={true}
                    duration={500}
                    className={`cursor-pointer text-lg flex items-center ${
                      activeNavbar === item.link
                        ? "text-[#fd7904]"
                        : "text-black"
                    }`}
                    onClick={() => handleNavigation(item.link, false)}
                  >
                    {item.name}
                  </ScrollLink>
                )
              ) : (
                <div className="flex flex-col">
                  <div
                    className="flex items-center gap-1 cursor-pointer text-lg"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name}
                    {openDropdown === item.name ? (
                      <IoChevronUp />
                    ) : (
                      <IoChevronDown />
                    )}
                  </div>
                  {openDropdown === item.name && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((subItem, subIndex) =>
                        subItem.isRoute ? (
                          <RouterLink
                            key={subIndex}
                            to={subItem.link}
                            className={`block text-base ${
                              activeNavbar === subItem.link
                                ? "text-[#fd7904]"
                                : "text-gray-700"
                            }`}
                            onClick={() => handleNavigation(subItem.link, true)}
                          >
                            {subItem.name}
                          </RouterLink>
                        ) : (
                          <ScrollLink
                            key={subIndex}
                            to={subItem.link}
                            smooth={true}
                            duration={500}
                            className={`block text-base ${
                              activeNavbar === subItem.link
                                ? "text-[#fd7904]"
                                : "text-gray-700"
                            } cursor-pointer`}
                            onClick={() =>
                              handleNavigation(subItem.link, false)
                            }
                          >
                            {subItem.name}
                          </ScrollLink>
                        )
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
