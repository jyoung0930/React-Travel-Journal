import Card from "./Card";
import Nav from "./Nav";
import data from "../data/data";

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        title={item.title}
        location={item.location}
        mapUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      />
    );
  });

  return (
    <>
      <Nav />
      {cards}
    </>
  );
}
