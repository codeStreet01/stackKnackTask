import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import SingleList from './SingleList/SingleList';

const ListRecipe = (props) => {

  const [state, setstate] = useState(null);
  useEffect(() => {
    if(props.recipy){
      setstate([...props.recipy])
    }
    
  }, [props.recipy]);


  let allList=''
  if(state){
    allList = state.map((r,i)=>
      <SingleList key={i} recipe={r} />
      //console.log('first')
    )
  }

  return (
    <div>
      {allList}
    </div>
  );
}

const mapStateToProps = state=>{
  return{
    recipy: state.RecipeReducer.recipes
  }
}

export default connect(mapStateToProps)(ListRecipe);
