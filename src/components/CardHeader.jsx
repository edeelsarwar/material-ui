import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import BackspaceIcon from '@material-ui/icons/Backspace';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height:'100px',
    color:'black',
    marginBottom:'20px'
  },
  cardContentMain:{
    padding:'0px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
    marginLeft:'20px'
  },

  cardContentSub :{
    display:'flex',
    color:'black',
    flexBasis:'50%',
    alignItems:'center',
    fontSize:'30px',
    fontWeight:'bold'
  },
  cardContentSpan :{
    fontSize:'35px',
    color:'blue',
    margin:'0px 10px 0px 10px',
    alignItems:'center',
    display:'flex', 
    justifyContent:'center'
  },
  cardContentTitle :{
    display:'flex',
    color:'black',
    flexBasis:'35%',
    fontSize:'25px',
    fontWeight:'bold'
  },
  cardContentProfile :{
    display:'flex',
    color:'black',
    flexBasis:'30%',
    justifyContent:'flex-end'
  },
  cardContentText:{
    marginRight:'20px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center'
    ,alignItems:'center'
  }

}));

export default function CardHeader() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
        
      <CardContent className={classes.cardContentMain}>
     
           <div className={classes.cardContentSub} style={{}}>
               <span><BackspaceIcon className={classes.cardContentSpan}  > /</BackspaceIcon></span>
               Client Logo</div>
           <div className={classes.cardContentTitle} >Ell Studio</div>
           <div className={classes.cardContentProfile} >
               <img src={'https://i.pinimg.com/originals/73/16/f5/7316f550de9ca0045e3d8d98a5bb5e44.png'} width='50px' alt={'test'} />
               <div className={classes.cardContentText} >
                 <p style={{marginLeft:'10px'}}>Tom Cruise</p>
                
               </div>
           </div>
           
     
      </CardContent>
 
  
    </Card>
  );
}
