import data from "../data/data";

export default function Card(props) {
  return (
    <div className="card">
      <img src={data[0].imageUrl} alt="" />
    </div>
  );
}
