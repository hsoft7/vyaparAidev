import React from "react";

function ListBussDesign({ RecentDesign }) {

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 w-full rounded-2xl bg-white">

        {RecentDesign?.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center p-2 gap-4 rounded-2xl hover-3d transition"
          >
            {/* Large Screen Icon */}
            <img
              width="200"
              height="200"
              className="hidden lg:block"
              src="https://static.vecteezy.com/system/resources/thumbnails/000/236/134/small/modern-colorful-squares-vector-background.jpg"
              alt="design icon"
            />

            {/* Small Screen Icon */}
            <img
              width="120"
              height="120"
              className="block lg:hidden"
              src="https://static.vecteezy.com/system/resources/thumbnails/000/236/134/small/modern-colorful-squares-vector-background.jpg"
              alt="design icon"
            />
          </div>
        ))}

      </div>
    </>
  );
}

export default ListBussDesign;
