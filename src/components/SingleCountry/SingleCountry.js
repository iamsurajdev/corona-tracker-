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
          onChange={(e) => props.handleCountryChange(e.target.value)}
        >
          <option value="">Global</option>
          {countries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default SingleCountry;
