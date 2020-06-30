import React from "react";

import { fetchData } from "./API/api";
import Card from "./components/Card/Card";
import Chart from "./components/Chart/Chart";
import SingleCountry from "./components/SingleCountry/SingleCountry";
import styles from "./App.module.css";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.headerDiv}>
          <h1 className={styles.headerText}>Corona Tracker App </h1>
          <span className={styles.headerTextLink}>
            a product by
            <a href="https://www.linkedin.com/in/suraj-biswas-824bb4176/">
              Suraj Biswas
            </a>
          </span>
        </div>
        <Card data={data} />
        <SingleCountry handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
