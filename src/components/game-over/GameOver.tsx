import { FC } from "react";
import FlipCard from "../flip-card/FlipCard";
import { Grid } from "@mui/material";
import StartAgainButton from "../../game/components/buttons/start-again-button/StartAgainButton";
import { StyledGrid } from "../../game/Game.styled";

interface GameOverProps {
  message: string;
}

const GameOver: FC<GameOverProps> = ({ message }) => {
  return (
    <>
      <StyledGrid container direction="column" marginTop="18rem">
        <Grid item marginBottom="2rem">
          <Grid container>
            {message.split("").map((letter, index) => {
              return (
                <Grid item key={index}>
                  <FlipCard letter={letter} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <StartAgainButton />
      </StyledGrid>
    </>
  );
};
export default GameOver;
