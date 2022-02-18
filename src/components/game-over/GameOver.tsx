import { FC, useContext } from "react";
import FlipCard from "../flip-card/FlipCard";
import { Grid } from "@mui/material";
import { StyledStartAgainButton } from "../start-game-button/StartGameButton.styled";
import { StyledGrid } from "../../game/Game.styled";
import { StatusTypes } from "../../types/index";
import { MoviesContext } from "../../context/MovieContext";

interface GameOverProps {
  setStatus: React.Dispatch<React.SetStateAction<StatusTypes>>;
}

const GameOver: FC<GameOverProps> = ({ setStatus }) => {
  const { movies } = useContext(MoviesContext);
  const message = movies.length === 1 ? "GOOD JOB" : "GAME OVER";

  const handleStartGame = () => {
    setStatus(StatusTypes.playing);
  };

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
        <StyledStartAgainButton onClick={handleStartGame}>
          PLAY AGIAN
        </StyledStartAgainButton>
      </StyledGrid>
    </>
  );
};
export default GameOver;
