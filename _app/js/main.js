import FetchRecipeData from "./modules/fetch-recipe-data.js";
import RenderRecipes from "./modules/recipes-list.js";

const recipeData = await FetchRecipeData();

RenderRecipes(recipeData);

// console.log(recipeData);

