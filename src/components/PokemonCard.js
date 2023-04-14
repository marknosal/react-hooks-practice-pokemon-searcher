import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ poke }) {
  const { name, hp, sprites } = poke
  const { front, back } = sprites

  const [image, setImage] = useState(true)

  function handleSwitch() {
    setImage(image => !image)
  }



  return (
    <Card>
      <div>
        <div className="image" onClick={handleSwitch}>
          <img src={image ? front : back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
