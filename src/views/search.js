import React, {useState} from "react";
import PropTypes from 'prop-types';
import './search.css'
import logo from "../assets/logo-stackoverflow.png";

function Search({ searchFunction }) {
  let [states, setStates] = useState({
    value: ''
  });

  function handleInput(e) {
    setStates({
      value: e.target.value
    });
  }

  function Find(e) {
    if (states.value.length > 0 && searchFunction) {
      searchFunction(states.value);
    }
  }

  return (
    <div>
      <img className="logotype" src={logo} alt="stack-logo" width="120" />
      <div className="wrap">
        <div className="search">
          <input
            onChange={handleInput}
            className="searchTerm"
            value={states.value}
            type="text"
            placeholder="Search.."
          />
          <button onClick={Find} className="searchButton">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

Search.propTypes = {
  searchFunction: PropTypes.func
}

export default Search;