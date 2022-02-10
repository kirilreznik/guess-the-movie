import { Grid, Typography } from "@mui/material";
import GameActionButton from "../../../components/game-action-button/GameActionButton";
import { GridContainer } from "./Statistics.Alert.styled";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const StatisticsAlert = (props: {
  open: boolean;
  openHandler: Function;
  guessedRight: number;
  guessedWrong: number;
  hintsTaken: number;
}) => {
  return (
    <div>
      <Dialog
        PaperProps={{
          style: { backgroundColor: "black", border: "0.3px solid white" },
        }}
        open={props.open}
        onClose={() => {
          props.openHandler();
        }}
        color="error"
      >
        <GridContainer container>
          <Grid item>
            <DialogTitle color="white">{"Your Statistics:"}</DialogTitle>
          </Grid>
          <Grid item>
            <DialogContent>
              <Typography color="white">
                Guessed Right:{props.guessedRight}
              </Typography>
              <Typography color="white">
                Guessed Wrong:{props.guessedWrong}
              </Typography>
              <Typography color="white">
                Hints Used :{props.hintsTaken}
              </Typography>
            </DialogContent>
          </Grid>
          <Grid item>
            <DialogActions>
              <GameActionButton
                autoFocus
                onClick={() => {
                  props.openHandler();
                }}
              >
                Got it
              </GameActionButton>
            </DialogActions>
          </Grid>
        </GridContainer>
      </Dialog>
    </div>
  );
};
export default StatisticsAlert;