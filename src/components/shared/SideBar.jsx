
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router-dom";
import { profileData } from "../../data/profileData";
const SideBar = () => {
  return (
    <div className="px-3.5 sm:px-9 xl:px-3.5 py-7.5 bg-black rounded-[20px] sticky top-0 max-w-[600px] mx-auto">
      {profileData.map((profileData, index) => (
        <div key={index} className="text-center">
          {/* image */}
          <div className="flex items-center justify-center">
            <div className="mb-5">
              <img src={profileData.imageUrl}
                width={210}
                height={210}
                alt="profile"
                className="rounded-[20px] object-fill" />
              
            </div>
          </div>
          <h4 className="mb-5 xl:mb-3 text-xl xl:text-2xl leading-4 font-medium text-white">
            {profileData.name}
          </h4>
          <span className="px-5 py-2 rounded-md  font-medium bg-grayBackground text-grayText">
            {profileData.occupation}
          </span>
          <div className="mt-3.5 mb-7.5 flex items-center justify-center">
            <ul className="flex items-center gap-5">
              {profileData.socialMedia.map((social, index) => (
                <li
                  key={index}
                  className="social-media"
                  style={{ color: social.color }}
                >
                  <Link to={social.link} className="link-social">
                    <social.icon className="text-2xl" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-7.5 px-3.5 py-5 rounded-2xl bg-grayBackground">
            {profileData.contactInfo.map((contact, index) => (
              <div
                key={index}
                className={`py-2.5 flex items-center gap-[10px] ${
                  index === 0 ? "" : "border-t border-borderColor"
                }`}
              >
                <div className="device-media" style={{ color: contact.color }}>
                  <contact.icon className="text-2xl" />
                </div>
                <div className="text-start">
                  <span className="text-xs leading-[18px]">
                    {contact.label}
                  </span>
                  <p className="text-sm text-white">{contact.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <Link
              to="#"
              className="h-[53px] w-[205px] rounded-[10px] border border-transparent text-white text-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] flex items-center justify-center hover:bg-gradient-to-br"
            >
              <span>
                <IoMdDownload className="text-lg mr-1" />
              </span>
              Download CV
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
