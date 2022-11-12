import React,{useState,useEffect} from 'react';
import { TextField, Grid,Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { CreateRecipe,ModifyRecipe } from "../../Store/Actions/index";

const useStyles = makeStyles((theme) => ({
    textfields: {
        width: '100%',
        marginBottom: '1rem'
    },
    spaced:{
        marginLeft:'1rem'
    }
}));

const AddRecipe = (props) => {
    const classes = useStyles();

    const initialstate={
        title:'',
        category:'',
        image:'',
        description:'',
        brands:'',
    }

    const [state,setstate] = useState(initialstate)

    const changeHandler=(e)=>{
        e.persist()
        setstate(prev=>({...prev,[e.target.name]:e.target.value}))
    }

    const SubmitRecipeHandler=(e)=>{
        e.preventDefault()
        if(
             state.title.trim()==='' ||   
             state.category.trim()==='' ||
             state.image.trim()==='' ||
             state.description.trim()==='' ||
             state.brands.trim()==='' 
         ){return alert('All Fields Are Compulsury')}

        const {_id,title, category, description, image,brands,date} = state;
        const Recipe = {title, category, description}
        Recipe.brand= brands.split(',')
        // Recipe.ingredientsArray = ingredients
         Recipe.images=[]
         Recipe.images.push(image)

        if(props.match.url ==='/addrecipe'){
            props.CreateRecipe(Recipe)
            props.history.push('/')
        }
        else{
            // const Recipe = {id,date,dish, chef, description, image}
            // Recipe.ingredientsArray = ingredients.split(',')
            //console.log(_id,Recipe,date)
            Recipe.date=date
            props.ModifyRecipe(Recipe)
            props.history.goBack()
        }
        
    }

    useEffect(() => {
     if(props.recipy){
         let recipee = {...props.recipy} 
         //recipee.ingredients = recipee.ingredientsArray.join()
         delete recipee.ingredientsArray
         setstate({...recipee})
     }

     return()=>{
        if(props.match.url ==='/addrecipe'){
            setstate({title:'',
            category:'',
            image:'',
            description:'',
            brands:'',})
        }
     }
    }, [props]);

    return (
        <Grid container>
            <Grid item sm={2}></Grid>
            <Grid container item sm={8}>
              <form onSubmit={SubmitRecipeHandler}> 
                <TextField
                    className={classes.textfields}
                    color="secondary"
                    label="Title"
                    name='title'
                    onChange={changeHandler}
                    value={state.title}
                    variant="outlined" />
                <TextField
                    className={classes.textfields}
                    color="secondary"
                    name='category'
                    onChange={changeHandler}
                    value={state.category}
                    label="Category Name"
                    variant="outlined" />
                <TextField
                    className={classes.textfields}
                    color="secondary"
                    name='brands'
                    onChange={changeHandler}
                    value={state.brands}
                    label="Brand"
                    variant="outlined" />
                <TextField
                    className={classes.textfields}
                    color="secondary"
                    label="Image URL"
                    name='image'
                    onChange={changeHandler}
                    value={state.image}
                    type='url'
                    variant="outlined" />
                <TextField
                    className={classes.textfields}
                    color="secondary"
                    name='description'
                    onChange={changeHandler}
                    value={state.description}
                    label="Product Description"
                    variant="outlined" />
                <Button type="submit" variant="contained" color="secondary">Save Product</Button>
                <Button onClick={()=>props.history.goBack()} className={classes.spaced} variant="contained" color="primary">Back</Button>
              </form>
            </Grid>
            <Grid item sm={2}></Grid>
        </Grid>


    );
}

const mapStateToProps= state =>{
    return{
        recipy:state.RecipeReducer.activerecipe
    } 
  }
  
const mapDispatchToProps=({
    CreateRecipe,
    ModifyRecipe
  })
export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe);
