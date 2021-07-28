import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MuiChart from "./Chart";

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {
  const fullWidth = true;
  const maxWidth = "xs";

  return (
    <Dialog
      onClose={() => props.handleDia(false)}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      aria-labelledby="customized-dialog-title"
      open={props.isOpen}
    >
      <DialogTitle color="primary" id="customized-dialog-title">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography style={{ flexGrow: 1 }} variant="h6">
            Chart Details
          </Typography>

          <IconButton aria-label="close" onClick={() => props.handleDia(false)}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent style={{ height: "260px" }} dividers>
        <div>
          <Grid container spacing={1} style={{ width: "100%", height: "100%" }}>
            <Grid item xl={12} xs={12} sm={12}>
              <MuiChart question={props.question} />
            </Grid>
          </Grid>
        </div>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
}
