import { useState } from "react";
import styled from "styled-components";
import { $teal, $white } from "./constants/colors";
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IconButton from "@mui/material/IconButton";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10vh;
`;

const Logo = styled.img`
  width: 270px;
  height: 220px;
`;

const InputContainer = styled.form`
  display: flex;
  flex-direction: row;
  margin-top: 20vh !important;
`;

const SummonerInput = styled(TextField)`
  background-image: none;
  background-color: initial;
  border-radius: 4px;
  border-color: initial;
  color: rgb(169, 161, 150);
  outline-color: initial;
  box-shadow: rgb(0 0 0 / 19%) 0px 2px 2px 0px;
  margin-right: 10vh;
`;

const SearchButton = styled(IconButton)`
  && {
    background-color: ${$teal};
  }
`;

const SearchIcon = styled(ArrowForwardIcon)`
  && {
    color: ${$white};
    font-size: 50px;
  }
`;

const App = () => {
  const [summonerName, setSummonerName] = useState("");

  const submitName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `/summoner/${summonerName}`;
  };

  return (
    <ContentContainer>
      <Logo
        src="https://drive.google.com/uc?export=view&id=1O_Np5sH4NMKtl0N7ldPnHdrzGxbm5W0K"
        alt="logo"
      />
      <InputContainer onSubmit={submitName}>
        <SummonerInput
          value={summonerName}
          variant="filled"
          placeholder="Summoner Name"
          color="primary"
          onChange={(e) => setSummonerName(e.target.value)}
          required
        />
        <IconButton type="submit">
          <SearchIcon />
        </IconButton>
      </InputContainer>
    </ContentContainer>
  );
};

export default App;
