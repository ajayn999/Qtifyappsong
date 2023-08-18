import React from "react";
import { formatNumber } from "../../utils/FormatNumber";
import "./Card.css";

const Card = ({ album }) => {
  const follows = formatNumber(album?.follows);
  return (
    <div className="card">
      <div>
        <img src={album.image} alt={album.title} className="card_image" />
        <div className="card_body">
          <span>{follows} Follows</span>
        </div>
      </div>

      <div className="card_footer">
        <p>{album?.title}</p>
      </div>
    </div>
  );
};

export default Card;
