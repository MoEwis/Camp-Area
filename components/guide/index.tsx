import Image from "next/image";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We Are Here For You
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px] ">
            Guide You To Easy Path
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            We want to be on each of your journeys seeking the satisfaction of
            seeing the incorruptible beauty of nature. We can help you on an
            adventure around the world in just one app. We have a vast
            collection of photos and videos to help you get the most out of your
            trip. We have a vast collection of photos and videos to help you get
            the most out of your trip.
          </p>
        </div>
      </div>
      <div className="flexCenter mac-container relative w-full ">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl "
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl botedr shadow-md md:left-[5%] lg:top-20">
          <Image
            className="h-full w-auto"
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
          />
          <div className="flexbetween flex-col ">
            <div className="flex w-full flex-col">
              <div className="flexbetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50 ">48 min</p>
                <p className="bold-20 mt-2">Aguas Calientes</p>
              </div>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Aguas Calientes
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
