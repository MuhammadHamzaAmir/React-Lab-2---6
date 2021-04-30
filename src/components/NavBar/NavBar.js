import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from '../../images/Navbarlogo.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  abRoot: {
    backgroundColor: "#529A9F"
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 88
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" 
      classes={{
          root: classes.abRoot
        }}>
        <Toolbar style={{ 'paddingLeft': '0px' }}>
          <img style={{ 'width': '105px', 'backgroundColor': 'white' }} src={Logo} alt={'Welcome'}></img>
          <Typography style={{ 'backgroundColor':'#163736', 'color': 'white', 'maxWidth': '230px', 'paddingLeft':'40px', 'marginRight':'40%', 'border': '1px solid black', 'borderLeftStyle': 'none', 'borderRadius': '0px 10px 10px 0px'}} 
          variant="h6" className={classes.title}>
            XYZ Consortium
          </Typography>
          <Button color="#E4E4E4">Home</Button>
          <Button href='#aboutus' color="inherit">About Us</Button>
          <Button href='#whatwedo' color="inherit">What we do</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
