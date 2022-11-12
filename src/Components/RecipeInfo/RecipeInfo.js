import React, { useEffect,useState} from 'react';
import { Redirect,Route,Switch } from "react-router-dom";
import {Paper,CardMedia}from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RecipeDetails from './RecipeDetails/RecipeDetails'
import AddRecipe from '../AddRecipe/AddRecipe';
import { connect } from "react-redux";
import { GetActiveRecipe,RemoveActiveRecipe } from "../../Store/Actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width:'100%',
    marginBottom:'2rem'
  },
  cover: {
    width: '50%',

  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width:'50%'
  },
  
}));


const RecipeInfo = (props) => {
  const classes = useStyles();
  
  const [state, setstate] = useState({});

  useEffect(() => {
   if(props.recipy === null){
     setTimeout(() => {
      props.GetActiveRecipe(props.match.params.id)
     }, 2500);
      
    }else{
      
      setstate({...props.recipy})
    }

    return()=>{
      if(props.recipy){
        props.RemoveActiveRecipe()
      }
    }
    
  }, [props]);

//console.log(props.recipy)

  return (
    <Paper elevation={3} className={classes.root}>
      {state.images!=undefined && <CardMedia
        className={classes.cover}
        src = 'Please no warning'
        image={state.images[0]}
        title={state.title}
      /> }
      <div className={classes.description}>
          <Switch>
              
              <Route exact path={`${props.match.url}/`} component={RecipeDetails} />
              <Route path={`${props.match.url}/edit`} component={AddRecipe} />
              <Redirect from={props.match.url} to={`${props.match.url}/info`} />
          </Switch>

      </div>
    </Paper> 
  );
}

const mapStateToProps= state =>{
  return{
    recipy:state.RecipeReducer.activerecipe
  }
  
}

const mapDispatchToProps=({
  GetActiveRecipe,
  RemoveActiveRecipe
})


export default connect(mapStateToProps, mapDispatchToProps)(RecipeInfo);




