import {FaCircleCheck} from "react-icons/fa6"

function Done({title}) {
  return (
    <li className="flex items-center text-[#18181B] text-base gap-2">
      <FaCircleCheck size={21} className="text-[#4CA154]" />
      {title}
    </li>
  );
}

export default Done;
