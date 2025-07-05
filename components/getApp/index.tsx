import Image from "next/image";
import Button from "../button/Button";

const GetApp = () => {
  return (
    <section className="flexCenter flex-col pb-[100px] ">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get For Free Now
          </h2>
          <p className="regular-16 text-gray-10">
            Available on iOS and Android
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row ">
            <Button type="button" icon="/apple.svg" variant="btn_white" full>
              App Store
            </Button>
            <Button
              type="button"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            >
              Play Store
            </Button>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end ">
          <Image src="/phones.png" alt="phones" height={870} width={550} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
