import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SearchBar.css";
import searchIcon from "./ic-search-bar.png";
import { useTranslation } from "react-i18next";

const SearchBar = ({ onSearch }) => {
  const { t } = useTranslation("translation");

  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar-wrapper">
      <img src={searchIcon} alt="Search Icon" className="search-bar-icon" />
      <input
        type="text"
        placeholder={t(`search-bar.text`)}
        value={query}
        onChange={handleInputChange}
        className="search-bar"
      />
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
