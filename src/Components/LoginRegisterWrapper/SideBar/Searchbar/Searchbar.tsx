import React, { useState } from "react";
import "./Searchbar.scss";

const Searchbar = () => {
  const [text, setText] = useState("");
  return (
    <div className="searchbar_container">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        className="searchbar"
        name="input_searchbar"
        id="input_searchbar"
        required
      />
      <label htmlFor="input_searchbar" className="searchbar_label">
        Search for user
      </label>
    </div>
  );
};

export default Searchbar;
