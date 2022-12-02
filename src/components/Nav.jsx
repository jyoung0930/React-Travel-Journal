import globe from "../assets/globe.png";
export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav--heading">
        <img src={globe} alt="globe image" />
        <p>My Travel Journal</p>
      </div>
    </nav>
  );
}
