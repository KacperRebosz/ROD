import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsSection from "../components/NewsSection";
import moment from "moment/min/moment-with-locales";
import PageFooter from "../components/Footer";
import { NavLink } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";

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
      <AnimatedPage>
        <div id="mainContentOfPage" className="">
          <p className="ml-20 p-16 pt-8 text-center text-4xl font-bold text-[#054b28]">
            Najnowsze Ogłoszenia
          </p>

          <div className="grid h-full grid-cols-3 gap-10">
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
        <p className="p-5 text-right text-2xl font-bold text-[#054b28] ">
          <NavLink
            to="/AboutUs"
            className="text-[#054b28] hover:text-black hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[2px] before:origin-right before:transition-transform before:duration-800 before:scale-x-0 before:bg-black before:absolute before:left-0 before:bottom-[-2px]"
          >
            Pokaż wszystkie ogłoszenia
          </NavLink>
        </p>
        <section className=" h-full w-full">
          <p className="p-5 text-center text-4xl font-bold text-[#054b28]">
            Lokalizacja
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.981281819444!2d20.67109247417964!3d50.86854627557481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471827715927f3dd%3A0xbed5277cc0fda4e0!2sRodzinny%20Ogr%C3%B3d%20Dzia%C5%82kowy%20Magnolia!5e0!3m2!1sen!2spl!4v1700755204769!5m2!1sen!2spl"
            height="600"
            className="w-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </AnimatedPage>
    </>
  );
}
