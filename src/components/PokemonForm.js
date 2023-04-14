import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddNew}) {
  const [formInfo, setformInfo] = useState({
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: '',
  })

  

  function handleSubmit() {
    const newPokemon = {
      'name': formInfo.name,
      'hp': formInfo.hp,
      'sprites': {
        'front': formInfo.frontUrl,
        'back': formInfo.backUrl,
      },
    }
    
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPokemon)
    })
      .then(response => response.json())
      .then(data => onAddNew(data))

    setformInfo({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: '',
    })
  }

  function handleChange(event) {
    setformInfo({
      ...formInfo,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={handleChange} fluid label="Name" placeholder="Name" name="name" value={formInfo.name} />
          <Form.Input onChange={handleChange} fluid label="hp" placeholder="hp" name="hp" value={formInfo.hp} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange}
            value={formInfo.frontUrl}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange}
            value={formInfo.backUrl}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
