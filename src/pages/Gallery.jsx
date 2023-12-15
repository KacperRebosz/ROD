import React, { useEffect, useState } from "react";
import GallerySection from "../components/GallerySection";
import axios from "axios";
import AnimatedPage from "../components/AnimatedPage";
import { TEST_GALLERY_DATA } from "../data/TestDataEachGallerySection";

export default function GalleryPage() {
  let sections = TEST_GALLERY_DATA.data;

  // UNCOMMENT WHEN ACTUAL API WILL BE USED
  /*
  const [sections, setSections] = useState([]);

  const apiURL =
    "https://mindful-cabbage-f2676bb676.strapiapp.com/api/each-gallery-sections?populate=*";

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
  */

  //only for test data
  function getRandomImage() {
    const randomImageNumber = Math.floor(Math.random() * 7) + 1;
    return `/Images/image${randomImageNumber}.jpg`;
  }

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
            images={section.attributes.Images.data.map((image) =>
              // "https://mindful-cabbage-f2676bb676.media.strapiapp.com/" +
              // image.attributes.url

              getRandomImage()
            )}
          />
        ))}
      </div>
    </AnimatedPage>
  );
}
