import { FaBan } from "react-icons/fa";

const Empty = ({ message }: { message: string }) => {
  return (
    <div className="col-span-full flex justify-center items-center flex-col mb-8">
      <FaBan className="w-10 h-10 text-yellow-500" />
      <div className="text-xl mt-2 ">{message}</div>
    </div>
  );
};

export default Empty;
