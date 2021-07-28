
import React from "react";
import CardCategory from '../components/CardCategory'
import CardHeader from '../components/CardHeader'
import {array} from "../data"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main:{
    display:'grid', 
    gridTemplateColumns:'1fr 1fr', 
    columnGap: '30px',
    marginRight:'10px'
  }

}));
const Studio = (props) => {
  const classes = useStyles();
  return (
    <div >
  <CardHeader />     
    <div className={classes.main}>
      {
       array[0].exercises.map((data,index) => {
        return   <CardCategory title={data.exercise_name} question={data.questions} />

        })
      }
        </div>
    </div>
  );
};

export default Studio;