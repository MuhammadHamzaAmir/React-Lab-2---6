import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#3E4A4B',
    margin: '0px auto',
    borderRadius: '0px 0px 30px 30px',
    width: 500,
    borderTop:'none',
    
  },
  title: {
    textAlign: 'right',
    fontSize: 14,
    color:"#B9DDDF"
  },
  pos: {
    textAlign: 'right',
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}
    style={{ height: "200px" }}>
      <CardContent >
        <Typography className={classes.title} color="white" >
        <h2 style={{'textAlign':'center'}}>Welcome to NOWHERE</h2>
        <p style={{'color':'#E7F6F7','textAlign':'center'}}>Nowhere is a completely empty, infinite white void of absolute nothingness.  Nowhere in the realm of darkness. There appears to be nothing in this dimension. </p>
        </Typography>
      </CardContent>
    </Card>
  );
}
