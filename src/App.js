import React, { Component} from 'react';
import Header from "./Components/Header/Header";
import {Grid,Typography} from "@material-ui/core";
import './App.css';
import CardRecipe from "./Components/CardRecipe/CardRecipe";
import AddRecipe from "./Components/AddRecipe/AddRecipe";
import RecipeInfo from "./Components/RecipeInfo/RecipeInfo";
import ListRecipe from "./Components/ListRecipe/ListRecipe";
import {Redirect,Route,Switch } from "react-router-dom";
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { GetRecipe } from "./Store/Actions";

class App extends Component {
  
  componentDidMount() {
    this.props.GetRecipe()
  }
  
  render() { 
    // let isGrid = 'row';
    // if(this.props.location.pathname === '/listrecipe'){
    //   isGrid =  'column';
    // }

    return (
      <div>
        <Header />
        <Grid container >
            <Grid item sm={1}></Grid>
            <Grid container item sm={10}>
                <Switch>
                  <Route path='/cardrecipe' component={CardRecipe} />
                  <Route path='/listrecipe' component={ListRecipe} />
                  <Route path='/addrecipe' component={AddRecipe} />
                  <Route path='/recipeinfo/:id' component={RecipeInfo} />
                  <Redirect from='/' to='/cardrecipe'  />
                </Switch>
            </Grid>
            <Grid item sm={1}></Grid>
        </Grid>
        <Typography align='center' className='footer'>Made with <span>❤</span>  by Vaibhav.</Typography>
      </div>
    );
  }
}

const mapDispatchToProps=({
  GetRecipe
})

export default connect(null,mapDispatchToProps)(withRouter(App));