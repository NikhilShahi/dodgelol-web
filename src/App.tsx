import { useState } from "react";
import styled from "styled-components";
import { Input, IconButton, HStack, VStack } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

const ContentContainer = styled(VStack)`
  padding-top: 10vh;
`;

const Logo = styled.img`
  width: 270px;
  height: 220px;
`;

const App = () => {
  const [summonerName, setSummonerName] = useState("");

  const submitName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `/summoner/${summonerName}`;
  };

  return (
    <ContentContainer spacing="50">
      <Logo
        src="https://drive.google.com/uc?export=view&id=1O_Np5sH4NMKtl0N7ldPnHdrzGxbm5W0K"
        alt="logo"
      />
      <form onSubmit={submitName}>
        <HStack>
          <Input
            value={summonerName}
            placeholder="Summoner Name"
            color="primary"
            onChange={(e) => setSummonerName(e.target.value)}
            required
          />
          <IconButton
            type="submit"
            aria-label="Search Summoner"
            icon={<FiArrowRight />}
          />
        </HStack>
      </form>
    </ContentContainer>
  );
};

export default App;
