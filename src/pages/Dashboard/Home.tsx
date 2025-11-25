
import Businessinfo from "./BusinessInfo";
import Bmain from "../BusinessAd/Bmain";
import Pmain from "../ProductAd/Pmain";

export default function Home() {
  return (
    <>
      <div className="flex flex-col p-1 h-full  gap-1 justify-center items-center">
        <div className="flex flex-col lg:p-2 p-1 lg:h-[100px] h-[100px]  justify-center items-center w-full">
        <Businessinfo />
        </div>
        <div className="flex p-2 h-full justify-center items-center w-full">
          <Bmain />
        </div>
      </div>
    </>
  );
}
