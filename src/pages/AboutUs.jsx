import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsSection from "../components/NewsSection";
import moment from "moment/min/moment-with-locales";
import PageFooter from "../components/Footer";
import AnimatedPage from "../components/AnimatedPage";

export default function AboutUsPage() {
  const [news, setNews] = useState([]);

  const apiURL =
    "https://mindful-cabbage-f2676bb676.strapiapp.com/api/update-sections?populate=*";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiURL);
        console.log(response.data);
        setNews(response.data.data);
      } catch (error) {
        console.error("Error while fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  function compareDates(a, b) {
    const dateA = new Date(a.attributes.date);
    const dateB = new Date(b.attributes.date);

    if (dateA < dateB) {
      return 1;
    }
    if (dateA > dateB) {
      return -1;
    }
    return 0;
  }

  let sortedNewsArray = news.sort(compareDates);

  function dateConversion(someDate) {
    moment.locale("pl");
    const finalDate = moment(someDate, "YYYY-MM-DD").format("LL");

    return finalDate;
  }

  function makeShortDescription(input) {
    if (input.length > 40) {
      return input.slice(0, 40) + "...";
    } else {
      return input + "...";
    }
  }

  return (
    <>
      <AnimatedPage>
        <div id="ogloszenia" className="3xl:h-full 3xl:min-h-screen ">
          <h1 className=" pt-4 text-3xl sm:pt-6 sm:pb-0 lg:pt-8 lg:pb-2 3xl:p-10 text-center 3xl:text-4xl font-bold text-[#054b28] ">
            Aktualności
          </h1>
          <div className="mx-2 sm:mx-12 md:grid md:grid-cols-2 md:gap-4 md:mx-4 md:pb-12 lg:pb-16 lg:mx-12 xl:grid xl:grid-cols-3 xl:gap-4 2xl:gap-8 2xl:mx-24 3xl:grid h-full 3xl:grid-cols-3 3xl:gap-8">
            {sortedNewsArray.map((news) => (
              <NewsSection
                key={news.id}
                title={news.attributes.title}
                date={dateConversion(news.attributes.date)}
                description={news.attributes.description}
                shortDescription={makeShortDescription(
                  news.attributes.description
                )}
                smallphoto={
                  "https://mindful-cabbage-f2676bb676.media.strapiapp.com/" +
                  news.attributes.cover.data.attributes.formats.thumbnail.url
                }
                photo={
                  "https://mindful-cabbage-f2676bb676.media.strapiapp.com/" +
                  news.attributes.cover.data.attributes.formats.small.url
                }
              />
            ))}
          </div>
        </div>
      </AnimatedPage>
    </>
  );
}
