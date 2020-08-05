import React, { Component } from 'react';

class Form extends Component {

    state = {
        name : '',
        job : '',
    }

    initStates = () =>  {
        this.setState({
            name : '',
            job : '',
        })
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name] : value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.initStates()
        console.log("new state" + this.state.name)
    }

    render() {
        const { name, job } = this.state;

        return (
            <form>
                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form