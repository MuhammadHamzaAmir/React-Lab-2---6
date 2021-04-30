import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Logo from '../../images/Navbarlogo.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:'auto 100px'
  },
  paper: {
    textAlign: 'center',
    padding: '7px auto',
    marginTop: '4%',
    backgroundColor: '#0C6268',
    color: '#E7F6F7'
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
            <img style={{ 'width': '200px', 'paddingTop': '30px'}} src={Logo} alt={'Hello'}></img>
        </Grid>
        <Grid item xs={9}>
          <Paper style={{ 'paddingTop': '10px', 'paddingBottom':'10px' }} className={classes.paper}>
            "Why have you brought me here? Get me out!"

- Creepy Wither Doll when used in The Nowhere

The Nowhere is a strange dimension you are warped to when you use the RNG relinquisher in the end

The sky is purple and random structures such as villages will spawn. Random Pumpkins and Melons are placed all around the area. And obsidian pillars with end crystals are scattered around the dimension. in the 0.5 update (dragon update) the Executor Dragon will spawn.

In the center of The Nowhere there is a large, obsidian spire, this is most likely where the Executor Dragon will spawn on top of. 
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
