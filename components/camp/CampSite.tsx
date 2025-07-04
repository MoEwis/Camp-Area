import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampSiteProp {
  backgroundImage: string;
  title: string;
  subTitle: string;
  peopleJoiend: string;
}
const CampSite = ({
  backgroundImage,
  title,
  subTitle,
  peopleJoiend,
}: CampSiteProp) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl `}
    >
      <div className="flex  h-full flex-col items-start justify-between p-10 lg:px-20 lg:py-10 ">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4 ">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1 ">
            <h1 className="bold-20 text-white">{title}</h1>
            <p className="regular-14 text-white">{subTitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6 ">
          <span className="flex -space-x-4 overflow-hidden ">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                key={url}
                src={url}
                alt="Person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoiend}</p>
        </div>
      </div>
    </div>
  );
};
export default CampSite;
