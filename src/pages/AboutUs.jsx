import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsSection from "../components/NewsSection";
import moment from "moment/min/moment-with-locales";
import PageFooter from "../components/Footer";
import AnimatedPage from "../components/AnimatedPage";

export default function AboutUsPage() {
  const [news, setNews] = useState([]);

  const apiURL = "http://localhost:1337/api/update-sections?populate=*";

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

  return (
    <>
      <AnimatedPage>
        <div className="h-full min-h-screen ">
          <h1 className="ml-20 p-16 pt-8 text-center text-4xl font-bold text-[#054b28] ">
            Aktualności
          </h1>
          <div className="grid h-full grid-cols-3 gap-10">
            {sortedNewsArray.map((news) => (
              <NewsSection
                key={news.id}
                title={news.attributes.title}
                date={dateConversion(news.attributes.date)}
                shortDescription={news.attributes.shortDescription}
                description={news.attributes.description}
                smallphoto={
                  "http://localhost:1337" +
                  news.attributes.cover.data.attributes.formats.thumbnail.url
                }
                photo={
                  "http://localhost:1337" +
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
