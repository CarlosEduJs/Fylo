import LogoFylo from "../../assets/images/logo.svg";
import LocationIcon from "../../assets/images/icon-location.svg";
import PhoneIcon from "../../assets/images/icon-phone.svg";
import EmailIcon from "../../assets/images/icon-email.svg";

import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";

import CardFooter from "../CardFooter";

const Footer = () => {
  const socialsNav = [
    { icon: PhoneIcon, content: "+1-543-123-4567" },
    { icon: EmailIcon, content: "example@fylo.com" },
  ];

  const navigation = [
    { content: "About Us" },
    { content: "Jobs" },
    { content: "Press" },
    { content: "Blog" },
    { content: "Contact Us" },
    { content: "Terms" },
    { content: "Privacy" },
  ];

  const socialsIcons = [
    {icon: CiFacebook},
    {icon: CiTwitter},
    {icon: CiInstagram},
  ]

  return (
    <footer className="flex flex-col pb-6 mt-64 px-16 bg-primary-dark-blue-footer gap-1">
      <CardFooter />

      <div className="flex flex-col gap-10">
        <img className="w-32" src={LogoFylo} alt="Fylo" />
        <div className="flex items-start gap-24 w-full max-md:flex-col max-md:gap-5">
          <div className="flex gap-3 items-start">
            <img src={LocationIcon} className="w-4" alt="" />
            <h1 className="text-sm text-white max-w-[400px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
              nisi vel magna dictum. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae.
            </h1>
          </div>
          <ul className="flex flex-col gap-3">
            {socialsNav.map((social, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-gray-400 transition-all cursor-pointer hover:text-white"
              >
                <img src={social.icon} className="w-4" />
                <h1 className="text-sm">{social.content}</h1>
              </li>
            ))}
          </ul>
          <ul className="grid grid-cols-2 gap-y-4 gap-x-24">
            {navigation.map((nav, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-gray-400 transition-all cursor-pointer hover:text-white"
              >
                <h1 className="text-sm">{nav.content}</h1>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-5">
            {socialsIcons.map((social, index) => (
              <li
                key={index}
                className="text-gray-400 transition-all cursor-pointer hover:text-white"
              >
                <social.icon className="w-8" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
