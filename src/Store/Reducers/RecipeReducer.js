import { GET_RECIPIES, ACTIVE_RECIPE, REMOVE_ACTIVE_RECIPE, CREATE_RECIPE, REMOVE_RECIPE ,MODIFY_RECIPE} from "../ActionTypes";


const initialState = {
    recipes: [],
    activerecipe: null
}

const RecipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPIES:
            const apiRecipe = action.payload.map(r => {
                return {
                    ...r,
                    id: r._id,
                    date: String(r.createdAt)
                }
            })
            return {
                ...state,
                recipes: apiRecipe,
            }
        case ACTIVE_RECIPE:
            for (let i = 0; i < state.recipes.length; i++) {
                if (state.recipes[i].date === action.payload) {
                    return {
                        ...state,
                        activerecipe: state.recipes[i],
                    }
                }
            }

        case REMOVE_ACTIVE_RECIPE:
            return {
                ...state,
                activerecipe: null
            }
        case REMOVE_RECIPE:
            console.log(action.payload)
            const RRD = [...state.recipes]
            console.log(RRD)
            const FRD = RRD.filter(r => r.date !== action.payload)
            return {
                ...state,
                recipes: FRD,
            }

        case CREATE_RECIPE:
            const CNR = [...state.recipes]
            console.log(action.payload.data)
            CNR.push(action.payload.data)
            return {
                ...state,
                recipes: CNR
            }

        case MODIFY_RECIPE:
            const MNR = [...state.recipes]
            console.log(MNR)
            const MRIndex = MNR.findIndex(r => r.date === action.payload.date)
            MNR[MRIndex] = action.payload
            console.log(MRIndex)
            return {
                ...state,
                recipes: MNR
            }
        default:
            return state
    }
}

export default RecipeReducer