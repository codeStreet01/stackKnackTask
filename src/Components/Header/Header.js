import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography,Button,IconButton} from '@material-ui/core';
import GridOff from '@material-ui/icons/GridOff';
import GridOn from '@material-ui/icons/GridOn';
import { withRouter,Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom:'2rem'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkstyle: {
    textDecoration: 'none',
    color: '#fff'
  }
}));
const Header = (props) => {
  const classes = useStyles();
  
  const gridSwitchHandler=()=>{
     if(props.location.pathname === '/cardrecipe' ){
       props.history.push('/listrecipe')
     } 
     else if(props.location.pathname === '/listrecipe' ){
      props.history.push('/cardrecipe')
    } 
  }


  return (
    <div className={classes.root}>
      <AppBar color='secondary' position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
          <Link className={classes.linkstyle} to='/'>
            🛒 Shopकार्ट 🛍
          </Link>
          </Typography>
          <IconButton 
              onClick={gridSwitchHandler} 
              edge="start" 
              className={classes.menuButton} 
              color="inherit" 
              aria-label="menu">
                  
                  {props.location.pathname === '/cardrecipe'? <GridOff /> : '' }
                  {props.location.pathname === '/listrecipe'? <GridOn /> : '' }

          </IconButton>
          <Button onClick={()=>props.history.push('/addrecipe')} color="inherit">Add Product</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Header)