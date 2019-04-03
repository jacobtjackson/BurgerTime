import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState  = {
    ingredients: null,
    totalPrice: 4,
    error: false
};

const INGREDIENT_PRICES = {
    salad: .5,
    cheese: 1,
    meat: 1.6,
    bacon: 1.2
}

const addIngredient = (state, action) => {
    const newIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1}
    const updatedIngredients = updateObject(state.ingredients, newIngredient)
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObject(state, updatedState);
}

const removeIngredient = (state, action) => {
    const newIng= {[action.ingredientName]: state.ingredients[action.ingredientName] - 1}
    const updatedIng = updateObject(state.ingredients, newIng)
    const updatedSt = {
        ingredients: updatedIng,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObject(state, updatedSt);
}

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
        },
        totalPrice: 4,
        error: false,
        building: false
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED: return updateObject(state, {error: true})
        default: return state;
    }
};

export default reducer;