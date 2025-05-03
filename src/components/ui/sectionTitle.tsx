import { GiBurningRoundShot } from "react-icons/gi";

const SectionTitle = ({ heading }: { heading: string }) => {
  return (
    <div className="py-3 md:py-5 lg:py-8 text-center">
      <h3 className="flex gap-2 justify-center items-center text-lg font-medium text-black dark:text-white">
        <GiBurningRoundShot className="text-[#FF4500]" />
        {heading}
      </h3>
      <div className="border-t-2 border-[#4CAF50] w-36 mx-auto mt-2"></div>
      <div className="border-t-2 border-[#4CAF50] w-16 mx-auto mt-1"></div>
    </div>
  );
};

export default SectionTitle;
