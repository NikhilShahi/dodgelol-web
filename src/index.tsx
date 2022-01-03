import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import styled from "styled-components";
import { $salmon, $teal, $white } from "./constants/colors";
import App from "./App";
import { SummonerPage } from "./pages";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";

const Container = styled.div`
  background-color: ${$salmon};
  width: 100vw;
  height: 100vh;
`;

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/summoner/:summonerName" element={<SummonerPage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
