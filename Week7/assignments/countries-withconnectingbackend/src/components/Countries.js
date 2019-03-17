import React, { Component } from 'react';
import axios from 'axios';


class Countries extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: []
        };
    // this.countries = this.countries.bind(this);
    }
    render() {
        axios.get('http://localhost:3001')
            .then(response => {
                this.setState({ countries: response.data })
            })
            .catch(function (error) {
                console.log(error);
            });
        return (
            <div>
                <h1>Country:</h1>
                {this.state.countries.map((country) =>
                    <div className="wrapper">
                        <div className="card">
                            <h1>{country.name.common}</h1>
                            <p>Official Languages:
                                {country.languages.nld}
                                {country.languages.pap}
                            </p>
                        </div>
                    </div>
                )}
            </div>

        )
    }
}

export default Countries;