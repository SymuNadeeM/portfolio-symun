import { FaAddressBook } from "react-icons/fa";
import { ImBlogger2 } from "react-icons/im";
import { LuUser2 } from "react-icons/lu";
import { MdWorkOutline } from "react-icons/md";
import { RiContactsBookLine } from "react-icons/ri";

export const menubarData = [
  { icon: LuUser2, label: "About", link: "/" },
  { icon: FaAddressBook, label: "Resume", link: "/resume" },
  { icon: MdWorkOutline, label: "Works", link: "/works" },
  { icon: ImBlogger2, label: "Blogs", link: "/blogs" },
  { icon: RiContactsBookLine, label: "Contact", link: "/contact" },
];
