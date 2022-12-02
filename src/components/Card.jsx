import mapIcon from "../assets/map.png";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.imageUrl} alt="scenery" />
      <div className="card--info">
        <div className="card--location">
          <img src={mapIcon} alt="map icon" />
          <div className="country--name">{props.location}</div>
          <a href={props.mapUrl}>View On Google Maps</a>
        </div>
        <div className="country--title">{props.title}</div>
        <div className="date">
          <span>{props.startDate}</span> - <span>{props.endDate}</span>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
