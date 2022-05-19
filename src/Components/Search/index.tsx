import React, { useState, useEffect, useContext } from "react";
import { DiscographyContext } from "../../Providers/Discography";
import { Search } from "./style";

export const SearchComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const { searchAlbum } = useContext(DiscographyContext);

  return (
    <Search>
      <label>Digite uma palavra chave</label>
      <div>
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Faça uma pesquisa"
        />
        <button onClick={() => searchAlbum(inputValue)}>Procurar</button>
      </div>
    </Search>
  );
};
