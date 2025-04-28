import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import logo from "../assets/logo.svg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => (
  <div className="flex flex-col gap-6">
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    {children}
  </div>
);

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
  >
    {children}
  </Link>
);

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, ariaLabel }) => (
  <a
    href={href}
    aria-label={ariaLabel}
    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors duration-200"
  >
    {icon}
  </a>
);

const Footer: React.FC = () => {
  const [email, setEmail] = React.useState<string>("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=100063647945038",
      icon: <FaFacebookF className="text-white text-lg" />,
      ariaLabel: "Facebook",
    },
    {
      href: "#",
      icon: <RiTwitterXFill className="text-white text-lg" />,
      ariaLabel: "Twitter",
    },
    {
      href: "https://www.linkedin.com/company/oscar-newman-concept-limited/",
      icon: <FaLinkedinIn className="text-white text-lg" />,
      ariaLabel: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/oscarnewmangroup",
      icon: <FaInstagram className="text-white text-lg" />,
      ariaLabel: "Instagram",
    },
  ];

  return (
    <footer
      className="bg-gradient-to-b from-[#09032e] to-[#060220]"
      id="footer"
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="flex flex-col gap-6">
            <img src={logo} alt="Company logo" className="w-40 mb-4" />
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200">
                <MdLocationOn className="text-xl text-orange-400 flex-shrink-0" />
                <p className="text-sm">
                  Suite 18 & 19, MIB Plaza 1st Avenue, Gwarimpa Abuja
                </p>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200">
                <IoIosCall className="text-xl text-orange-400 flex-shrink-0" />
                <p className="text-sm">08033475167, 090916963126</p>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200">
                <IoMdMail className="text-xl text-orange-400 flex-shrink-0" />
                <p className="text-sm">info@oscarnewmangroup.org</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <FooterSection title="Quick Links">
            <div className="flex flex-col gap-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/our-story">About</FooterLink>
            </div>
          </FooterSection>

          {/* Legal */}
          <FooterSection title="Legal">
            <div className="flex flex-col gap-3">
              <FooterLink to="/">Terms of Service</FooterLink>
              <FooterLink to="/">Privacy Policy</FooterLink>
            </div>
          </FooterSection>

          {/* Social & Newsletter */}
          <FooterSection title="Connect With Us">
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <SocialLink
                  key={index}
                  href={link.href}
                  icon={link.icon}
                  ariaLabel={link.ariaLabel}
                />
              ))}
            </div>

            {/* Newsletter */}
            <form onSubmit={handleSubscribe} className="mt-8 mr-11">
              <h4 className="text-sm font-medium text-white mb-3">
                Subscribe to our newsletter
              </h4>
              <div className="flex gap-1 ">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
                <button
                  type="submit"
                  className="px-2 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </FooterSection>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} OscarNewman. All rights reserved.
            </p>
            <div className="flex gap-6">
              <FooterLink to="/">Privacy</FooterLink>
              <FooterLink to="/">Terms</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
