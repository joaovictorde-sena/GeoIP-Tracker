import { useState } from "react";
import "./Header.css";

const Header = ({ onSearch, ipData }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
    }
  };

  return (
    <div className="header">
      <h1 className="title">GeoIP Tracker</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="busque o ip ou dominio"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      {ipData && (
        <div className="info">
          <div className="info-item">
            <h2>IP ADDRESS</h2>
            <p>{ipData.ip}</p>
          </div>
          <div className="info-item">
            <h2>LOCATION</h2>
            <p>
              {ipData.location.city}, {ipData.location.country}{" "}
              {ipData.location.postalCode}
            </p>
          </div>
          <div className="info-item">
            <h2>TIMEZONE</h2>
            <p>UTC {ipData.location.timezone}</p>
          </div>
          <div className="info-item">
            <h2>ISP</h2>
            <p>{ipData.isp}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
