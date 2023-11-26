import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsSection from "../components/NewsSection";
import moment from "moment/min/moment-with-locales";
import PageFooter from "../components/Footer";

export default function HomePage() {
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

  let newestNews = sortedNewsArray;

  if (sortedNewsArray.length > 3) {
    newestNews = sortedNewsArray.slice(0, 3);
  }

  function dateConversion(someDate) {
    moment.locale("pl");
    const finalDate = moment(someDate, "YYYY-MM-DD").format("LL");

    return finalDate;
  }

  return (
    <>
      <div id="headOfPage" className="">
        <h1 className="text-left text-green-500">Home Page</h1>
      </div>
      <div id="mainContentOfPage" className="">
        <p className="text-center font-bold text-4xl text-green-500 p-16">
          Najnowsze Ogłoszenia
        </p>
        <div className="h-full grid grid-cols-3 gap-10">
          {newestNews.map((news) => (
            <NewsSection
              key={news.id}
              id={news.id}
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
      <p className="text-right font-bold text-green-500 text-2xl p-5">
        Pokaż wszystkie ogłoszenia
      </p>
      <section className=" h-full w-full">
        <p className="text-center font-bold text-2xl text-green-500 p-5">
          Lokalizacja
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.981281819444!2d20.67109247417964!3d50.86854627557481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471827715927f3dd%3A0xbed5277cc0fda4e0!2sRodzinny%20Ogr%C3%B3d%20Dzia%C5%82kowy%20Magnolia!5e0!3m2!1sen!2spl!4v1700755204769!5m2!1sen!2spl"
          // width="1920"
          height="600"
          className="border-0 w-full"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      {/* <div id="footerOfPage" className="">
        <p>FOOTER </p>
      </div> */}
    </>
  );
}
