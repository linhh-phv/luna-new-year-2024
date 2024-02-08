import * as React from "react";
import { Link } from "react-router-dom";
import Toggle from "../../components/toggle";
import TicTacToeGame from "../../feature/tictactoe";
import { CardItem, CardList } from "../../components/card";
import Box from "../../components/box";
import {
  FireworksText,
  ExplodingFireworks,
  FireworksAni,
  Banner2024,
} from "../../feature/luna-new-year";
import { Canvas } from "react-three-fiber";
import { ThemeProvider } from "styled-components";
import { HelloTailwind } from "../../feature/tailwind";

export default function Home() {
  return (
    <div className="w-full">
      <Box title="About">
        <Link to="/about">About</Link>
      </Box>

      <Box title="HelloTailwind">
        <HelloTailwind />
      </Box>

      <Box title="card item">
        <div
          style={{
            backgroundColor: "#ccc",
            paddingTop: 30,
            paddingBottom: 100,
          }}
        >
          <CardList />
        </div>
      </Box>

      <Box title="Lottie">
        <Banner2024 />
      </Box>

      <Box title="ExplodingFireworks">
        <ExplodingFireworks />
      </Box>

      <Box title="FireworksAni">
        <div style={{ height: "60vh" }}>
          <Canvas>
            <FireworksAni />
          </Canvas>
        </div>
      </Box>

      <Box title="FireworksText">
        <FireworksText />
      </Box>

      <Box title="toogle">
        <Toggle />
      </Box>

      <Box title="tictoctoe game">
        <TicTacToeGame />
      </Box>
    </div>
  );
}
