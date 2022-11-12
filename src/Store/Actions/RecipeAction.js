import { GET_RECIPIES, ACTIVE_RECIPE, REMOVE_ACTIVE_RECIPE, CREATE_RECIPE, REMOVE_RECIPE,MODIFY_RECIPE } from "../ActionTypes";
import axios from "../../utils/axios";



export const GetRecipe = () => dispatch => {
    axios.get('/products')
        .then(response => {
            console.log(response.data.products)
            return dispatch({
                type: GET_RECIPIES,
                payload: response.data.products

            })
        })
        .catch(err => console.log(err.response))
}

export const CreateRecipe = (recipe) => dispatch => {
    console.log(recipe)
    axios.post('/products/add', recipe)
        .then(response => {
            console.log(response)
            return dispatch({
                type: CREATE_RECIPE,
                payload: response
            })
        })
        .catch(err => console.log(err.response));

    //console.log(recipe)
    // fetch('https://dummyjson.com/products/add', {
    //     method: 'POST',
    //    // headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(recipe)
    // })
    //     .then(res => {
    //         console.log(res)
    //         return dispatch({
    //             type: CREATE_RECIPE,
    //             payload: res

    //         })
    //     })
    //     .catch(err => console.log(err.response))
};

export const ModifyRecipe = (recipe) => dispatch => {
    //console.log(recipe)
    // axios.patch(`/recipe/update/${id}`, { ...recipe })
    //     .then(response => {
    //         console.log(response);
    //         return dispatch(GetRecipe())
    //     })
    //     .catch(err => console.log(err));
    return dispatch({
        type: MODIFY_RECIPE,
        payload: recipe
    })

};

export const RemoveRecipe = (id) => dispatch => {
    // axios.delete(`/recipe/delete/${id}`)
    //     .then(response => {
    //         return dispatch(GetRecipe())
    //     })
    //     .catch(err => console.log(err));
    console.log(id)
    return dispatch({
        type: REMOVE_RECIPE,
        payload: id
    })
}


export const GetActiveRecipe = (id) => dispatch => {
    console.log(id)
    // axios.get(`/products/${id}`)
    //     .then(response => {
    //         //console.log(response.data)
    //         return dispatch({
    //             type: ACTIVE_RECIPE,
    //             payload: response.data

    //         })
    //     })
    //     .catch(err => console.log(err.response))
    return dispatch({
        type: ACTIVE_RECIPE,
        payload: id

    })

    //console.log(id)
    //return {
    //    type: ACTIVE_RECIPE,
    //    payload: id
    //}
}

export const RemoveActiveRecipe = () => {
    return {
        type: REMOVE_ACTIVE_RECIPE,
    }
}



