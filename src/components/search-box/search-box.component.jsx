import React from "react";

import "./search-box.style.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
    //onChange is a JSX SyntheticEvent
  />
);

// FUNCTIONAL COMPONENTS
// unlike class components, don't have access to state, because they dont have access to
// the constructor() which is a Class method of Component that we import from React
// they also don't have access to Life Cycle Methods
//
// SO, a Functional Component is just a Component that gets some proprs
// and returns some HTML
