import React, { Component } from 'react';
import Table from './table.js';
import Form from './form.js';

class APP extends Component {
    state = {
        first: true,
        characters : [],
    }

    handleSubmit = (character) => {
        console.log("character" + character)
        this.setState({
            characters: [...this.state.characters, character]
        })

    }

    removeCharacter = (index) => {
        const {characters} = this.state
      
        this.setState({
          characters: characters.filter((character, i) => {
            return i !== index
          }),
        })
    }

    render() {
        const { first, characters } = this.state;
        return(
            <div>
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit} />
            </div>)
    }
}

export default APP;