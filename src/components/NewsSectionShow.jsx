export default function newsSectionShow() {
  return (
    <div className="h-full grid grid-cols-3 gap-10">
      {sortedNewsArray.map((news) => (
        <NewsSection
          key={news.id}
          title={news.attributes.title}
          date={dateConversion(news.attributes.date)}
          shortDescription={news.attributes.shortDescription}
          photo={
            "http://localhost:1337" +
            news.attributes.cover.data.attributes.formats.small.url
          }
        />
      ))}
    </div>
  );
}
