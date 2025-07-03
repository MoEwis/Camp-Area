import Image from "next/image";
import Button from "../button/Button";

const Hero = () => {
  return (
    <section
      className="
  max-container padding-container
  flex flex-col gap-20 pb-32 md:gap-28 lg:py-20 xl:flex-row "
    >
      <div className="hero-map" />
      {/* Left  */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 ">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88  ">Putuk Truno Camp Area</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Putuk Truno Camp Area is a unique and serene camp area located in the
          heart of the Putuk Truno village, offering a tranquil and peaceful
          environment for campers to relax and reconnect with nature.
        </p>
        <div className="my-11 flex flex-wrap gap-5 ">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, i) => (
                <Image
                  key={i}
                  src="/star.svg"
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-gray-900">
            198K
            <span className="regular-16 lg:regular-20 ml-1 underline">
              Excekkent Reviews
            </span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" variant="btn_green">
            Download App
          </Button>
          <Button type="button" variant="btn_white_text" icon="/play.svg">
            How We Work?
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
