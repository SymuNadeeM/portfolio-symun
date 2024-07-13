import { FaLaptopCode } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { MdModeOfTravel } from "react-icons/md";
import { TbCricket } from "react-icons/tb";

export const aboutData = {
  about: {
    title: "About",
    description: [
      "I'm a diligent web developer with a knack for front-end technologies and a penchant for effective team communication. My passion lies in crafting captivating user experiences, breathing life into designs with expertise in JavaScript, React, Next.js, Node.js, CSS, Bootstrap, and Tailwind CSS. I'm always eager to learn about the latest advancements in web technologies, driven by a desire to create seamless functionality and visually stunning interfaces.",
    ],
  },
  achievements: [
    { label: "Years of Experience", value: "3+" },
    { label: "PROJECTS COMPLETED", value: "30+" },
    { label: "HAPPY CLIENTS", value: "10+" },
  ],
  interests: [
    { icon: MdModeOfTravel, label: "Travel" },
    { icon: FaLaptopCode, label: "Coding" },
    { icon: IoFastFood, label: "Eating" },
    { icon: TbCricket, label: "Playing" },
  ],
  experiences: [
    {
      id: 1,
      year: "2023 - Present",
      company: "Nur IT",
      title: "Front-End Web Developer",
      description:
        "Website development is the process of building, programming, coding and maintaining websites and web applications.",
    },
    // {
    //   id: 2,
    //   year: '2018 - Present',
    //   company: 'Envato Market',
    //   title: 'Web Developer',
    //   description: 'Website development is the process of building, programming, coding and maintaining websites and web applications.'
    // }
  ],
};
