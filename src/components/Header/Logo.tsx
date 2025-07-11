import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="" className="flex items-center gap-3">
      <img
        src="/images/logo.jpg"
        className="h-14 md:h-16 rounded-full shadow"
        alt="EduSmartAI Logo"
      />
      <span className="text-[17px] md:text-2xl font-semibold whitespace-nowrap">
        EduSmartAI
      </span>
    </Link>
  );
};

export default Logo;
