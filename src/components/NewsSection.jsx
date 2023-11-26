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
    <div className="w-full object-cover h-[34rem] shadow-2xl rounded-b-xl drop-shadow-2xl">
      <img
        src={photo}
        alt="Image"
        className="object-cover h-3/5 w-full rounded-t-xl"
      />
      <div className="flex flex-col flex-wrap items-left h-2/5 gap-y-4">
        <h2 className="text-xl font-bold ml-4 mt-4">{title}</h2>
        <p className="-mt-4 ml-4 text-sm text-green-500">{date}</p>
        <p className="text-base ml-4 mt-3">{shortDescription}</p>
        <div className="flex justify-center items-center mt-auto">
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
            className="bg-green-600 w-36 h-12 rounded-md text-white font-bold flex justify-center items-center mb-4"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
