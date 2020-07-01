import React, { useState, useEffect } from "react";
import { fetchCountries } from "../../API/api";
import styles from "./SingleCountry.module.css";
import { NativeSelect, FormControl } from "@material-ui/core";

const SingleCountry = (props) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchedCountries = async () => {
      setCountries(await fetchCountries());
    };

    fetchedCountries();
  }, []);
  return (
    <div>
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={(event) => props.handleCountryChange(event.target.value)}
        >
          <option value="">Global</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default SingleCountry;
