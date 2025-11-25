import React from "react";
import ListBussDesign from "./ListBussDesign";

function Bmain() {
  const RecentDesign = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];
  return (
    <>
      <div className="flex flex-col gap-4 items-center  bg-white p-3 w-full  rounded-2xl  lg:p-6">
        <div
          className="flex flex-col justify-center hover:shadow-md transition items-center gap-2 flex-shrink-0 
                        w-full h-[110px] 
                        rounded-2xl border border-gray-200"
        >
         
          <img
            width="30"
            height="30"
            className="hidden lg:block"
            src="https://img.icons8.com/ios/50/add--v1.png"
            alt="add--v1"
          />

          <img
            width="25"
            height="25"
            className="block lg:hidden"
            src="https://img.icons8.com/ios/50/add--v1.png"
            alt="add--v1"
          />

          <p className="text-xs lg:text-[15px] text-black">
          Create New Design !
          </p>
           <div className="badge badge-primary badge-xs"> Genarated By Ai</div>
          
        </div>
        <div className="flex w-full justify-start items-center">
          <p className="text-xs lg:text-[15px] text-black">Recently Genarated</p>
        </div>
        {/* List Buss Design Box */}
        {/* <div className="border border-red-500  rounded-2xl flex justify-center items-center w-full h-full"> */}

        {/* </div> */}
        { !RecentDesign?.length ? (
          <div className="flex w-full justify-center items-center p-2">
            <p className="text-blue-500 text-sm">Click On Create new, No Design Found!</p>
          </div>
        ) : (
          <ListBussDesign RecentDesign={RecentDesign} />
        )}
      </div>
    </>
  );
}

export default Bmain;
