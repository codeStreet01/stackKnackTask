import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import SingleCard from './SingleCard/SingleCard';


const CardRecipe = (props) => {

  const [state, setstate] = useState(null);
  useEffect(() => {
    if (props.recipy) {
      setstate([...props.recipy])
    }

  }, [props.recipy]);
  console.log(state)


  if (state) {
    for (let i = 0; i < state.length; i++) {
      state[i].date = i + 1
    }
  }


  let allList = ''
  if (state) {
    allList = state.map((r, i) =>
      <SingleCard key={i} recipe={r} />
    )
  }

  return allList
}

const mapStateToProps = state => {
  return {
    recipy: state.RecipeReducer.recipes
  }
}

export default connect(mapStateToProps)(CardRecipe);
