import React, { useEffect, useState } from "react";
// import GalleryEnrollment from "../components/GalleryEnrollment";
import GallerySection from "../components/GallerySection";
// import { SECTIONS } from "../data/gallery";
import axios from "axios";

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
    <div className="h-full ">
      <h1 className="text-fuchsia-900 text-center font-bold ">Galeria</h1>
      {/* <h2 className="font-bold text-fuchsia-900 text-center ">Wystawa 1</h2> */}
      {/* <GalleryEnrollment /> */}

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
  );
}
