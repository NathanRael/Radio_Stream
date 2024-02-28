
import RadioPlayer from "../../components/RadioPlayer";
const Radio = () => {
  return (
    <div
      className="flex items-center justify-between mt-[172px] box max-md:flex-col max-lg:gap-10"
      id="Radio"
    >
      <div className="flex flex-col max-md:flex-row gap-6">
        <p className="text-black text-title-2 max-md:text-subtitle-2">
          Radio Rofia
        </p>
        <p className="text-subtitle-1 max-md:text-subtitle-3 text-black-60">
          91.4MHz
        </p>
      </div>

      <RadioPlayer/>
    </div>
  );
};

export default Radio;
