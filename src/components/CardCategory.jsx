import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import Divider from "@material-ui/core/Divider";
import Visibility from "@material-ui/icons/Visibility";
import CustomizedDialogs from "../components/Dialog";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "244px",
    overflowY: "scroll",
    margin: "30px 10px 30px 10px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  header:{
    background: "blue",
    height: "40px",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "14px",
    display: "flex",
    color: "white",
    position: "absolute",
    width: "47%",
    zIndex: "1",
  },
  title:{
    fontSize:'14px',
    fontWeight:'bold',
    marginLeft:'10px'
  },
  cardContent:{
    height: "100%",
    display: "flex",
    alignItems: "center",
    marginLeft: "15px",
  },
  cardContentSub:{
    alignItems: "center",
    display: "flex",
    color: "white",
    width: "100%",
    color: "black",
  }


}));

export default function CardCategory(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [questionID, setQuestionID] = useState();

  return (
    <Card className={classes.root}>
      { <CustomizedDialogs isOpen={open} question={questionID} handleDia={setOpen} /> }
      <div
      className={classes.header}>
        <div className={classes.title}>{props.title}</div>
      </div>
      {props.question.map((data) => {
        return (
         
          <CardContent style={{ padding: "0px" }}>
            <div style={{ height: "40px", marginRight: "5px" }}>
              <div
              className={classes.cardContentMain}
              >
                <div className={classes.cardContentSub}
                >
                  <div style={{ flexGrow: 1 }}> {data.question_phrase} </div>
                  <span>
                    {" "}
                    <IconButton
                      onClick={(e) => {
                        setOpen(true);
                        setQuestionID(data.question_id);
                      }}
                    >
                      <Visibility style={{ color: "blue" }} />
                    </IconButton>
                  </span>
                </div>
              </div>
            </div>
            <Divider />
          </CardContent>
          
        );
      })}
    </Card>
    
  );
}
