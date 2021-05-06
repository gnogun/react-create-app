import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => i !== index),
    });
  };

  handleSubmit = (character) => {
    const { characters } = this.state;
    this.setState({ characters: [...characters, character] });
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default FormPage;
