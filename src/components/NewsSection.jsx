import React from "react";
import NewsSectionButton from "./NewsSectionButton";

const NewsSection = ({
  title,
  shortDescription,
  description,
  smallphoto,
  photo,
  date,
  id,
}) => {
  return (
    //31 rem
    // bg-violet-50/80
    <div className="h-[34rem] w-full rounded-b-xl object-cover shadow-2xl drop-shadow-2xl">
      <img
        src={photo}
        alt="Image"
        className="h-3/5 w-full rounded-t-xl object-cover"
      />
      <div className="items-left flex h-2/5 flex-col flex-wrap gap-y-4">
        <h2 className="ml-4 mt-4 text-xl font-bold">{title}</h2>
        <p className="-mt-4 ml-4 text-sm text-green-500">{date}</p>
        <p className="ml-4 mt-3 text-base">{shortDescription}</p>
        <div className="mt-auto flex items-center justify-center">
          <NewsSectionButton
            // id={id}
            newsContent={{
              id: { id },
              title: { title },
              date: { date },
              shortDescription: { shortDescription },
              description: { description },
              photo: { photo },
              smallphoto: { smallphoto },
            }}
            className=" mb-4 flex h-12 w-36 items-center justify-center rounded-md bg-[#054b28] font-bold text-white transition duration-500 ease-in-out hover:bg-green-500"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
