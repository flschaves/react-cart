import React, { useState } from "react";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import SearchIcon from "@material-ui/icons/Search";

const SearchForm = () => {
  const [value, setValue] = useState("");

  const handleChange = () => (event) => {
    setValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <FormControl>
        <InputLabel htmlFor="standard-adornment-password">
          O que você procura?
        </InputLabel>
        <Input
          type="text"
          value={value}
          onChange={handleChange()}
          endAdornment={<SearchIcon />}
        />
      </FormControl>
    </form>
  );
};

export default SearchForm;
