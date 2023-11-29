import React, { useEffect, useState } from "react";
// import GalleryEnrollment from "../components/GalleryEnrollment";
import GallerySection from "../components/GallerySection";
// import { SECTIONS } from "../data/gallery";
import axios from "axios";
import AnimatedPage from "../components/AnimatedPage";

export default function GalleryPage() {
  const [sections, setSections] = useState([]);
  // const [loading, setLoading] = useState(true);

  const apiURL = "http://localhost:1337/api/each-gallery-sections?populate=*";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiURL);
        console.log(response.data);
        setSections(response.data.data);
      } catch (error) {
        console.error("Error while fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const sortedSectionsArray = sections.sort((a, b) => b.id - a.id);
  console.log(sortedSectionsArray);

  return (
    <AnimatedPage>
      <div id="galeria" className="">
        <h1 className="pt-4 text-3xl sm:pt-6 lg:pt-8 lg:pb-2   3xl:pt-8 text-center 3xl:text-4xl font-bold text-[#054b28] ">
          Galeria
        </h1>
        {sortedSectionsArray.map((section) => (
          <GallerySection
            key={section.id}
            title={section.attributes.Title}
            description={section.attributes.Description}
            images={section.attributes.Images.data.map(
              (image) =>
                "http://localhost:1337" + image.attributes.formats.small.url
            )}
          />
        ))}
      </div>
    </AnimatedPage>
  );
}
