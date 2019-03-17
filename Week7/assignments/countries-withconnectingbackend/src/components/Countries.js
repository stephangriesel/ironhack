import React, { Component } from 'react';
import axios from 'axios';
import '../css/Country.css';


class Countries extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            // searchedCountries: []
        };
        this.search = this.search.bind(this);
    }

    // create search function, pass in event
    // set search value to event.currentTarget.value
    // create new variable with results and use search value set to filter through countries 
    // return country name, set index and pass search value as parameter (tip !== -1)
    // set the state to the countries result

    // search is not working because I can see the countries: response.data is replacing it

    search(event) {
        var searchVal = event.currentTarget.value;
        // console.log('Hello');
        var filterCountries = this.state.countries.filter(country => {
            return country.name.common.indexOf(searchVal) !== -1;
        })
        this.setState({ countries: filterCountries })
    }

    render() {
        axios.get('http://localhost:3001')
            .then(response => {
                // Question to TA: can I do this, for example, know its not the corrrect way to do it
                // countryData = response.data
                this.setState({ countries: response.data })
                // this.setState({ countries: filterCountries })
            })
            .catch(function (error) {
                console.log(error);
            });
        return (
            <div>
                <h1>Country:</h1>
                <div>
                    <input onChange={this.search} placeholder="enter country name" type="text" />
                </div>
                {this.state.countries.map((country) =>
                    <div className="wrapper">
                        <div className="card">
                            <h1>{country.name.common}</h1>
                            <p>Official Languages:
                            <ul>
                                {/* {country.languages.map((lang) => <li>{lang}</li>)} */}
                            </ul>
                            </p>
                            <p>Currency used:
                                <span className="bold-gold"> {country.currency}</span>
                            </p>
                            <p>Capital:
                                <span className="bold"> {country.capital}</span>
                            </p>
                            <p>Top Level Domain:
                                <span className="bold"> www.yourdomain{country.tld}</span>
                            </p>
                        </div>
                    </div>
                )}
            </div>

        )
    }
}

export default Countries;