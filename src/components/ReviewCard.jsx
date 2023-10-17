import { GiRoundStar } from "react-icons/gi";

function ReviewCard({ image, name, description, color }) {
  return (
    <div className="bg-white rounded-md py-5 px-7 space-y-4 shadow-md">
      <div className="flex gap-5 items-center">
        <img src={image} alt="social image" className="w-[70px] md:w-[90px]" />
        <ul className="flex gap-2">
          <GiRoundStar size={20} className="text-[#F5C044]" />
          <GiRoundStar size={20} className="text-[#F5C044]" />
          <GiRoundStar size={20} className="text-[#F5C044]" />
          <GiRoundStar size={20} className="text-[#F5C044]" />
          <GiRoundStar size={20} className={color} />
        </ul>
      </div>

      <article className="space-y-4">
        <h2 className="text-lg font-bold text-[#18181B]">{name}</h2>
        <p className="text-base text-[#52525A] w-[280px]">{description}</p>
      </article>
    </div>
  );
}

export default ReviewCard;
