import React from "react";

function SearchCity({ city, onCityChange }) {
  return (
    <label htmlFor="city">
      City:
      <input
        id="city"
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={onCityChange}
      />
    </label>
  );
}

export default SearchCity;
