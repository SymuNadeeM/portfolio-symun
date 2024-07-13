import {
  FaCalendarAlt,
  FaEnvelopeOpenText,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMobileAlt,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import userPic from "../assets/Symun2.jpg";


export const profileData = [
  {
    name: "Md. Symun Majumdar",
    occupation: "Front-End Web Developer",
    imageUrl: userPic,
    socialMedia: [
      { icon: FaFacebookF, link: "#", color: "#1773ea" },
      { icon: FaTwitter, link: "#", color: "#1c9cea" },
      { icon: FaInstagram, link: "#", color: "#e12a72" },
      { icon: FaLinkedinIn, link: "#", color: "#144679" },
    ],
    contactInfo: [
      {
        icon: FaMobileAlt,
        label: "Phone",
        value: "+880 153751 5034",
        color: "#E93B81",
      },
      {
        icon: FaEnvelopeOpenText,
        label: "Email",
        value: "msymunnadeem@gmail.com",
        color: "#6AB5B9",
      },
      {
        icon: FaLocationDot,
        label: "Location",
        value: "Mohammadpur Dhaka Bangladesh",
        color: "#FD7590",
      },
      {
        icon: FaCalendarAlt,
        label: "Birthday",
        value: "June 12, 1998",
        color: "#C17CEB",
      },
    ],
  },
];
